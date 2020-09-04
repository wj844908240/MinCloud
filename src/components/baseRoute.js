/**
 * route 自定义组件
 */


import React, { Component } from "react";
import { Route } from "react-router-dom";

export default class BaseRoute extends Component {

    componentWillUpdate() {
        // console.log("route listen update--->>", window.location.href)
    }

    render() {
        let props = this.props;
        return (
            <Route {...props} children={() => {return this.props.children }}></Route>
        )
    }
}