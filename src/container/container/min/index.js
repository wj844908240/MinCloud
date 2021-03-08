
import React, { Component } from "react";
import { Row, Col, Button } from 'antd';
import "../could/index.less"
import "./minIdex.less"
import "./index.less"
import TOOLS from "../../assets/tools/tools";
import Minswiper from '../../components/minSwiper/index'
import "./../common/index.less"
class Minindex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'large',
		};
	};
	componentWillMount() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	render() {
		const { size } = this.state;
		return (
			<div className="cloud_conten">
				<div className="computing-could banner" id="minIndexBanner">
					<div className="info minIndexInfo" style={{backgroundColor:'transparent'}}>
						<div className="innerText">
							<div className="title" ><h2>MIM — Mine Information Modeling</h2></div>
							<section className="text"><span>MIM（矿山信息模型），为智能矿山提供数据驱动</span></section>
						</div>
					</div>
					<div className="tools box">
						<div className="innerContent flexbox noPadding">
							<div><img src={require("../../img/DBSystem1.png")} /></div>
							<div><span>面向矿山全生命周期多维数据库系统</span></div>
						</div>
						<div className="innerContent flexbox noPadding">
							<div><img src={require("../../img/openSafe.png")} /></div>
							<div><span style={{ width: "112px" }}>开放性与安全性</span></div>
						</div>
						<div className="innerContent flexbox noPadding">
							<div><img src={require("../../img/viewsysc.png")} /></div>
							<div><span>可视化设计与分析</span></div>
						</div>
						<div className="innerContent flexbox noPadding">
							<div><img src={require("../../img/updatepro.png")} /></div>
							<div><span style={{ width: "112px" }}>持续更新与改进</span></div>
						</div>
						<div className="innerContent flexbox noPadding">
							<div><img src={require("../../img/sharework.png")} /></div>
							<div><span style={{ width: "145px" }}>协同工作与数据共享</span></div>
						</div>
					</div>
				</div>

				<div className="server" style={{ height: "700px", backgroundColor: '#fff' }}>
					<Row>
						<Col className="ant-col" span={5}>
							<div className="leftpng index"></div>
						</Col>
						<Col className="ant-col" span={14}>
							<div className="title fontWeight bottom"><span>MIM概念</span></div>
							<div className="center overWrite">
								<div className="part1">
									<div className="descript">
										矿山信息模型（Mine Information Modeling ，MIM）是以三维数字技术为基础，集成矿山工程项目各种相关信息的工程数据模型，可实现矿山全生命周期动态变化过程的数字化表达。通过连接矿山生命期不同阶段的数据、过程和资源，对矿山进行完整描述。MIM可解决分布式、异构数据之间的一致性和全局共享问题，支持包括资源勘查、方案设计、基建施工、生产管理及闭坑等在内的矿山全生命期中工程信息的动态创建、管理和共享。
									</div>
								</div>
								<div className="part2 box">
									<div className="flexbox ch1">
										<p>建筑业</p>
										<p>BIM</p>
										<p>建筑信息模型</p>
									</div>
									<div className="flexbox ch2">
										<img src={require("../../img/BIMandMIM.png")} />
									</div>
									<div className="flexbox ch3">
										<p>矿业</p>
										<p>MIM</p>
										<p>矿山信息模型</p>
									</div>
								</div>
							</div>
						</Col>
						<Col className="ant-col" className="right" span={5}><div className="rightpng index"></div></Col>
					</Row>
				</div>
				<div className="process" style={{ height: "660px", backgroundColor: '#f6f6f6', marginBottom: '0' }}>
					<div className="title fontWeight"><span>MIM价值</span></div>
					<div className="line" style={{ background: "transparent" }}>
						<div className="content">
							<div className="earthimg"></div>
							<span className="circle circle1">
								<img style={{ objectFit: 'cover', width: '60', height: '60' }} src={require(`../../img/designer.png`)}></img>
								<div className="titletext">
									<div>设计阶段</div>
									<span>为矿山提供真三维设计、数字化交底</span>
								</div>
							</span>
							<span className="circle circle2">
								<img style={{ objectFit: 'cover', width: '60', height: '60' }} src={require(`../../img/buildprocess.png`)}></img>
								<div className="titletext">
									<div>建设阶段</div>
									<span>为矿山提供施工数字化管理</span>
								</div>
							</span>
							<span className="circle circle3">
								<img style={{ objectFit: 'cover', width: '60', height: '60' }} src={require(`../../img/runprocess.png`)}></img>
								<div className="titletext">
									<div>运营阶段</div>
									<span>为矿山提供生产数字化管理</span>
								</div>
							</span>
						</div>
					</div>
				</div>
				<div className="softer" style={{ marginBottom: '20px' }}>
					<div className="title fontWeight"><span>MIM平台</span></div>
					<div className="carousel line">
						<Minswiper history={this.props.history} />
					</div>
				</div>
			</div>
		)
	}
};
export default Minindex;