import React, { Component } from "react";
import { Carousel,message } from 'antd';
import TOOLS from "../../assets/tools/tools";
import Utils from "../../assets/tools/utils";
message.config({
    top: 400,
    duration: 1,
});
class Detail extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      isService :false,
      isProduct :false,
    };
  }
  componentWillMount(){
    const id = Utils.getUrlParams().id
    TOOLS.get(`supplyservice/service/provide/${id}/follow/`).then(res => {
      if(res.status === 200){
        this.setState({
          isService :res.data.is_followed,
        });
      }
    })
    TOOLS.get(`supplyservice/product/provide/${id}/follow/`).then(res => {
      if(res.status === 200){
        this.setState({
          isProduct :res.data.is_followed,
        });
      }
    })
  }
  //请求供关注
  productCern(id,type){
    if(type==="service"){
      let followed = false
      this.state.isService ===true? followed: followed=true
      TOOLS.put(`supplyservice/service/provide/${id}/follow/`,{
        is_followed : followed
      }).then(res => {
        if(res.status === 200){
          this.setState({
            isService:res.data.is_followed
          });
        } 
      }).catch(res => {
        message.warning("请登录后关注！")
      }) 
    }else{
      let followed = false
      this.state.isProduct ===true? followed: followed=true
      TOOLS.put( `supplyservice/product/provide/${id}/follow/`,{
        is_followed : followed
      }).then(res => {
        if(res.status === 200){
          this.setState({
            isProduct:res.data.is_followed
          });
        } 
      }).catch(res => {
        message.warning("请登录后关注！")
      }) 
    }
  }
	render(){ 
    const {Resource,type}=this.props
		return(
			<div className="model-detail">
        <div>
          <h2>{Resource.name === void(0)?"":Resource.name}</h2>
          <Carousel autoplay>
            { type === "server" ? Resource.service_provide_pics && Resource.service_provide_pics.length > 0 &&Resource.service_provide_pics.map(item=>{
                return <div key={item.id}><img src={item.pic}/></div>
              }) : Resource.product_provide_pics && Resource.product_provide_pics.length > 0 &&Resource.product_provide_pics.map(item=>{
                return <div key={item.id}><img src={item.pic}/></div>
              })
            }
          </Carousel>
          <div className="rate">
            <span className="q-name">{Resource.name === void(0)?"":Resource.name}<img src={require("../../img/rz.png")}/></span>
            {
              type === "server" ? <button className="m_btn" onClick={e=>this.productCern(Resource.id,"service")}>
              {this.state.isService === true ? "取消关注服务":"关注服务"} 
            </button> :
            <button className="m_btn" onClick={e=>this.productCern(Resource.id,"product")}>
              {this.state.isProduct === true ? "取消关注产品":"关注产品"}
            </button> 
            }
          </div> 
          <div className="information">
            <h3>{type === "server" ? "服务信息" : "产品信息"}</h3>
            <div className="msg clearfix">
              <ul>
                <li className="wh">
                    <p><b>产品类别：</b><span>{Resource.get_menus_display}</span></p>
                    <p><b>产品价格：</b><span>{Resource.price}</span></p>
                </li>
                {
                   Resource.owner_type === "enterprise" ? <li className="wh">
                      <div><b>联系电话：</b><span>{Resource.enterprise.mobile === void(0)?"":Resource.enterprise.mobile}</span></div>
                      <div><b>联系邮箱：</b><span>{Resource.enterprise.email}</span></div>
                  </li> :<li className="wh">
                      <div><b>联系电话：</b><span>{Resource.personal.mobile}</span></div>
                      <div><b>联系邮箱：</b><span>{Resource.personal.email}</span></div>
                  </li>
                }
                <li>
                    <p>
                    <b>标签：</b>
                    <span>{Resource.tags}</span>
                    </p>
                </li>
                {
                   Resource.owner_type === "enterprise" ? <li>
                      <p>
                        <b>详细地址：</b>
                        <span>{Resource.enterprise.province+Resource.enterprise.city+Resource.enterprise.area+Resource.enterprise.detail_address}</span>
                      </p>
                  </li> :<li>
                      <p>
                        <b>详细地址：</b>
                        <span>暂无</span>
                      </p>
                  </li>
                }
                <li>
                    <p>
                    <b>描述：</b>
                    <span>{Resource.description}</span>
                    </p>
                </li>
              </ul>
            </div>
            <h3>{type === "server" ? "服务发布者" : "产品发布者"}</h3>
            <div className="msg clearfix">
              {
                Resource.owner_type === "enterprise" ? <ul>
                <li>
                    <p><b>企业名称：</b><span>{Resource.enterprise.enterprise_name}</span></p>
                </li>
                <li className="wh">
                    <p><b>企业规模：</b><span>{Resource.enterprise.get_scale_display}</span></p>
                    <p><b>企业类型：</b><span>{Resource.enterprise.get_type_display}</span></p>
                </li>
                <li className="wh">
                    <p><b>企业联系人：</b><span>{Resource.enterprise.contact_name}</span></p>
                    <p><b>企业联系电话：</b><span>{Resource.enterprise.mobile === void(0)?"":Resource.enterprise.mobile}</span></p>
                </li>
              </ul> : <ul>
                <li className="wh">
                    <p><b>联系人：</b><span>{Resource.personal.contact_name}</span></p>
                    <p><b>联系电话：</b><span>{Resource.personal.mobile}</span></p>
                </li>
                <li>
                    <p><b>联系邮箱：</b><span>{Resource.personal.email}</span></p>
                </li>
              </ul>
              }
              
            </div>
            <h3>相关资料</h3>
            <table id="table">
              <thead>
                <tr className="info">
                  <th width="20%">文件名</th>
                  <th width="10%">格式</th>
                  <th width="10%">文件大小</th>
                  <th width="15%">下载地址</th>
                </tr>
              </thead>
            <tbody>
            {
              type === "server" ? Resource.service_provide_materials && Resource.service_provide_materials.length > 0 &&Resource.service_provide_materials.map((item,index)=>{
                return <tr key={index}> 
                  <td>{item.name === void(0)?"":item.name}</td>
                  <td>{item.suffix}</td>
                  <td>{item.size}M</td>
                  <td><a href={item.material}>下载</a></td>
              </tr>}) : Resource.product_provide_materials && Resource.product_provide_materials.length > 0 &&Resource.product_provide_materials.map((item,index)=>{
                return <tr key={index}> 
                  <td>{item.name === void(0)?"":item.name}</td>
                  <td>{item.suffix}</td>
                  <td>{item.size}M</td>
                  <td><a href={item.material}>下载</a></td>
              </tr>})
              }
              </tbody>
            </table>
          </div>
        </div>
      </div>
		)
	}
};
export default Detail;