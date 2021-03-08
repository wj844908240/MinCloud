
import React, { Component } from "react";
import { Row, Col } from 'antd';
import "../could/index.less";
import "./index.less";
import "./minDesign.less";
import "./../common/index.less"

class Min3DMine extends Component {
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
				<div className="computing-could banner">
					<div className="info">
						<div className="title"><h2>MIM Transparent三维可视化平台</h2></div>
						<div className="text"><span>以MIM为本体，以三维可视化的方式实现数据驱动的矿山综合管控</span></div>
					</div>
				</div>

				<div className="server" style={{ height: "auto", backgroundColor: '#fff' }}>
					<div className="topEle">
						<Row>
							<Col className="ant-col" span={5}>
							</Col>
							<Col className="ant-col" span={14}>
								<Row>
									<Col className="ant-col" span={12}>
										<div className="content">
											<div className="word">
												<div className="headline" ><span>全系统实时数据集成</span></div>
												<ul>
													<li>快速高效构建矿山三维场景，真实再现矿山运行环境和物理工况</li>
													<li>多种数据接入方式，集成矿山各系统多源异构数据融合</li>
													<li>建立资源共享一体化机制，实现各业务数据共享，协同办公</li>
												</ul>
											</div>
										</div>
									</Col>
									<Col className="ant-col" span={12}>
										<div className="imgContent">
											<div className="img9 flex_right"></div>
										</div>
									</Col>
								</Row>
							</Col>
							<Col className="ant-col" span={5}></Col>
						</Row>
					</div>
					<div className="middleEle">
						<Row>
							<Col className="ant-col" span={5}>
							</Col>
							<Col className="ant-col" span={14}>
								<Row>
									<Col className="ant-col" span={12}>
										<div className="imgContent">
											<div className="img10"></div>
										</div>

									</Col>
									<Col className="ant-col" span={12}>
										<div className="content">
											<div className="word  flex_right conDes">
												<div className="headline" ><span>三维可视化管理</span></div>
												<ul>
													<li>将三维场景模型与实时数据融合，交互式查询</li>
													<li>可视化设备管理与应急指挥</li>
													<li>多形式报表提高总结效率</li>
												</ul>
											</div>
										</div>
									</Col>
								</Row>
							</Col>
							<Col className="ant-col" span={5}></Col>
						</Row>
					</div>
					<div className="botEle">
						<Row>
							<Col className="ant-col" span={5}>
							</Col>
							<Col className="ant-col" span={14}>
								<Row>
									<Col className="ant-col" span={12}>
										<div className="content">
											<div className="word">
											<div className="headline" ><span>挖掘数据价值</span></div>
											<ul>
												<li>海量数据的分布式存储与处理</li>
												<li>基于人工智能的数据分析计算能力</li>
												<li>设备诊断、系统优化、辅助决策</li>
											</ul>
											</div>

										</div>
									</Col>
									<Col className="ant-col" span={12}>
										<div className="imgContent">
											<div className="img11 flex_right"></div>
										</div>
									</Col>
								</Row>
							</Col>
							<Col className="ant-col" span={5}></Col>
						</Row>
					</div>
					<div className="leftDisgn"></div>
					<div className="rightDesign"></div>
				</div>
			</div>
		)
	}
};
export default Min3DMine;