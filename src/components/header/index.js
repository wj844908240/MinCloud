import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import "../../App.css"
import "./index.less"
import TOOLS from "../../assets/tools/tools";

export default class Header extends Component {
    componentWillMount() {
        //console.log(window.location.pathname);
    }
    handClick() {
        sessionStorage.setItem("current", "");
        window.location.reload()
    }
    GoPrint() {
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			var name1 = 'user_token'
			var name2 = 'child_sys_userInfo'
			var info = {
				user_token: '',
				child_sys_userInfo: ''
			}
			for (let i = 0; i < cookies.length; i += 1) {
				var cookie = cookies[i].replace(/(^\s*)|(\s*$)/g, "");
				if (cookie.substring(0, name1.length + 1) == (name1 + '=')) { 
					var cookieValue = decodeURIComponent(cookie.substring(name1.length + 1));
					info.user_token = cookieValue                   
				}
				if (cookie.substring(0, name2.length + 1) == (name2 + '=')) { 
					var cookieValue = decodeURIComponent(cookie.substring(name2.length + 1));
					info.child_sys_userInfo = cookieValue                    
				}   
			}

			if (info.user_token != "" && info.child_sys_userInfo != "") {
				TOOLS.post("user/is_logined/", info).then(res => {
					if (res.status === 200) {
						if (res.data.is_logined === true) {
							window.location.href = "http://www.miningcloud.com.cn/console"
						} else {
							// this.props.history.push("/login")
							// 页面刷新
							// window.location.reload()
							document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/;domain=miningcloud.com.cn"
							window.location.href = "http://digital.miningcloud.com.cn:8031?ser_from_mianPage=http://www.miningcloud.com.cn/console"
						}
					}
				})
			} else {
				document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/;domain=miningcloud.com.cn"
				window.location.href = "http://digital.miningcloud.com.cn:8031?ser_from_mianPage=http://www.miningcloud.com.cn/console"
			}
		} else {
				document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/;domain=miningcloud.com.cn"
				window.location.href = "http://digital.miningcloud.com.cn:8031?ser_from_mianPage=http://www.miningcloud.com.cn/console"			
		}
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
                            {/* <li><a href="http://www.miningcloud.com.cn/console"  onClick={e => this.GoPrint()}>管理控制台</a>|</li> */}
                            <li><a href="javascript:void(0)"  onClick={e => this.GoPrint()}>管理控制台</a>|</li>
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