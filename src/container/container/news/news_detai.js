import React, { Component } from "react";
import TOOLS from "../../assets/tools/tools";
import {BrowserRouter as Router, Link} from "react-router-dom"
import Utils from "../../assets/tools/utils";
import LoadingCmpt from "../../components/loading/index"
import {Breadcrumb } from 'antd';
import "./index.less"
import "./../common/index.less"
class NewsList extends Component  {
	constructor(props) {
		super(props);
		this.state = {
			pageIndex: 0,
			pageSize: 10,
			isLoading:true,
			listData:[],
			newData:[],
		};
	};
	componentWillMount() {
	    this.getDetaList()
	    this.getNews(this.state.pageIndex)

	}
	getDetaList(){
		const id = Utils.getUrlParams().id
	      //获取详情数据
	    TOOLS.get(`miningnews/list/${id}/`).then(res => {
	    	if(res.status === 200){
	    		this.setState({
	    			listData:res.data,
	    			isLoading:false,
	    		});
	    	}
	    }) 
	}
	getNews(pageIndex){
		//获取新闻列表数据
	    TOOLS.get("miningnews/list/", {
	      limit: this.state.pageSize,
	      offset:pageIndex,
	      type:2
	    }).then(res => {
	    	if(res.status === 200){
	    		this.setState({
	    			newData:res.data.results
	    		});
	    	}
	    }) 
	}
	GoLink(id,url){
		this.props.history.push("/container/newslist?id="+id);
		this.setState({
			isLoading:true
		});
		this.getDetaList()
	}
	render(){
		const {listData,isLoading,newData}=this.state
		const getListRight = (item,index)=>{
	    	return(
		    	<li key={index}>
			    	<span className={ index < 3 ? "newLight":""}>{index+1}</span>
			    	<a href="javascript:;" onClick={e=>this.GoLink(item.id)}>{item.title}</a>
		    	</li>
	    	)
    	}
		return(
			<div className="detail">
				<div className="addr">
					<div className="addr">
						<span onClick={e=>{window.location.href='/'}}>首页</span>&gt;<span className="breadcrumb">行业资讯</span>
					</div>
	            </div>
				{isLoading ? <LoadingCmpt/> : <div>
					<div className="detaList">
						<h1>{listData.title}</h1>
						<div className="news_info clearfix">
							<div className="right_info">
								<span>来源：</span>
								<a href={listData.source_url} target="_blank">{listData.source_name}</a>
								<span className="time">日期：{listData.publish_time.split(" ")[0]}</span>
							</div>
							<div className="key_words">
								<span>关键字： {listData.keywords} </span>
							</div> 
						</div>
						<div className="contentInfo">
							<div dangerouslySetInnerHTML = {{ __html:listData.content }}></div>
							<img src={listData.thumb}/>
						</div>
					</div>
					<div className="news_list_ad">
				    		<div className="place_ad">
						        <Link to={"/container/supply"}>
	                                <img src={require("../../img/news_new_ad_banner1.jpg")}/>
	                            </Link>
						    </div>
						    <div className="place_news">
							    <div className="place_news_title"><span>热门推荐</span></div>
							    <ul className="place_news_list">
								    {
								    	newData && newData.length > 0 &&newData.map((item,index)=>{
						    				return getListRight(item,index)
						    			})
								    }
							    </ul>
						    </div>
						   
				    	</div>
				</div>}
			</div>
		)
	}
};
export default NewsList;