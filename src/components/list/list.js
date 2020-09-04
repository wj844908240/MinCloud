import React, { Component } from "react";
import TOOLS from "../../assets/tools/tools";
class List extends Component  {
  GoLink(id,url){
    this.props.history.push(`${url}`);
    TOOLS.storage.set("companyId", id);
  }
	render(){
    const {DataList,isDemand,Addr} =this.props
    const soureList = (item,index) =>{
      return(
          <li onClick={e=>this.GoLink(item.id,Addr)} key={index+1}>
            <h6><img src={item.file_fengmian_link!=="" ? item.file_fengmian_link : require("../../img/NO.png") }/></h6>
            <p className="m-title">{item.ResourceName}</p>
            <p className="p-bottom">
              <span className="u"><img src={require("../../img/u.svg")}/>{item.Author}</span>
              <span className="data">
                <img src={require("../../img/d.svg")}/>
                { item.UploadDate}
              </span>
            </p>
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