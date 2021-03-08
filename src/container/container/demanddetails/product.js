import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import Search from "../../components/search/index"
import List from "../../components/clist/list"
import SList from "../../components/Slist/list"
import Detail from "../../components/demanddetail/detail"
import Pdetail from "../../components/providedetail/detail"
import TOOLS from "../../assets/tools/tools";
import Utils from "../../assets/tools/utils";
import LoadingCmpt from "../../components/loading/index"
import "./index.less"
import "./../common/index.less"
class ProuductDdetail extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      Keyword:"",
      DataList:[],
      productList:[],
      Resource:[],
      isLoading:true,
      Type: false,
    };
  }
  componentWillMount() {
    const id = Utils.getUrlParams().id
    // let Addr=window.location.pathname;
    let Types = TOOLS.getQueryString("type")
    if(Types==="demand"){
      this.setState({
        Type: true
      });
      this.getDemand(id)
    }else{
      this.setState({
        Type: false
      });
      this.getProvides(id)
    }
  }
  getDemand(id){
    //获取需求列表数据
    TOOLS.get(`supplyservice/product/demand/${id}/`).then(res => {
      if(res.status === 200){
        this.setState({
          Resource: res.data,
          isLoading:false
        });
      }
    }) 
    //获取相关列表数据
    TOOLS.get("supplyservice/service/demand/", {
      page: 1,
      page_size: 4,
    }).then(res => {
      if(res.status === 200){
        this.setState({
          DataList:res.data.results,
        });
      }
    }) 
  }
  getProvides(id){
    //获取供应列表数据
    TOOLS.get(`supplyservice/product/provide/${id}/`).then(res => {
      if(res.status === 200){
        this.setState({
          productList : res.data,
          isLoading:false
        });
      }
    }) 
    //获取相关列表数据
    TOOLS.get("supplyservice/service/provide/", {
      page: 1,
      page_size: 4,
    }).then(res => {
      if(res.status === 200){
        this.setState({
          DataList:res.data.results,
        });
      }
    }) 
  }
  GoPrint(){
    TOOLS.get("user/is_logined/").then(res => {
      if(res.status === 200){
        if(res.data.is_logined===true){
          window.location.href="http://www.miningcloud.com.cn/console/"
        }else{
          this.props.history.push("/container/register")
        }
      }
    })
  }
  render(){
    const {DataList,isLoading,productList,Type} = this.state;
    return(
      <div className='Model'>
          <div className="addr">
            <div className="m_left">
              <span onClick={e=>{window.location.href='/'}}>首页</span>&gt;<span onClick={e=>{window.location.href='/container/supply'}}>供需对接</span>&gt;<span className="breadcrumb">{Type === true ? "产品需求" : "工业产品"}</span>
            </div>
            <div className="m_right">
              <button className="m_btn" onClick={e=>this.GoPrint()}>我要发布产品</button>
              <Search history={this.props.history} keyWord={this.state.Keyword}
                placeholder={"请输入关键字搜索"}></Search>              
            </div>
          </div>
          <div className="d-content">
              { isLoading ? <LoadingCmpt/> : <div>
                { Type === true ? <Detail Resource={this.state.Resource} type="product"/> : <Pdetail Resource={this.state.productList} type="product"/>}
              </div>}
          </div>
          <div className="r_list">
            <h3>相关服务</h3>
            {
              Type === true ? <List Addr="/container/serverDetails" type="server" history={this.props.history}  DataList={DataList}/> : <SList Addr="/container/serverDetails" type="server" history={this.props.history}  DataList={DataList}/>
            }
            
          </div>
      </div> 
    )
  }
};
export default ProuductDdetail;