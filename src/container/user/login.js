import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import "./login.less"
import {message} from 'antd';
import TOOlS from "../../assets/tools/tools"
import "./login.less"
import "./../common/index.less"
import DetailHeader from "../../components/header/index";
import Footer from "../../components/footer/index";
message.config({
    top:400,
    duration: 1,
});
class Login extends Component  {
	constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            user_pwd: "",
            checked:false,
            account:"",
            password:"",
            err:"",
            waring:""
        }
    }
    componentWillMount() {
    
    }

    componentDidMount() {

    }
    //获取焦点
    userFocusChange(e) {
        this.setState({
            user_name: e.target.value
        })
    }

    passwordFocusChange(e) {
        this.setState({
            user_pwd: e.target.value
        })
    }
    login() {
        let u_name = TOOlS.trim(this.refs.username.value);
        let pwd = TOOlS.trim(this.refs.pwd.value);
        if (!u_name) {
            this.setState({
                waring:"用户名不能为空！"
            })
            return false
        }
        if (!pwd) {
            this.setState({
                waring:"密码不能为空！"
            })
            return false
        }
        this.setState({
            waring:""
        })
        if(this.state.checked){
            localStorage.setItem("account",u_name);
            localStorage.setItem("password",pwd)
        }
        TOOlS.post("user/login/", {
            account: u_name,
            password: pwd
        }).then(res => {
            if(res.status === 200){
              window.location='http://www.miningcloud.com.cn/console/'
            }
        }).catch(error => {
            if (error.response) {
                this.setState({
                    err: error.response.data.error_desc
                })
            }
        })
    }
    onKeyDownLogin(event) {
        let e = event ? event : (window.event ? window.event : null);
        if (e.keyCode === 13) {
            this.login();
        }
    }
    /* 记住密码 */
    selectAll(e){
        let checked = e.target.checked;
        this.setState({
            checked:checked
        })
    }
	render(){
		return(
		    <div className="login-body">
                <DetailHeader history={this.props.history}></DetailHeader>
                <div className="container login-bg">
                    <div className="login-item">
                        <p className="back-home"><Link to={"/"}>&lt;&nbsp;&lt;&nbsp;返回首页</Link></p>
                        <div className="login-left">
                            <img src={require("../../img/logo.png")} />
                            <p>矿业综合云服务平台，打造智能矿业新生态！</p>
                        </div>
                        <div className="loginForm">
                            <div className="login_title">
                                <h1>账号登录</h1>
                            </div>
                            <p className="waring">{this.state.waring}</p>
                            <div className="login_min_box  user_box">
                                <label></label>
                                <input ref="username"
                                       className="username"
                                       onBlur={this.userFocusChange.bind(this)}
                                       type="text"
                                       placeholder="手机号/邮箱/用户名"/>
                            </div>
                            <p className="err">{this.state.err}</p>
                            <div className="login_min_box  psw_box">
                                <label></label>
                                <input ref="pwd"
                                       className="userpassword"
                                       onBlur={this.passwordFocusChange.bind(this)}
                                       onKeyDown={this.onKeyDownLogin.bind(this)}
                                       type="password"
                                       placeholder="密码"/>
                            </div>
                            <div className="forgot">
                                <div className="login-reme">
                                    <input type="checkbox" id="remember" onChange={this.selectAll.bind(this)}/>
                                    <label htmlFor="remember">记住密码</label>
                                </div>
                                <span className="login-form-forgot"><Link to={"/forgetpwd"}>忘记密码?</Link></span>
                            </div>
                            <div className="login_btn" onClick={this.login.bind(this)}>登录</div>
                            <p>还没有账号现在去<Link to={"/register"}>注册</Link></p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

		)
	}
};
export default Login;