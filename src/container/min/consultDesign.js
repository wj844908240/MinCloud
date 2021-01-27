
import React, { Component } from "react";
import { Row, Col } from 'antd';
import "../could/index.less";
import "./index.less";
import "./minDesign.less";
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
				<div className="computing-could banner" id="consultDesign">
					<div className="content">
					<h2 style={{padding:'10px 0px',margin:0}}>MIM工程设计云</h2>
					<span>以MIM为核心的矿山工程数字化设计，集成行业领先的专业技术知识</span> 
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
												<div className="headline" ><span>以三维形式高效而精确地表达设计意图</span></div>
												<ul>
													<li>使用MIM.Design软件生成基于模型的矿山设计和文档</li>
													<li>三维模型集成各类工程信息</li>
													<li>三维模型关联二维图纸，通用熟悉的操作方式</li>
												</ul>
											</div>
										</div>
									</Col>
									<Col className="ant-col" span={12}>
										<div className="imgContent">
											<div className="img1"></div>
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
										<div className="imgContent" >
											<div className="img2"></div>
										</div>

									</Col>
									<Col className="ant-col" span={12}>
										<div className="content">
											<div className="word flex_right conDes">
												<div className="headline" ><span>使用MIM.Design进行分析和仿真</span></div>
												<ul>
													<li>集成专业工具和工作流程</li>
													<li>丰富的数据接口，与其他专业软件进行连接</li>
													<li>三维可视化和基于云的数据分析</li>
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
												<div className="headline" ><span>基于矿业云平台进行设计工作</span></div>
												<ul>
													<li>基于矿业数据库提高设计效率和标准化</li>
													<li>文件远端存储，多人协同工作</li>
													<li>与MIM协同平台连接，完成数字化交付</li>
												</ul>
											</div>
										</div>
									</Col>
									<Col className="ant-col" span={12}>
										<div className="imgContent">
											<div className="img3  flex_right"></div>
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
export default Minindex;