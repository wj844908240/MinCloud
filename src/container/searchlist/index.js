import React, { Component } from "react";
import Search from "../../components/search/index"
import List from "../../components/clist/list"
import TOOLS from "../../assets/tools/tools";
import LoadingCmpt from "../../components/loading/index"
import "./index.less"

import {Breadcrumb ,Pagination } from 'antd';
class SearchList extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      Keyword: TOOLS.storage.get("Keyword") || "",
      isLoading: true,
      pageIndex: 1,
      pageSize: 10,
      total: 1,
      DataList:[],
      nothing: true,
    }
  }
  componentWillMount() {
    this.searchList();
  }
  componentDidMount(){

  }
  searchList(keyword = this.state.Keyword, pageIndex = this.state.pageIndex) {
    TOOLS.get("enterpriseauth/", {
      search: keyword,
      page: pageIndex,
      page_size: this.state.pageSize,
    }).then(res => {
      if (res.status === 200) {
        if (res.data.results.length > 0) {
          this.setState({
            nothing: true,
            DataList: res.data.results,
            total: res.data.count,
            isLoading: false
          })
        } else {
          this.setState({
            nothing: false,
            isLoading: true
          })
        }
      }
    })
  }
  //跳转至详情页
  GoLink(id){
    this.props.history.push("/container/companylist?id="+id);
  }
  render(){
    const {DataList,Keyword, total, nothing, isLoading} =this.state
    const itemList= (item,index)=>{
      return(
        <div className="item clearfix" key={index+1} onClick={e=>this.GoLink(item.id)}>
          <div className="box_left">
            <img src={item.logo === "" ? require("../../img/logo_none03.jpg") : item.logo}/>
          </div>
          <div className="box_right">
            <p>
              <span>{item.enterprise_name}
                <b className={item.checkau === 0 ? "rz":"wrz"}>
                  {item.checkau === 0 ? <b>已认证</b>:<b>未认证</b>}
                </b>
              </span>
              <span>{item.register_address}</span>
            </p>
            <p>{item.description}</p>
            <div>标签：{item.tags}</div>
          </div>
        </div>
      )
    }
    const onChange = (pageNumber) => {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
    };
    const searchSome = () => {
      return (
        isLoading ? <LoadingCmpt/> : <div className="s-content">
              <div className="s_result">为您找到<span>{this.state.total}</span>条相关信息</div>
              <div className="searchList">
                {
                  DataList.map((item,index)=>{
                    return itemList(item,index)
                  })
                }
              </div>
              <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange} total={this.state.total}/>
          </div>
        )
      };
    const searchnothing = () => {
      return (
        <div className="page_search">
          <div className="p_img"></div>
          <div className="found_content">
          <h2>暂无<span>{TOOLS.storage.get("Keyword")}</span>相关搜索内容</h2>
          <p>请换个关键词试试吧</p>
          </div>
        </div>
        )
    };
    return(
      <div className='Model clearfix'>
          <div className="addr clearfix">
            <div className="m_left">
              <Breadcrumb>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
                <Breadcrumb.Item><a href="">搜索结果</a></Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <div className="m_right">
              <Search keyWord={this.state.Keyword} history={this.props.history} keyWord={this.state.Keyword}
                    placeholder={"请输入关键字搜索"}></Search>              
            </div>
          </div> 
          {nothing ? searchSome() : searchnothing()}
      </div> 
    )
  }
};
export default SearchList;