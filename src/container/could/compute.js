import React, { Component } from "react";
import { Row, Col, Button } from 'antd';
import "./index.less"
import TOOLS from "../../assets/tools/tools";
import "./../common/index.less"
class Cloud extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'large',
		};
	};
	componentWillMount() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	// GoPrint() {
	// 	TOOLS.get("user/is_logined/").then(res => {
	// 		if (res.status === 200) {
	// 			if (res.data.is_logined === true) {
	// 				window.location.href = "http://www.miningcloud.com.cn/gcfznew/dashboardold/"
	// 			} else {
	// 				this.props.history.push("/login")
	// 				// 页面刷新
	// 				window.location.reload()
	// 			}
	// 		}
	// 	})
	// }
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
							window.location.href = "http://www.miningcloud.com.cn/gcfznew/dashboardold/"
						} else {
							// this.props.history.push("/login")
							// 页面刷新
							// window.location.reload()
							document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/"
							window.location.href = "http://digital.miningcloud.com.cn:8031?"
						}
					}
				})
			} else {
				document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/"
				window.location.href = "http://digital.miningcloud.com.cn:8031"
			}
		} else {
				document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/"
				window.location.href = "http://digital.miningcloud.com.cn:8031"			
		}
	}
	render() {
		const { size } = this.state;
		return (
			<div className="cloud_conten">
				<div className="computing-could banner computeBanner noPadding">
					<div className="info computeInfo" style={{backgroundColor:'transparent'}}>
						<div className="innerText">
							<div className="title"><h2 className="linearColor" text="超算云服务">超算云服务</h2></div>
							<div className="text"><p>依托超级计算机强大的处理能力与天河可视化系统高效的虚拟显卡远程加速技术，将工程项目中<br/>的模型处理、仿真计算以及结果分析等操作集成在云端，为用户节省成本、缩短仿真计算时间。</p></div>
							<div className="link"><Button size={size} type="primary" onClick={e => this.GoPrint()} id="customBtn" type="primary">立即使用</Button></div>
						</div>
					</div>
				</div>
				<div className="server">
					<Row>
						<Col span={5}>
							<div className="leftpng"></div>
						</Col>
						<Col span={14}>
							<div className="title fontWeight"><span>功能与服务</span></div>
							<div className="center">
								<div className="circle"></div>
								<div className="topLefBox">
									<span className="tip">高性能计算集群</span>
									<p className="word">依托“天河”超级计算机，计算性能卓越；按需 <br />动态调整计算资源权限，满足多元化需求。<br />&nbsp;</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="topRigBox">
									<span className="tip">界面化提交作业</span>
									<p className="word">无需输入linux命令、无需编辑脚本即可提交 &nbsp;<br />作业，资源使用、任务提交情况一目了然。<br />&nbsp;</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>

								<div className="bomLefBox">
									<span className="tip">高效的数据传输</span>
									<p className="word">可访问本地文件或云端存储，提供安全可靠的<br />多用户隔离，支持文件分类管理、在线分享。<br />&nbsp;</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="bomRigBox">
									<span className="tip">专业的咨询服务</span>
									<p className="word"> 拥有专业的技术咨询团队，可提供矿业仿真计<br />算和技术支持服务。<br />&nbsp;</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
							</div>
						</Col>
						<Col className="right" span={5}><div className="rightpng"></div></Col>
					</Row>
				</div>
				<div className="process">
					<div className="title fontWeight"><span>使用流程</span></div>
					<div className="line">
						<img src={require("../../img/lineww.png")} />
					</div>
				</div>
				<div className="softer" style={{ height: 'auto', marginBottom: '20px' }}>
					<div className="title fontWeight"><span>软件列表</span></div>
					<div className="line">
						<img src={require("../../img/sofer.png")} />
					</div>
				</div>
			</div>
		)
	}
};
export default Cloud;