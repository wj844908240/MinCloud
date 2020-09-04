/**
 *  loading 组件
 */

import React, {Component} from "react";
import "./index.less";


class LoadingCmpt extends Component {

    shouldComponentUpdate() {
        return false
    }

    render() {

        const cls = `cmpt cmpt-loading ${this.props.cls || ""}`;
        return (
            <div className={cls}>
                <div className="spinner">
                    <div className="spinner-container container1">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                    </div>
                    <div className="spinner-container container2">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                    </div>
                    <div className="spinner-container container3">
                        <div className="circle1"></div>
                        <div className="circle2"></div>
                        <div className="circle3"></div>
                        <div className="circle4"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoadingCmpt;