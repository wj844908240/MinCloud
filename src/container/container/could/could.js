import React, { Component } from "react";
import "../BaseCloud/index.less"
import TOOLS from "../../assets/tools/tools";
import "./../common/index.less"
class Cloud extends Component  {
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
					window.location.href = "http://www.miningcloud.com.cn/gcfznew/dashboardold/"
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
				<div className="banner cloud1">
					<div className="container b-could">
						<h2>软件云服务</h2>
						<div className="content">
							<p>创新&bull;突破&bull;发展&bull;共赢</p>
							[依托“天河一号”超级计算机强大的处理能力与天河可视化系统高效的虚拟显卡远程加速技术，将产品设计与优化过程中所涉及到的CAE模型处理、仿真计算以及结果分析等操作全部集成在云端]
						</div>
						<a href="javascript:void(0)" onClick={e=>this.GoPrint()}>进入控制台</a>
					</div>
				</div>
				<div className="product">
					<h2>功能与服务</h2>
					<ul className="productionLists clearfix">
						<li>
                            <dl>
								<dt><img src={require("../../img/binoculars.png")} /></dt>
								<dd>
									<h2>远程可视化模型处理</h2>
									<p>通过citrix一键启动软件界面，开展模型前处理、模型后处理与协同仿真等可视化应用</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/cubes.png")} /></dt>
								<dd>
									<h2>界面化高性能计算</h2>
									<p>无需输入linux命令、无需编辑脚本即可提交作业，资源使用、任务提交情况一目了然，余额、余时实时查询</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/desktop.png")} /></dt>
								<dd>
									<h2>远程可视化计算</h2>
									<p>用户可以直接远程调用软件界面，开展可视化仿真计算应用</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/database.png")} /></dt>
								<dd>
									<h2>数据管理</h2>
									<p>平台支持使用浏览器以及FTP客户端两种方式管理您的文件，包括新建、上传、下载、复制、移动、删除、编辑、重命名、搜索等</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/cloud.png")} /></dt>
								<dd>
									<h2>独享可视化云服务</h2>
									<p>用户可独享云主机&云应用。独享云主机&云应用可享有远程桌面、定制化硬件配置、定制化软件应用、专属售后服务等权利，其他用户无法共享使用其软硬件资源</p>
								</dd>
							</dl>
                        </li>
                        <li>
                            <dl>
								<dt><img src={require("../../img/commenting.png")} /></dt>
								<dd>
									<h2>提供产品仿真咨询</h2>
									<p>企业有仿真需求但没有仿真团队，平台结合仿真团队、专家队伍、合作机构，可以提供专业的线下仿真咨询服务，同时为企业提供软件培训，协助企业建立自己的仿真团队</p>
								</dd>
							</dl>
                        </li>
					</ul>
				</div>	
			</div>
		)
	}
};
export default Cloud;