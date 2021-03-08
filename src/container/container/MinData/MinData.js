import React, { Component } from "react";
import "../BaseCloud/index.less"
import "./../common/index.less"
class MinData extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	};
	componentWillMount() {
		document.documentElement.scrollTop = document.body.scrollTop = 0;
	}
	render(){
		return(
			<div className="cloud_conten">
				<div className="banner mim">
					<div className="container">
						<h2>矿业大数据</h2>
						<div className="content">
							立足于“管理数据化、数据资源化、资源最大化”的建设原则，基于信息化建设平台，
							依托大数据技术，构建集数据采集、数据整合、数据存储、
							数据分析利用为一体的大数据管理系统，把矿山生产、设备、安全、
							人力资源、薪酬、物资、科技、运输、能源等各项管理高度集成、相互融合等。
						</div>
						<a href="">即将上线</a>
					</div>
				</div>
				<div className="product">
					<h2>矿业大数据</h2>
					<div className="p_content">
						<p>立足于“管理数据化、数据资源化、资源最大化”的建设原则，基
						于信息化建设平台，依托大数据技术，构建集数据采集、数据整合、数据存储、数据分析利用为一体的大数据管理系统，把矿山生产、设备、安全、人力资源、薪酬、物资、科技、运输、能源等各项管理高度集成、相互融合。整合多源异构数据资源，构建矿业数据词典和数据仓库。实现基于大数据
						的矿山灾害预警、重大关键设备故障诊断、矿山系统优化、市场需求和价格预测、企业资源管理等。</p>
						<p>矿业大数据云服务平台坚持合力共建原则，项目带动原则以及集成共享原则。创建信息汇聚、资源开放、人才流动、成果共享、
						运行高效的资源共享平台。矿业大数据云平台的建设将为矿业在信息化、自动化、智能化领域的发展提供技术支撑，
						助力智能矿山建设。</p>
						<p className="p_img"><img src={require("../../img/data.jpg")} /></p>
					</div>
				</div>	
			</div>
		)
	}
};
export default MinData;