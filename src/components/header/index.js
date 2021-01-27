import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import "../../App.css"
import "./index.less"
export default class Header extends Component {
    componentWillMount() {
        //console.log(window.location.pathname);
    }
    handClick() {
        sessionStorage.setItem("current", "");
        window.location.reload()
    }
    render(){  
      let { match } = this.props;
        return(
            <div id='header'>
                <div className="main">
                    <div className="h_left">
                        {/* <span><a target="_blank" href="http://www.miningcloud.com.cn/home/">中国矿业信息化协同创新中心</a></span> */}
                    </div>
                    <div className="h_right">
                        <ul>
                            <li><a href="http://www.miningcloud.com.cn/console">管理控制台</a>|</li>
                            <li><a href="http://techinfo.miningcloud.com.cn">行业资讯</a></li>
                            {/* <li onClick={e=>this.handClick()}><Link to={"/container/new"}>行业资讯</Link>|</li> */}
                            {/* <li onClick={e=>this.handClick()}><Link to={"/container/help"}>帮助中心</Link>|</li>
                            <li onClick={e=>this.handClick()}><Link to={"/container/about"}>关于我们</Link></li> */}
                        </ul>
                    </div>
                </div>
            </div> 
        )
    }
}