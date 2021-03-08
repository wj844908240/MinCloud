import React, { Component } from "react";
import "../BaseCloud/index.less"
import "./../common/index.less"
class Demand extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	};
	GoLink(){
    	this.props.history.push("/container/commodity");
  	}
  	
	render(){
		return(
			<div className="cloud_conten">
				<div className="banner">
					<h2>供需对接</h2>
					<div className="content">
						对建筑的规划、设计、施工、运营管理的全生命周期进行信息化管理，优化设计、控制成本、协助管理、提高工程效率与质量。
					</div>
					<button onClick={e=>this.GoLink()}>立即使用</button>		
				</div>
				<div className="product">
					<h2>功能与服务</h2>
					<ul>
						<li>
							<h3>功能与服务</h3>
							<p>河南省商务公共服务云平台将按照“一个平台，两个应用（大数据应用、云服务应用），三个连接（连接部门与部门、连接部门与企业、连接企业与市场）</p>
						</li>
						<li>
							<h3>功能与服务</h3>
							<p>河南省商务公共服务云平台将按照“一个平台，两个应用（大数据应用、云服务应用），三个连接（连接部门与部门、连接部门与企业、连接企业与市场）</p>
						</li>
						<li>
							<h3>功能与服务</h3>
							<p>河南省商务公共服务云平台将按照“一个平台，两个应用（大数据应用、云服务应用），三个连接（连接部门与部门、连接部门与企业、连接企业与市场）</p>
						</li>
						<li>
							<h3>功能与服务</h3>
							<p>河南省商务公共服务云平台将按照“一个平台，两个应用（大数据应用、云服务应用），三个连接（连接部门与部门、连接部门与企业、连接企业与市场）</p>
						</li>
						<li>
							<h3>功能与服务</h3>
							<p>河南省商务公共服务云平台将按照“一个平台，两个应用（大数据应用、云服务应用），三个连接（连接部门与部门、连接部门与企业、连接企业与市场）</p>
						</li>
					</ul>
				</div>	
			</div>
		)
	}
};
export default Demand;