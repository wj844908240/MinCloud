import React, { Component } from "react";
import {Switch} from 'react-router-dom'
import Route from "../components/baseRoute";
/*导入组件*/
import Container from "../container/container";
import PageHome from "../container/home/index";
import NoMatch from "../container/notfound";
import Login from "../container/user/login";
import Register from "../container/user/register";
import ForgetPwd from "../container/user/forgetpwd"
import user from "../container/user/user"
import userSet from "../container/user/userset"
import userRz from "../container/user/userrz"
import userXq from "../container/user/userxq"
export default class rootRoute extends Component {
    render() {
        return (
            <Switch>
            	<Route path="/" exact component={PageHome}/>
                <Route path="/container" component={Container}/>
                <Route path={"/login"} component={Login}/>
                <Route path={"/register"} component={Register}/>
                <Route path={"/forgetpwd"} component={ForgetPwd}/>
                <Route path={"/user"} component={user}/>
                <Route path={"/userset"} component={userSet}/>
                <Route path={"/userrz"} component={userRz}/>
                <Route path={"/userxq"} component={userXq}/>
                <Route component={NoMatch}/>
            </Switch>
        )
    }
}