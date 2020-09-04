import React, {Component} from "react";
import Search from "../../components/search/index"
import List from "../../components/Slist/list"
import TOOLS from "../../assets/tools/tools";
import LoadingCmpt from "../../components/loading/index"
import NotData from "../../components/NoData/index";
import "./index.less"
import "../../components/Menu/index.less"
import {Pagination, Checkbox,Menu} from 'antd';
import "./../common/index.less"
const SubMenu = Menu.SubMenu;
class Technical extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Keyword: "",
            pageIndex: 1,
            pageSize: 16,
            total: 1,
            isDemand: true,
            menu_array: [],
            DataList: [],
            isLoading: true,
            current: "all"
        };
        this.handleClick = this.handleClick.bind(this);//手动绑定
    }

    componentWillMount() {
        this.getMuen()
        this.findList()
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }

    getMuen() {
        //获取菜单数据
        TOOLS.get("supplyservice/service/menus/").then(res => {
            if (res.status === 200) {
                this.setState({
                    isLoading: false,
                    menu_array: res.data
                })
            }
        })
    }

    findList(pageIndex = this.state.pageIndex) {
        this.setState({
            isLoading: true,
        });
        //获取列表数据
        TOOLS.get("supplyservice/service/provide/", {
            page: pageIndex,
            page_size: this.state.pageSize,
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }

    changeList(muenId) {
        this.setState({
            isLoading: true,
        });
        TOOLS.get("supplyservice/service/provide/", {
            page: this.state.pageIndex,
            page_size: this.state.pageSize,
            menus: muenId
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    GoPrint() {
        TOOLS.get("user/is_logined/").then(res => {
            if (res.status === 200) {
                if (res.data.is_logined === true) {
                    window.location.href = "http://www.miningcloud.com.cn/console/"
                } else {
                    this.props.history.push("/login")
                    // 页面刷新
                    window.location.reload()
                }
            }
        })
    }

    render() {
        const {total, isLoading, menu_array, DataList} = this.state
        const onChange = (pageNumber) => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            this.findList(pageNumber)
        };
        const onCheckbox = (e) => {
            if (e.target.checked === true) {
                TOOLS.get("supplyservice/service/provide/", {
                    page: this.state.pageIndex,
                    page_size: this.state.pageSize,
                    checkau: e.target.checked
                }).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            DataList: res.data.results,
                            isLoading: false,
                            total: res.data.count
                        });
                    }
                })
            } else {
                TOOLS.get("supplyservice/service/provide/", {
                    page: this.state.pageIndex,
                    page_size: this.state.pageSize,
                }).then(res => {
                    if (res.status === 200) {
                        this.setState({
                            DataList: res.data.results,
                            isLoading: false,
                            total: res.data.count
                        });
                    }
                })
            }

        }
        return (
            <div className='Model'>
                <div className="addr">
                    <div className="m_left">
                        <div className="m_left">
                            <span  onClick={e=>{window.location.href='/'}}>首页</span>&gt;<span onClick={e=>{window.location.href='/container/supply'}}>供需对接</span>&gt;<span className="breadcrumb">技术服务</span>
                        </div>
                    </div>
                    <div className="m_right">
                        <button className="m_btn" onClick={e => this.GoPrint()}>我要发布服务</button>
                        <Search history={this.props.history} keyWord={this.state.Keyword}
                                placeholder={"请输入关键字搜索"}></Search>
                    </div>
                </div>
                {isLoading ? <LoadingCmpt/> : <div className="box-item">
                    <div className="Menu-list">
                        <Menu onClick={this.handleClick}
                              selectedKeys={[this.state.current]}
                              mode="horizontal"
                        >
                            <Menu.Item key="all"><span onClick={e=>this.findList()}>全部</span></Menu.Item>
                            {
                                menu_array.map((item, index) => {
                                    if(item.children.length>0){
                                        return <SubMenu key={index+1} title={item.name}>
                                            {
                                                item.children.map((it, i) => {
                                                    return <Menu.Item key={it.id}><span onClick={e=>this.changeList(it.id)}>{it.name}</span></Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    }else{
                                        return <Menu.Item key={item.id}><span onClick={e=>this.changeList(item.id)}>{item.name}</span></Menu.Item>
                                    }

                                })
                            }
                        </Menu>
                    </div>
                    <div className="c-content">
                        {/*<div className="m-top">
                            <div className="doc">
                            </div>
                            <div className="Checkbox"><Checkbox onChange={onCheckbox}>只查看认证企业/用户</Checkbox></div>
                        </div>*/}
                        {DataList && DataList.length > 0 && <div>
                            <List type="server" Addr="/container/serverDetails" history={this.props.history}
                                  DataList={DataList}/>
                            <Pagination defaultPageSize="16" showQuickJumper hideOnSinglePage={true} defaultCurrent={1}
                                        onChange={onChange} total={this.state.total}/>
                        </div>}
                        {!(DataList && DataList.length > 0) && <NotData/>}

                    </div>
                </div>}
            </div>
        )
    }
};
export default Technical;