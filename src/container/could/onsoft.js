
import React, { Component } from "react";
import { Row, Col, Button } from 'antd';
import "./index.less"
// import Swipers from '../../components/swiper/index'
import TOOLS from "../../assets/tools/tools";
import "./../common/index.less"

class Onsoft extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'large',
		};
	};
	componentWillMount() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
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
			console.log(info)
			TOOLS.post("user/is_logined/", info).then(res => {
				if (res.status === 200) {
					console.log('resp', res)
					var user_from = document.cookie = "user_from_mianPage=http://www.miningcloud.com.cn/gcfznew/dashboardold/;domain=miningcloud.com.cn"
					if (res.data.is_logined === true) {
						window.location.href = "http://www.miningcloud.com.cn/gcfznew/dashboardold/"
					} else {
						// this.props.history.push("/login")
						// 页面刷新
						// window.location.reload()
						window.location.href = "http://web.miningcloud.com.cn:8031"
					}
				}
			})
		}
	}
	render() {
		const { size } = this.state;
		return (
			<div className="cloud_conten">
				<div className="computing-could banner noPadding onsoftBanner">
					<div className="info" style={{backgroundColor:'transparent'}}>
						<div className="title"><h2>云软件</h2></div>
						<div className="text"><span>将专业软件虚拟化之后以远程桌面或远程应用的形式提供给用户使用</span></div>
						<div className="link"><Button size={size} type="primary" onClick={e => this.GoPrint()} id="customBtn" type="primary">立即使用</Button></div>
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
									<span className="tip">专业软件在线使用</span>
									<p className="word">Web端一键远程启动软件，无需本地安装和本<br />地授权，支持多用户同时调用。<br />&nbsp;</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="topRigBox">
									<span className="tip">安全可靠的数据传输</span>
									<p className="word">可访问本地文件或云端存储，提供高安全级别<br />的多用户隔离，满足高可用及数据安全需求，<br />支持文件分类管理、在线分享。</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="bomLefBox">
									<span className="tip">丰富的软件资源</span>
									<p className="word">在线软件涵盖模型前后处理、仿真计算、矿冶<br />工程咨询设计等各类软件。<br />&nbsp;</p>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="bomRigBox">
									<span className="tip">专业的咨询服务</span>
									<p className="word">拥有专业的技术咨询团队，可提供各类软件的<br />技术支持及项目外包服务。<br />&nbsp;</p>
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
				<div className="softer" style={{ height: 'auto' }}>
					<div className="title fontWeight"><span>软件列表</span></div>
					<div className="carousel line" style={{marginBottom:'40px'}}>
						<div className="box imgBox">
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>一套功能强大的工程模拟的有限元软件</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：ABAQUS</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>对离散、系统动力学、多智能体和混合系统建模和仿真的工具。应用领域包括物流、制造生产业、交通、行人疏散等。</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Anylogic</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>Fluent和CFX的通用CFD后处理器</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：CFD_Post</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>为Fluent提供计算模型、结果后处理和可视化</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：CFX</span></div>
								</div>
							</div>
						</div>
						<div className="box imgBox">
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>中国恩菲自主开发的自然崩落法放矿管理系统</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：EDMS</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>国际上比较流行的商用CFD软件包，凡是和流体、热传递和化学反应等有关的工业均可使用</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Fluent</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>铸造模拟专业软件</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Hycast</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>高性能有限元前处理器,可管理规模最大、复杂程度最高的模型从运行求解器文件的导入到导出的过程</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Hypermesh</span></div>
								</div>
							</div>
						</div>
						<div className="box imgBox">
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>世界顶级的三维动画软件</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Maya</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>专用有限元计算软件</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：NSAS</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>开源、跨平台数据分析和可视化软件</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Paraview</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>岩土力学专业分析软件</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Rockbox_dlsm3d</span></div>
								</div>
							</div>
						</div>
						<div className="box imgBox">
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>地下矿山通风系统及降温制冷仿真</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Vuma3D</span></div>
								</div>
							</div>
							<div className="flexbox">
								<div className="content_text">
									<div className="img_top">
										<div className="info"><span>焊接结构辅助系统，上海交大开发</span></div>
									</div>
									<div className="text_bom"><span><span className="name">应用名称</span>：Weld_sta</span></div>
								</div>
							</div>
							<div className="flexbox"></div>
							<div className="flexbox"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
};
export default Onsoft;