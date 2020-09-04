import React, { Component } from "react";
import Search from "../../components/search/index"
import TOOLS from "../../assets/tools/tools";
import "./index.less"
import NotData from "../../components/NoData/index";
import LoadingCmpt from "../../components/loading/index"
import { Pagination,Tabs} from 'antd';
import "./../common/index.less"
const TabPane = Tabs.TabPane;
class Commodity extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      Keyword:  "",
      pageIndex: 1,
      pageSize: 10,
      total: 1,
      isDemand:true,
      DataList:[],
      isLoading:true,
    };
  }
  componentWillMount() {
    this.findList()
  }
  findList(pageIndex = this.state.pageIndex){
    //获取列表数据
    TOOLS.get("enterpriseauth/", {
      page: pageIndex,
      page_size: this.state.pageSize,
    }).then(res => {
      if(res.status === 200){
        this.setState({
          DataList:res.data.results,
          isLoading:false,
          total:res.data.count
        });
      }
    }) 
  }
  componentDidMount(){
    document.documentElement.scrollTop = document.body.scrollTop = 0;
  }
  GoLink(id){
    this.props.history.push("/container/companylist?id="+id);
  }
  GoPrint(){
    TOOLS.get("user/is_logined/").then(res => {
      if(res.status === 200){
        if(res.data.is_logined===true){
          window.location.href="http://www.miningcloud.com.cn/console/"
        }else{
          this.props.history.push("/login")
          // 页面刷新
          window.location.reload()
        }
      }
    })
  }
  callback(key) {
    //获取是否认证列表数据
    if(key ==="2") {
      TOOLS.get("enterpriseauth/", {
        checkau:2,
        page: this.state.pageIndex,
        page_size: this.state.pageSize,
      }).then(res => {
        if(res.status === 200){
          this.setState({
            DataList:res.data.results,
            isLoading:false,
            total:res.data.total_page
          });
        }
      })
    }else if(key ==="3"){
      TOOLS.get("enterpriseauth/", {
        checkau:0,
        page: this.state.pageIndex,
        page_size: this.state.pageSize,
      }).then(res => {
        if(res.status === 200){
          this.setState({
            DataList:res.data.results,
            isLoading:false,
            total:res.data.total_page
          });
        }
      })
    }else{
      TOOLS.get("enterpriseauth/", {
        page: this.state.pageIndex,
        page_size: this.state.pageSize,
      }).then(res => {
        if(res.status === 200){
          this.setState({
            DataList:res.data.results,
            isLoading:false,
            total:res.data.total_page
          });
        }
      })
    }
  }
  render(){
    const {DataList,isLoading} = this.state
    const onChange = (pageNumber) => {
      document.documentElement.scrollTop = document.body.scrollTop = 0;
      this.findList(pageNumber)
    };
    const itemList= (item,index)=>{
      return(
        <div className="item clearfix" key={index+1} onClick={e=>this.GoLink(item.id)}>
          <div className="box_left">
            <img src={item.logo === "" ? require("../../img/logo_none03.jpg") : item.logo}/>
          </div>
          <div className="box_right">
            <p>
              <span>{item.enterprise_name}
                {/*<b className={item.checkau === 2 ? "rz":"wrz"}>*/}
                  {/*<b>{item.get_checkau_display}</b>*/}
                {/*</b>*/}
              </span>
            </p>
            <p className="rate">{item.description}</p>
            <div className="s-bottom">
              <span>标签：{item.tags}</span>
              <span>{item.register_address}</span>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div className='Model clearfix'>
          <div className="addr clearfix">
            <div className="m_left">
              <span onClick={e=>{window.location.href='/'}}>首页</span>&gt;<span className="breadcrumb">供应商</span>
            </div>
            <div className="m_right">
              <button className="m_btn" onClick={e=>this.GoPrint()}>我要入驻</button>
              <Search history={this.props.history} keyWord={this.state.Keyword}
                    placeholder={"请输入关键字搜索"}></Search>              
            </div>
          </div>
          <div className="Supplier">
            <Tabs defaultActiveKey="1" onChange={this.callback.bind(this)}>
              <TabPane tab="全部" key="1">
                {
                  isLoading ? <LoadingCmpt/> : <div className="c-content">
                    <div className="CommList">
                      {
                        DataList && DataList.length > 0 && DataList.map((item,index)=>{
                          return itemList(item,index)
                        })
                      }
                      {!(DataList && DataList.length > 0) &&<NotData/>}
                    </div>
                    <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange} total={this.state.total}/>
                  </div>
                }
              </TabPane>
              <TabPane tab="认证企业" key="2">
                {
                  isLoading ? <LoadingCmpt/> : <div className="c-content">
                    <div className="CommList">
                      {
                        DataList && DataList.length > 0 && DataList.map((item,index)=>{
                          return itemList(item,index)
                        })
                      }
                      {!(DataList && DataList.length > 0) &&<NotData/>}
                    </div>
                    <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange} total={this.state.total}/>
                  </div>
                }
              </TabPane>
              <TabPane tab="未认证企业" key="3">
                {
                  isLoading ? <LoadingCmpt/> : <div className="c-content">
                    <div className="CommList">
                      {
                        DataList && DataList.length > 0 && DataList.map((item,index)=>{
                          return itemList(item,index)
                        })
                      }
                      {!(DataList && DataList.length > 0) &&<NotData/>}
                    </div>
                    <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange} total={this.state.total}/>
                  </div>
                }
              </TabPane>
            </Tabs>
          </div>
      </div> 
    )
  }
};
export default Commodity;