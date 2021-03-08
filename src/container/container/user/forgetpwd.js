import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import "./login.less"
import {message} from 'antd';
import TOOlS from "../../assets/tools/tools"
import DetailHeader from "../../components/header/index";
import Footer from "../../components/footer/index";
import "./../common/index.less"
message.config({
    top: 400,
    duration: 1,
});
let timer = null;
class ForgetPwd extends Component  {
	constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            rpwd:"",
            pwd:"",
            user_telephone:"",
            code:"",
            vcodeTimer: null,
            vcodeCount: 60,
            phoneReady: false,
            errMsg:[]
        }
        this.pwdInput=this.pwdInput.bind(this)
    }
    componentWillMount() {
        
    }
    componentDidMount() {
        if (this.state.vcodeTimer || timer) {
            clearTimeout(this.state.vcodeTimer || timer);
            this.setState({
                vcodeTimer: null
            })
            timer = null;
        }
    }
    //获取焦点
    pwdFocusChange(e) {
        let re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (!re.test(e.target.value)) {
              message.warning("密码至少8位，需包含数字和字母！")
          }
        this.setState({
            pwd: e.target.value
        })
      }
      passwordFocusChange(e) {
        if (this.state.pwd!==e.target.value) {
          message.warning("两次密码不一致！")
      }
      this.setState({
        rpwd: e.target.value
    })
  }
    phoneFocusChange(e) {
        this.setState({
            user_telephone: e.target.value
        });
    }
    codeFocusChange(e) {
        this.setState({
            code: e.target.value
        });
    }
    pwdInput ()  {
        let phone = TOOlS.trim(this.refs.phone.value);
        let phoneReady = !!(phone.substr(0, 11)).match(/^1[34578]\d{9}$/g)
        this.setState({
            phoneReady
        })
        if (phone.value > 11) {
            this.setState({
                user_telephone: phone.value.slice(0, 11),
            })
        } else {
            this.setState({
                user_telephone: phone.value,
            })
        }
    }
    //获取验证码
    getVcode() {
        const {vcodeTimer, phoneReady,user_telephone,vcodeCount} = this.state;
        const self = this;
        const cycle = () => {
            if (self.state.vcodeCount > 0) {
                self.setState({
                    vcodeCount: self.state.vcodeCount - 1
                });
                timer = setTimeout(() => {
                    cycle();
                }, 1000)
            } else {
                clearTimeout(timer);
                timer = null;
                self && self.setState({
                    vcodeTimer: null,
                    vcodeCount: 60
                })
            }
        }
        if (vcodeTimer || !phoneReady) {
            if (!phoneReady) {
                message.warning("请输入正确的手机号！")
            }
            return
        }
        if(vcodeCount===60){
           TOOlS.get("verifycode/fetchpassword_via_mobile/", {
            mobile: user_telephone,
            }).then(res => {
                if(res.status === 200){
                  !timer && cycle();
                  message.warning("验证码发送成功,请注意查收！")
              }
              message.warning(res.response.data.error_desc)
            }).catch(res => {
                console.log(res)
            }) 
        }else{
            message.warning("验证码已发送,请不要重复点击哦！")
        }
        
        this.setState({
            vcodeTimer: timer
        })
    }
    login() {
        let pwd = TOOlS.trim(this.refs.pwd.value);
        let phone = TOOlS.trim(this.refs.phone.value);
        let code = TOOlS.trim(this.refs.code.value);
        let rpwd = TOOlS.trim(this.refs.rpwd.value);
        if (!phone) {
            message.warning('手机号不能为空！');
            return false
        }
        if (!code) {
            message.warning('验证码不能为空！');
            return false
        }
        if (!pwd) {
            message.warning('密码不能为空！');
            return false
        }
        if (!rpwd) {
            message.warning('密码不能为空！');
            return false
        }
        let re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/; 
        if (!re.test(pwd)) {
           message.warning("密码至少8位，需包含数字和字母！")
           return false
        }
        if(pwd != rpwd){
            message.warning('两次密码不一致！');
            return false
        }
        TOOlS.post("verifycode/match_verification_code/", {
            verification_code: code,
            service: "fetchpassword"
        }).then(res => {
            if(res.status === 200){
                TOOlS.put("user/change_password/", {
                    mobile_or_email: phone,
                    password: rpwd,
                    verification_code: code,
                }).then(res => {
                    if(res.status === 200){
                        message.warning('密码重置成功！');
                        this.props.history.push("/container/login")
                    }
                }).catch(error => {
                    if (error.response) {
                      this.setState({
                        errMsg:error.response.data
                      })
                    }
                  })
            }
            message.warning(res.response.data.error_desc)
        }).catch(res => {
            console.log(res)
        })
    }
	render(){
        const {vcodeCount,phoneReady,errMsg}=this.state
		return(
		    <div className="login-body">
                <DetailHeader history={this.props.history}/>
                <div className="forgetForm">
                    <p className="steps-login"><img src={require("../../img/logo.png")}/></p>
                    <div className="forget-item">
                        <div className="login_title">
                            <h1>重置密码</h1>
                        </div>
                        <div className="forget">
                            <ul className="form-list">
                                <li>
                                    <label><span>*</span>手机号码</label>
                                    <input ref="phone"
                                           className="pwd"
                                           onInput={() => this.pwdInput()}
                                           onBlur={this.phoneFocusChange.bind(this)}
                                           type="tel"
                                           placeholder="手机号码"/>
                                    <p className="error">{errMsg.mobile && errMsg.mobile.length > 0 && errMsg.mobile[0]}</p>
                                </li>
                                <li>
                                    <label>&nbsp;</label>
                                    <input ref="code"
                                           className="code"
                                           onBlur={this.codeFocusChange.bind(this)}
                                           type="text"
                                           placeholder="验证码"/>
                                    <div className="vcode-btn" onClick={e => this.getVcode()}>
                                        {vcodeCount < 60 ? vcodeCount + "s" : "获取验证码"}
                                    </div>
                                    <p className="error">{errMsg.verification_code && errMsg.verification_code.length > 0 &&errMsg.verification_code[0]}</p>
                                </li>
                                <li>
                                    <label><span>*</span>密码</label>
                                    <input ref="pwd"
                                           className="pwd"
                                           onBlur={this.pwdFocusChange.bind(this)}
                                           type="password"
                                           placeholder="输入新密码"/>
                                    <p className="error">{errMsg.password && errMsg.password.length > 0 &&errMsg.password[0]}</p>
                                </li>
                                <li>
                                    <label><span>*</span>确认密码</label>
                                    <input ref="rpwd"
                                           className="pwd"
                                           onBlur={this.passwordFocusChange.bind(this)}
                                           type="password"
                                           placeholder="输入新密码"/>
                                    <p className="error">{errMsg.password && errMsg.password.length > 0 &&errMsg.password[0]}</p>
                                </li>
                            </ul>
                        </div>
                        <div className="sub">
                            <div className="qc-btn" onClick={this.login.bind(this)}>确认并提交</div>
                            <div className="home-back"><Link to={"/"}>返回首页</Link></div>
                        </div>
                    </div>

                </div>
                <Footer/>
            </div>

		)
	}
};
export default ForgetPwd;