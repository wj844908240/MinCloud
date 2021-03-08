import React, { Component } from "react";
import { Row, Col } from 'antd';
import "./../could/index.less";
import "./../min/minDesign.less";
import "./index.less";
import "./../common/index.less"

class Acquisite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			size: 'large',
		};
		this.toUrl = this.toUrl.bind(this);//手动绑定
	};
	componentDidMount() {
		let curUrl = this.props.history.location.pathname;
		let urls = document.getElementsByClassName('links')
		for (let i = 0; i < urls.length; i++) {
			if (curUrl == urls[i].dataset.url) {
				urls[i].style.color = "#39B8E8"
			} else {
				urls[i].style.color = "#fff"
			}
		}
	}
	toUrl(e) {
		this.props.history.push(e);
	}
	componentWillMount() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	render() {
		const { size } = this.state;
		return (
			<div className="cloud_conten">
				<div className="computing-could banner" id="acqBanner">
					<div className="info acquisiteInfo" style={{backgroundColor:'transparent'}}>
						{/* <div className="title"><h2>智能数据采集</h2></div>
						<div className="text"><span>矿山开采过程及装备数据智能采集与融合</span></div> */}
						<div className="innerText">
							<div className="title"><h2>智能数据采集</h2></div>
							<div className="english">
								INTELLIGENT DATA ACQUISITION
							</div>
							<div className="chinese">
								矿山开采过程及装备数据智能采集与融合
							</div>
						</div>
					</div>
				</div>
				<div className="server">
					<Row>
						<Col className="ant-col" span={5}>
							<div className="leftpng"></div>
						</Col>
						<Col className="ant-col" span={14}>
							<div className="title fontWeight"><span>数据采集与传输</span></div>
							<div className="center">
								<div className="discriptinfo">
									以工业通信网络、协议转换和边缘计算为核心技术，解决不敢传（数据安全问题）、不能传（协议标准不统一）、不需传（本地化和实时性问题协议转换技术）的问题。
                                </div>
								<div className="circle" id="acquisite"></div>
								<div className="topLefBox acquisite">
									<div className="tip" style={{ padding: '40px 20px 0 20px' }}>多元数据智能采集协议</div>
									<div className="arrow" style={{ height: '54px' }}>
										<span style={{ margin: '8px -15px 0 0' }}>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="topRigBox acquisite">
									<div className="tip" style={{ padding: '40px 20px 0 20px' }}>多元数据智能传输协议</div>
									<div className="arrow" style={{ height: '54px' }}>
										<span style={{ margin: '8px -15px 0 0' }}>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="bomLefBox acquisite">
									<div className="tip" style={{ padding: '40px 20px 0 20px' }}>多元数据融合一体化接入协议</div>
									<div className="arrow" style={{ height: '54px' }}>
										<span style={{ margin: '8px -15px 0 0' }}>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="bomRigBox acquisite">
									<div className="tip" style={{ padding: '40px 20px 0 20px' }}>多元数据融合一体化传输协议</div>
									<div className="arrow" style={{ height: '54px' }}>
										<span style={{ margin: '8px -15px 0 0' }}>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
							</div>
						</Col>
						<Col className="ant-col" className="right" span={5}><div className="rightpng"></div></Col>
					</Row>
				</div>
				<div className="process">
					<div className="title fontWeight"><span>数据融合与可视化</span></div>
					<div className="line">
						<img src={require("../../img/acquisiteline.png")} />
					</div>
				</div>
			</div>
		)
	}
};
export default Acquisite;