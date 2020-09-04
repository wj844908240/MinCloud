import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import Search from "../../components/search/index"
import List from "../../components/clist/list"
import TOOLS from "../../assets/tools/tools";
import "./index.less"
import Utils from "../../assets/tools/utils";
import {Carousel ,Tabs, message} from 'antd';
import LoadingCmpt from "../../components/loading/index"
import "./../common/index.less"
const TabPane = Tabs.TabPane;
class DemanDdetail extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      Keyword: "",
      isLoading:true,
      DataList:[],
      pageIndex: 1,
      pageSize: 6,
      RelatedList:[],
      is_followed:false
    };
  }
  componentWillMount() {
    const id = Utils.getUrlParams().id
    //请求企业列表
    TOOLS.get(`enterpriseauth/${id}/`).then(res => {
      if(res.status === 200){
        this.setState({
          DataList:res.data,
          is_followed:res.data.is_followed,
          isLoading:false
        });
      }
    }) 
    //获取相关产品
    TOOLS.get("supplyservice/product/demand/", {
      page: 1,
      page_size: 4,
    }).then(res => {
      if(res.status === 200){
        this.setState({
          RelatedList:res.data.results,
        });
      }
    }) 
    /*//供需状况详情列表
    TOOLS.get(`supplyservice/enterpriseauth/${id}/`).then(res => {
      if(res.status === 200){

      }
    }) */
  }
  

  Related(){
    const id = Utils.getUrlParams().id
    //请求供关注
    let followed = false
    this.state.is_followed === true? followed: followed=true
    TOOLS.put(`enterpriseauth/${id}/follow/`,{
      is_followed:followed
    }).then(res => {
      if(res.status === 200){
        this.setState({
          is_followed:res.data.is_followed,
        });
      }
    }).catch(error => {
      message.warning("请登录后关注！")
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
    const {DataList,is_followed,RelatedList} = this.state
    return(
      <div className='Model clearfix'>
          <div className="addr clearfix">
            <div className="m_left">
              <span onClick={e=>{window.location.href='/'}}>首页</span>&gt;<span onClick={e=>{window.location.href='/container/company'}}>企业展示</span>&gt;<span className="breadcrumb">企业展示详情</span>
            </div>
            <div className="m_right">
              <button className="m_btn" onClick={e=>this.GoPrint()}>我要入驻</button>
              <Search history={this.props.history} keyWord={this.state.Keyword}
                    placeholder={"请输入关键字搜索"}></Search>              
            </div>
          </div>
          <div className="d-content">
              <div className="model-detail">
                <h2>{DataList.enterprise_name}</h2>
                <Carousel>
                  <div><img src={DataList.logo}/></div>
                  {/*<div><img src={DataList.if_code_img}/></div>
                  <div><img src={DataList.institution_as_legal_person_img}/></div>
                  <div><img src={DataList.material}/></div>*/}
                </Carousel>
                <div className="rate">
                  <span className="q-name">企业勋章
                    <b className={DataList.checkau === 2 ? "rz":"wrz"}>
                      <b>{DataList.get_checkau_display}</b>
                    </b>
                  </span>
                  <button className="m_btn" onClick={e=>this.Related()}>{is_followed === true ? "取消关注企业" :"关注企业"}</button>
                </div>
                <div className="information">
                  <Tabs type="card">
                    <TabPane tab="企业信息" key="1">
                      <div className="prod clearfix">
                        <ul>
                          <li>
                              <div><b>所属行业：</b><span>{DataList.tags}</span></div>
                              <div><b>企业规模：</b><span>{DataList.get_scale_display}</span></div>
                          </li>
                          <li>
                              <div><b>企业类型：</b><span>{DataList.get_type_display}</span></div>
                              <div><b>所在地区：</b><span>{DataList.register_address}</span></div>
                          </li>
                          <li>
                              <div><b>联系电话：</b><span>{DataList.mobile}</span></div>
                              <div><b>邮箱：</b><span>{DataList.email}</span></div>
                          </li>
                          <li>
                              <div><b>地址：</b><span>{DataList.province+DataList.city+DataList.area+DataList.detail_address}</span></div>
                              <div><b>网址：</b><a href={DataList.netsite} target="_blank">{DataList.netsite}</a></div>
                          </li>
                          <li>
                              <p>
                              <b>企业简介：</b>
                              <span>
                                {DataList.description}
                              </span>
                              </p>
                          </li>
                        </ul>
                      </div>
                    </TabPane>
                  </Tabs>
                </div>
              </div>
          </div>
          <div className="r_list">
            <h3>相关产品</h3>
            {RelatedList && RelatedList.length > 0 &&<List Addr="/container/productdetails" history={this.props.history} DataList={RelatedList}/>}
          </div>
      </div> 
    )
  }
};
export default DemanDdetail;