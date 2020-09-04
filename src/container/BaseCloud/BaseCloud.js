import React, { Component } from "react";
import "./index.less"
import TOOLS from "../../assets/tools/tools";
import "./../common/index.less"
class BaseCloud extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	};
	componentWillMount() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	GoPrint() {
		TOOLS.get("user/is_logined/").then(res => {
			if (res.status === 200) {
				if (res.data.is_logined === true) {
					window.location.href = "http://www.miningcloud.com.cn/bsss/overviews/"
				} else {
					this.props.history.push("/login")
					// 页面刷新
					window.location.reload()
				}
			}
		})
	}
	render(){
		return(
			<div className="cloud_conten">
				<div className="banner rjyfw">
					<div className="resetText container b-txt">
						<h2>基础云服务</h2>
						<div className="content">
							打造安全云计算平台，提供弹性可靠IaaS云服务
						</div>
						<a href="javascript:void(0)" onClick={e=>this.GoPrint()}>进入控制台</a>
					</div>
				</div>
				<div className="basecloud">
					<h2>功能与服务</h2>
					<ul className="productionLists">
						<li>
                            <dl>
								<dt><img src={require("../../img/云主机.png")} /></dt>
								<dd>
									<h2>云主机</h2>
									<p>高性能、高可靠、安全稳定的弹性计算服务</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/云硬盘.png")} /></dt>
								<dd>
									<h2>云硬盘</h2>
									<p>灵活稳定、方便扩展的分布式块存储服务</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/云网络.png")} /></dt>
								<dd>
									<h2>云网络</h2>
									<p>安全的虚拟化网络环境和云主机粒度的安全组服务</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/负载均衡.png")} /></dt>
								<dd>
									<h2>负载均衡</h2>
									<p>均衡应用流量，消除故障节点，提高业务可用性</p>
								</dd>
							</dl>
                        </li>
					</ul>
					<ul className="productionLists">
						<li>
							<dl>
								<dt><img src={require("../../img/安全保护.png")} /></dt>
								<dd>
									<h2>安全防护</h2>
									<p>全方位安全防护服务，包含WAF，IPS和抗DDOS</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src={require("../../img/网站备案.png")} /></dt>
								<dd>
									<h2>网站备案</h2>
									<p>一站式免费网站备案服务，让您的产品快速上线</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src={require("../../img/云存储.png")} /></dt>
								<dd>
									<h2>云存储</h2>
									<p>可靠、稳定、安全和低廉价格的云存储服务</p>
								</dd>
							</dl>
						</li>
						<li>
							<dl>
								<dt><img src={require("../../img/等保评测.png")} /></dt>
								<dd>
									<h2>等保评测</h2>
									<p>快速通过《信息系统安全等级保护》测评</p>
								</dd>
							</dl>
						</li>
					</ul>
				</div>	
			</div>
		)
	}
};
export default BaseCloud;