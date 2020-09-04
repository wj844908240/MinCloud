import React, { Component } from "react";
import { Row, Col } from 'antd';
import "./../could/index.less";
import "./../min/minDesign.less";
import "./index.less";
import "./../common/index.less"

class Diagnosis extends Component {
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
		return (
			<div className="cloud_conten">
				<div className="computing-could banner" id="diagBanner">
					{/* <div className="info">
						<div className="title"><h2>远程诊断与大数据服务</h2></div>
						<div className="text"><span>远程维护操作，快速定位问题</span></div>
					</div> */}
					<div className="info diagInfo" style={{backgroundColor:'transparent'}}>
						<div className="innerText">
							<div className="title"><h2>远程诊断与大数据服务</h2></div>
							<div className="text"><p>基于大数据分析，支持用户对接入的设备进行<br />远程维护操作，快速定位问题。</p></div>
						</div>
					</div>
				</div>
				<div className="server">
					<Row>
						<Col className="ant-col" span={5}>
							<div className="leftpng"></div>
						</Col>
						<Col className="ant-col" span={14}>
							<div className="title fontWeight"><span>功能与服务</span></div>
							<div className="center" id="diagnosis">
								<div className="circle"></div>
								<div className="topLefBox diagnosis">
									<div className="tip">数据分析组件</div>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="topRigBox diagnosis">
									<div className="tip">系统优化</div>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="centerLefBox diagnosis">
									<div className="tip">设备故障诊断</div>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="centerRigBox diagnosis">
									<div className="tip">设备预防性维护</div>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>

								<div className="bomLefBox diagnosis">
									<div className="tip">能耗诊断</div>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
								<div className="bomRigBox diagnosis">
									<div className="tip">经济效果评价</div>
									<div className="arrow">
										<span>
											<span className="rightarrow"></span>
										</span>
									</div>
								</div>
							</div>
						</Col>
						<Col className="ant-col" className="right" span={5}><div className="rightpng"></div></Col>
					</Row>
				</div>
			</div>
		)
	}
};
export default Diagnosis;