import React, { Component } from "react";
import TOOLS from "../../assets/tools/tools";
class List extends Component  {
  GoLink(id,url){
    this.props.history.push(`${url}?id=${id}&type=provide`);
    TOOLS.storage.set("demandId", id);
  }
	render(){
    const {DataList,Addr,type} =this.props
    const soureList = (item,index) =>{
      return(
          <li onClick={e=>this.GoLink(item.id,Addr)} key={index+1}>
            <h6>
              {
                type === "server" ? <img src={item.service_provide_logos.length===0 ?require("../../img/u689.png") : item.service_provide_logos[0].logo }/>
                :<img src={item.product_provide_logos.length===0 ?require("../../img/u689.png") : item.product_provide_logos[0].logo }/>
              }
            </h6>
            <p className="m-title">{item.name}</p>
            {
              item.owner_type === "enterprise" ?<p className="p-bottom">
              <span className="u"><img src={require("../../img/rz.png")}/>{item.enterprise.enterprise_name}</span>
              <span className="data"><img src={require("../../img/d.svg")}/>{item.create_time}</span>
            </p>:<p className="p-bottom">
              <span className="u"><img src={require("../../img/u.svg")}/>{item.personal.username}</span>
              <span className="data"><img src={require("../../img/d.svg")}/>{item.create_time}</span>
            </p>
            }
            
          </li>
        ) 
    }
		return(
      <div className="pagination clearfix">
          <ul>
            {
               DataList.map((item,index) => {
                 return soureList(item,index)
               })
            }         
          </ul>
        </div>
		)
	}
};
export default List;