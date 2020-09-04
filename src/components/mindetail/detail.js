import React, { Component } from "react";
import { Carousel} from 'antd';
class Detail extends Component  {
	render(){
    const {DataList,Type}=this.props
    const getList = (DataList,index)=>{
      return(
        <div key ={index+1}>
          <h2>{DataList.ResourceName}</h2>
          <Carousel>
            <div>
              <img src={DataList.file_fengmian_link!=="" ? DataList.file_fengmian_link : require("../../img/NO.png") }/>
            </div>
          </Carousel>
          <div className="information">
            <h3>资源信息</h3>
            <div className="msg clearfix">
              <ul>
                <li>
                    <p><b>来源：</b><span>{DataList.resource_from}</span></p>
                    <p><b>上传者：</b><span>{DataList.Author}</span></p>
                    <p><b>上传时间：</b><span>{DataList.UploadDate}</span></p>
                </li>
                <li>
                    <div><b>类目：</b><span>{Type === true ? "模型库":"知识库"}{DataList.first_type_name}-{DataList.second_type_name}</span></div>
                    <div><b>标签：</b>{DataList.resource_tag}</div>
                </li>
                <li>
                    <p>
                    <b>描述：</b>
                    <span>{DataList.resource_describe}</span>
                    </p>
                </li>
              </ul>
            </div>
            <h3>资源下载</h3>
            <table id="table">
              <thead>
                <tr class="info">
                  <th width="20%">文件名</th>
                  <th width="10%">格式</th>
                  <th width="10%">文件大小</th>
                  <th width="15%">下载地址</th>
                </tr>
              </thead>
            <tbody>
              <tr> 
                <td>{DataList.file_name}</td>
                <td>{DataList.fType}</td>
                <td>{DataList.file_size}M</td>
                <td><a href={DataList.file_download_link}>下载</a></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
		return(
			<div className="model-detail">
        {
          DataList && DataList.length > 0 &&  DataList.map((item,index)=>{
            return getList(item,index)
          })
        }
      </div>
		)
	}
};
export default Detail;