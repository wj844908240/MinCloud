/**
 *  loading 组件
 */

import React, { Component } from "react";
import "./index.less";


class Spinner extends React.Component {
    render() {
        return (
            <div className="loading">
                <div className="logo-img">
                    <img src={require("../../img/logo.png")} alt="" />
                </div>
                <div className="loading-img">
                    <img className="trunimg" src={require("../../img/loading.png")} alt="" />
                </div>
            </div>
        )
    }
}

export default Spinner;