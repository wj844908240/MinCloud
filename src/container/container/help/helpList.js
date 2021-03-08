import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import TOOLS from "../../assets/tools/tools";
import Utils from "../../assets/tools/utils";
import "./index.less"
import { Menu} from 'antd';
import "./../common/index.less";
const SubMenu = Menu.SubMenu;

class HelpDetail extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			current: "",
			listData:[]
		};
		this.handleClick = this.handleClick.bind(this);//手动绑定
	};
	componentWillMount() {
	    const id = Utils.getUrlParams().id
	      //获取详情数据
	    TOOLS.get(`helpDoc/?menuId=${id}`).then(res => {
	    	if(res.status === 200){
	    		this.setState({
	    			listData:res.data
	    		});
	    	}
	    }) 
	}
	handleClick (e) {
		this.setState({
			current: e.key,
		});
	}

	render(){
		const {listData}=this.state
		const leftMeun=(item,index)=>{
			if(item.menus.length > 0){
				return (
					<SubMenu key={`sub${index}`} title={item.title}>
						{
							item.menus.map((it,i)=>{
								return <Menu.Item key={`mail${index}`}>{it.title}</Menu.Item>
							})
						}
					</SubMenu>
				)
			}else{
				return <Menu.Item key={`mail${index}`}>{item.title}</Menu.Item>
			}
		}
		const Helps =(item,index)=>{
			let string = /([\u4E00-\u9FA5]|[\uFE30-\uFFA0])+/g;
			if(item.content!==""&&item.content.match(/[^\(\)]+(?=\))/g)!==null){
				return(
					<div key={index}>
						<p>{item.content.match(string).toString()}</p>
						<p className="hp_img"><img src={item.content.match(/[^\(\)]+(?=\))/g)[0]}/></p>
						<p className="hp_img"><img src={item.content.match(/[^\(\)]+(?=\))/g)[1]}/></p>
					</div>
				)
			}else if(item.content!==""){
				return(
					<div key={index}>
						<p>{item.content.match(string).toString()}</p>
					</div>
				)
			}
		}
		return(
			<div id="helpList">
				<div className="content_wrap">
			  		<ul className="left_nav">
				  		<h3><Link to={"/container/help"}>全部产品</Link></h3>
				  		<Menu
					        onClick={this.handleClick}
					        style={{ width: 145 }}
					        mode="inline"
					      >
					      {
					      	listData && listData.length > 0 &&listData.map((item,index)=>{
					      		return leftMeun(item,index)
					      	})
					      }
				      </Menu>
			  		</ul>
			  		<div className="right_content">
			            <div className="title_bar">
			              <Link to={"/container/help"}>帮助中心</Link>&nbsp;&gt;&nbsp;
			              <span>{listData && listData.length > 0 &&listData[0].title}</span>
			            </div>
			            <div className="help_content">
			              <div id="test-editormd-view" className="markdown-body editormd-html-preview">
				              {
				              	listData && listData.length > 0 &&listData.map((item,index)=>{
					      			return Helps(item,index)
					      		})
				              }
				           </div>
			            </div>
		          </div>
		  		</div>
			</div>
		)
	}
};
export default HelpDetail;