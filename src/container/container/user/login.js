import React, { Component } from "react";
import {Link} from "react-router-dom"
import TOOlS from "../../assets/tools/tools"
import "./newlogin.less"
import "./../common/index.less"
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, UnlockFilled, DoubleLeftOutlined  } from '@ant-design/icons';
message.config({
    top:400,
    duration: 1,
});
class Login extends Component  {
	constructor(props) {
        super(props);
        this.state = {
            checked:false,
            account:"",
            password:"",
        }
    }
    componentWillMount() {
        this.getCookie();
    }

    componentDidMount() {

    }
    onKeyDownLogin(event) {
        let e = event ? event : (window.event ? window.event : null);
        if (e.keyCode === 13) {
            if(this.state.account && this.state.password){
                let params = {... this.state}
                this.onFinish(params)
            }
        }
    }
    /* 记住密码 */
    selectAll(e){
        let checked = e.target.checked;
        this.setState({
            checked:checked
        })
    }
    onFinish(values) {
        const { account, password, checked } = values;
        let params = { account, password };
        if (checked) {
          //传入账号名，密码，和保存天数3个参数
          this.setCookie(account, password, 7);
        } else {
          this.clearCookie();
        }
        TOOlS.post("user/login/",params).then(res => {
            if(res.status === 200){
              window.location='http://www.miningcloud.com.cn/console/'
            }
        }).catch(error => {
            if (error.response) {
                message.error(error.response.data.error_desc);
            }
        })
    }
    //设置cookie
    setCookie(c_name, c_pwd, exdays) {
        var exdate = new Date(); //获取时间
        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
        //字符串拼接cookie
        window.document.cookie =
          "account" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
        window.document.cookie =
          "password" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      }
      //读取cookie
      getCookie() {
        if (document.cookie.length > 0) {
          var arr = document.cookie.split("; "); //这里显示的格式需要切割一下自己可输出看下
          for (var i = 0; i < arr.length; i++) {
            var arr2 = arr[i].split("="); //再次切割
            //判断查找相对应的值
            if (arr2[0] == "account") {
                this.setState({ account: arr2[1]});
            } else if (arr2[0] == "password") {
                this.setState({ password: arr2[1]});
            }
          }
        }
      }
      //清除cookie
      clearCookie() {
        this.setCookie("", "", -1); //修改2值都为空，天数为负1天就好了
      }
	render(){
        const layout = {
          labelCol: { span:0 },
          wrapperCol: { span: 24 },
        };
        const tailLayout = {
          wrapperCol: { offset: 0, span: 12 },
        };
   
		return(
		    <div className="login-body">
                <div className="login">
                    <div className="login-mask flex_all">
                        <div className="center flex_all">
                            <div className="left flex_all">
                                <div className="slogn">超算仿真云平台</div>
                                <div className="icon"></div>
                            </div>
                            <div className="right">
                                <div className="content">
                                    <div className="title"><span>仿真云账号登录</span></div>
                                    <div className="tabsel">
                                    <Form name="normal_login"   autoComplete="off"  ref={this.formRef} className="login-form" initialValues={{account:this.state.account, password:this.state.password,checked: this.state.checked }}  onFinish={this.onFinish.bind(this)} >
                                        <Form.Item name="account" rules={[{ required: true, message: '用户名不能为空！' }]}>
                                            <Input  prefix={<UserOutlined className="site-form-item-icon" />} placeholder="手机号/邮箱/用户名" />
                                        </Form.Item>
                                        <Form.Item name="password"  rules={[{ required: true, message: '密码不能为空！' }]}>
                                            <Input.Password  onKeyDown={this.onKeyDownLogin.bind(this)} prefix={<UnlockFilled  className="site-form-item-icon" />} type="password" placeholder="密码" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Form.Item name="checked" valuePropName="checked" noStyle>
                                                <Checkbox onChange={this.selectAll.bind(this)}>记住密码</Checkbox>
                                            </Form.Item>
                                            <Link to={"/forgetpwd"} className="login-form-forgot" >忘记密码?</Link>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" size="large" shape="round" htmlType="submit" className="login-form-button">
                                               登录
                                            </Button>
                                            <div className="register">
                                                <div> <Link to={"/"}><DoubleLeftOutlined />返回首页</Link></div>  
                                                <div> 还没有账号现在去<Link to={"/register"}>注册</Link></div> 
                                            </div>
                                        </Form.Item>
                                    </Form>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="company"><span></span></div>
                </div>
            </div> 
        </div>
		)
	}
};
export default Login;