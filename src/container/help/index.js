import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import TOOLS from "../../assets/tools/tools";
import "./index.less"
import "./../common/index.less"
class Help extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			HelpMeun:[]
		}
	};
	componentWillMount() {
		//获取帮助中心菜单
	    TOOLS.get("helpIndex/").then(res => {
	    	if(res.status === 200){
	    		this.setState({
	    			HelpMeun:res.data
	    		});
	    	}
	    }) 
	}
	goHelpList(id){
		this.props.history.push(`/container/HelpList?id=${id}`)
	}
	render(){
        const {HelpMeun}=this.state
		const meun = (item,index)=>{
			return(
				<ul key={index}>
					<li>
						<img src={require(`../../img/h${index}.png`)}/>
						<span>{item.title}</span>
					</li>
					{
						item.body.map((it,key)=>{
							return <li key={key} onClick={e=>this.goHelpList(it.id)}>{it.title}</li>
						})
					}
				</ul>	
				)
			}
		return(
			<div id="help">
				<div className="thgyy_img_wrap">
					<Link to={"/container/HelpList?id=35"}><img src={require("../../img/help4.png")}/></Link>
					<Link to={"/container/HelpList?id=26"}><img src={require("../../img/help5.png")}/></Link>
					<Link to={"/container/HelpList?id=21"}><img src={require("../../img/help6.png")}/></Link>
				</div>
				<div className="thgyy_help_list">
					{
						HelpMeun && HelpMeun.length > 0 &&HelpMeun.map((item,index)=>{
							return meun(item,index)
						})
					}
				</div>
			</div>
		)
	}
};
export default Help;