import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import TOOlS from "../../assets/tools/tools"
import {Steps, message, Spin, Checkbox} from 'antd';
import "./register.less"
import "./login.less"
import "./../common/index.less"
import DetailHeader from "../../components/header/index";
import Footer from "../../components/footer/index";

const Step = Steps.Step;
message.config({
    top: 400,
    duration: 1,
});
let timer = null;

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            role: false,
            user_name: "",
            user_pwd: "",
            user_rpwd: "",
            user_telephone: "",
            code: "",
            email: "",
            vcodeTimer: null,
            vcodeCount: 60,
            phoneReady: false,
            checked: false,
            loading: false,
            errMsg: [],
        };
        this.pwdInput = this.pwdInput.bind(this)
    }

    componentWillMount() {

    }

    componentDidMount() {
        if (this.state.vcodeTimer || timer) {
            clearTimeout(this.state.vcodeTimer || timer);
            this.setState({
                vcodeTimer: null
            });
            timer = null;
        }
    }

    next(Role) {
        TOOlS.storage.set("role", Role);
        const current = this.state.current + 1;
        this.setState({current});
        if (TOOlS.storage.get("role") === "general") {
            this.setState({
                role: true
            });
        } else {
            this.setState({
                role: false
            });
        }
    }
    changeRole() {
        if (TOOlS.storage.get("role") === "general") {
            TOOlS.storage.set("role", "enterprise")
        } else {
            TOOlS.storage.set("role", "general")
        }
        if (this.state.role === false) {
            this.setState({
                role: true
            });
        } else {
            this.setState({
                role: false
            });
        }
    }
    //获取焦点
    userFocusChange(e) {
        let re = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!re.test(e.target.value)) {
            message.warning("用户名只能由字母、数字和下划线组成，长度为3-16位！")
        }
        this.setState({
            user_name: e.target.value
        })
    }

    passwordFocusChange(e) {
        let re = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (!re.test(e.target.value)) {
            message.warning("密码至少8位，需包含数字和字母！")
        }
        this.setState({
            user_pwd: e.target.value
        })
    }

    rpasswordFocusChange(e) {
        if (this.state.user_pwd !== e.target.value) {
            message.warning("两次密码不一致！")
        }
        this.setState({
            user_rpwd: e.target.value
        })
    }

    phoneFocusChange(e) {
        this.setState({
            user_telephone: e.target.value
        });
    }

    emailFocusChange(e) {
        let re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
        if (!re.test(e.target.value)) {
            message.warning("请输入正确的邮箱！")
        }
        this.setState({
            email: e.target.value
        })
    }

    codeFocusChange(e) {
        this.setState({
            code: e.target.value
        });
    }

    onCheckbox(e) {
        this.setState({
            checked: e.target.checked,
        });
    }

    pwdInput() {
        let phone = TOOlS.trim(this.refs.phone.value);
        let phoneReady = !!(phone.substr(0, 11)).match(/^1[345678]\d{9}$/g)
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
        const {vcodeTimer, phoneReady, user_telephone, vcodeCount} = this.state;
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
        if (vcodeCount === 60) {
            TOOlS.get("verifycode/register_via_mobile/", {
                mobile: user_telephone,
            }).then(res => {
                if (res.status === 200) {
                    !timer && cycle();
                    message.warning("验证码发送成功,请注意查收！")
                }
                message.warning(res.response.data.error_desc)
            }).catch(err => {
                console.log(err)
            })
        } else {
            message.warning("验证码已发送,请不要重复点击哦！")
        }
        this.setState({
            vcodeTimer: timer
        })
    }

    login() {
        let u_name = TOOlS.trim(this.refs.username.value);
        let pwd = TOOlS.trim(this.refs.pwd.value);
        let rpwd = TOOlS.trim(this.refs.rpwd.value);
        let phone = TOOlS.trim(this.refs.phone.value);
        let code = TOOlS.trim(this.refs.code.value);
        let email = TOOlS.trim(this.refs.email.value);
        if (!phone) {
            message.warning('手机号码不能为空！');
            return false
        }
        if (!code) {
            message.warning('验证码不能为空！');
            return false
        }
        if (!u_name) {
            message.warning('用户名不能为空！');
            return false
        }
        if (!email) {
            message.warning('邮箱不能为空！');
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
        if (pwd != rpwd) {
            message.warning('两次密码不一致！');
            return false
        }
        if (this.state.checked === false) {
            message.warning('请仔细阅读天河矿业云服务协议！');
            return false
        }
        TOOlS.post("verifycode/match_verification_code/", {
            verification_code: code.toUpperCase(),
            service: "register"
        }).then(res => {
            if (res.status === 200) {
                TOOlS.post("user/register/", {
                    username: u_name,
                    password: rpwd,
                    role: TOOlS.storage.get("role"),
                    mobile: phone,
                    email: email,
                    verification_code: code
                }).then(res => {
                    if (res.status === 200 || res.status === 201 || res.status === 304) {
                        const current = this.state.current + 1;
                        this.setState({current});
                        /*message.warning("注册成功，欢迎使用天河矿业云平台！")
                        this.props.history.push("/container/login")*/
                    }
                }).catch(error => {
                    if (error.response) {
                        this.setState({
                            errMsg: error.response.data
                        })
                    }
                })
            }
            message.warning(res.response.data.error_desc)
        }).catch(err => {
            console.log(err)
        })

    }
    render() {
        const {current, vcodeCount, role, errMsg} = this.state;
        const steps1 = () => {
            return (
                <div className="setp_register">
                    <div className="login-item">
                        <p className="back-home"><Link to={"/"}>&lt;&nbsp;&lt;&nbsp;返回首页</Link></p>
                        <div className="login-left">
                            <img src={require("../../img/logo.png")}/>
                            <p>矿业综合云服务平台，打造智能矿业新生态！</p>
                        </div>
                        <div className="steps1">
                            <h2 className="fs-title">选择账号类型</h2>
                            <div className="next action-button" onClick={() => this.next("general")}>
                                <img src={require("../../img/user1.png")}/>
                                <span>个人用户</span>
                            </div>
                            <div className="next action-button qyyh" onClick={() => this.next("enterprise")}>
                                <img src={require("../../img/qy1.png")}/>
                                <span>企业用户</span>
                            </div>
                            <p>已有账号，<Link to={"/login"}>立即登录</Link></p>
                        </div>
                    </div>
                </div>
            )
        }
        const steps2 = () => {
            return (
                <div className="steps2">
                    <p className="steps-login"><img src={require("../../img/logo.png")}/></p>
                    <h2>
                        <span className="active">{role === false ? "企业用户注册" : "个人用户注册"}</span>
                        <span onClick={e => this.changeRole()}> {role === false ? "个人用户注册" : "企业用户注册"}</span>
                    </h2>
                    <div className="per-content">
                        <h3 className="fs-title">填写账户信息</h3>
                        <div className="login_min_box">
                            <label><span>*</span>手机号码</label>
                            <input ref="phone"
                                   className="pwd"
                                   onInput={() => this.pwdInput()}
                                   onBlur={this.phoneFocusChange.bind(this)}
                                   type="tel"
                                   placeholder="手机号码"/>
                        </div>
                        <p className="error">{errMsg.mobile && errMsg.mobile.length > 0 && errMsg.mobile[0]}</p>
                        <div className="login_min_box">
                            <label>&nbsp;</label>
                            <input ref="code"
                                   className="code"
                                   onBlur={this.codeFocusChange.bind(this)}
                                   type="text"
                                   placeholder="验证码"/>
                            <div className="vcode-btn" onClick={e => this.getVcode()}>
                                {vcodeCount < 60 ? vcodeCount + "s" : "获取验证码"}
                            </div>
                        </div>
                        <p className="error">{errMsg.verification_code && errMsg.verification_code.length > 0 && errMsg.verification_code[0]}</p>
                        <div className="login_min_box">
                            <label><span>*</span>用户名</label>
                            <input ref="username"
                                   className="username"
                                   onBlur={this.userFocusChange.bind(this)}
                                   type="text"
                                   placeholder="请输入用户名"/>
                        </div>
                        <p className="error">{errMsg.username && errMsg.username.length > 0 && errMsg.username[0]}</p>
                        <div className="login_min_box">
                            <label><span>*</span>邮箱</label>
                            <input ref="email"
                                   onBlur={this.emailFocusChange.bind(this)}
                                   type="email"
                                   placeholder="邮箱"/>
                        </div>
                        <p className="error">{errMsg.email && errMsg.email.length > 0 && errMsg.email[0]}</p>
                        <div className="login_min_box">
                            <label><span>*</span>密码</label>
                            <input ref="pwd"
                                   className="userpassword"
                                   onBlur={this.passwordFocusChange.bind(this)}
                                   type="password"
                                   placeholder="请输入密码"/>
                        </div>
                        <p className="error">{errMsg.password && errMsg.password.length > 0 && errMsg.password[0]}</p>
                        <div className="login_min_box">
                            <label><span>*</span>确认密码</label>
                            <input ref="rpwd"
                                   className="userpassword"
                                   onBlur={this.rpasswordFocusChange.bind(this)}
                                   type="password"
                                   placeholder="确认密码"/>
                        </div>
                        <p className="error">{errMsg.password && errMsg.password.length > 0 && errMsg.password[0]}</p>
                        <div className="forgot">
                            <Checkbox checked={this.state.checked} onChange={e => this.onCheckbox(e)}>我已阅读并同意</Checkbox>
                            <Link to={"/container/register_rotocol"}>《天河矿业云服务协议》</Link>
                        </div>
                        <div className="sub">
                            <div className="zc-btn" onClick={this.login.bind(this)}>确认并提交</div>
                            <div className="home-back"><Link to={"/"}>返回首页</Link></div>
                        </div>
                    </div>
                </div>
            )
        }
        const steps4 = () => {
            return (
                <div className="steps4">
                    <h2>注册成功</h2>
                    <div className="card-title">
                        <span className="line-v"></span>
                        <span className="card-title-txt"><img src={require("../../img/ok.png")}/></span>
                        <span className="line-v"></span>
                    </div>
                    <div className="ok">
                        <p className="steps-login"><img src={require("../../img/logo.png")}/></p>
                        <p>恭喜{this.state.user_name}，您已注册成功，欢迎使用天河矿业云平台！</p>
                        <p>现在去<Link to={"/login"} className="c-blue">用户中心</Link>登录使用</p>
                    </div>
                </div>
            )
        }
        const steps = [
            {
                title: '选择账户类型',
                content: steps1(),
            }, {
                title: '填写账户信息',
                content: steps2(),
            }, {
                title: '注册成功',
                content: steps4(),
            }];
        return (
            <div className="login-body">
                <DetailHeader history={this.props.history}></DetailHeader>
                <div className="page_register">
                    <Spin spinning={this.state.loading}>
                        <Steps current={current}>
                            {steps.map(item => <Step key={item.title} title={item.title}/>)}
                        </Steps>
                        <div className="steps-content">{steps[current].content}</div>
                    </Spin>
                </div>
                <Footer/>
            </div>
        )
    }
};

export default RegistrationForm