import React, {Component} from "react";
import Search from "../../components/search/index"
import List from "../../components/list/list"
import TOOLS from "../../assets/tools/tools";
import LoadingCmpt from "../../components/loading/index"
import NotData from "../../components/NoData/index";
import "./index.less"
import "../../components/Menu/index.less"
import "./../common/index.less"
import {Menu,Pagination} from 'antd';
const SubMenu = Menu.SubMenu;
class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Keyword: "",
            current: 'all',
            pageIndex: 1,
            pageSize: 16,
            total: 1,
            isDemand: false,
            menu_array: [],
            DataList: [],
            isLoading: true,
            isLogin: true,
        };
        this.handleClick = this.handleClick.bind(this);//手动绑定
    }
    componentWillMount() {
        this.getMuen();
        this.findList();
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    getMuen() {
        //获取菜单数据
        TOOLS.get("find_km_ty/").then(res => {
            if (res.status === 200) {
                let newArr = []
                res.data.first.forEach((value, index) => {
                    value.sec_json_array.forEach((item, i) => {
                        item.third_json_array.forEach((key, j) => {
                            if (key.LibraryType === "model") {
                                newArr.push(value)
                            }
                        })
                    })
                })
                this.setState({
                    menu_array: Array.from(new Set(newArr))
                });
            }
        })
    }
    findList(pageIndex = this.state.pageIndex) {
        this.setState({
            isLoading: true,
        });
        //获取列表数据
        TOOLS.get("find_km_de/", {
            page: pageIndex,
            page_size: this.state.pageSize,
            LibraryType: "model"
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.data,
                    isLoading: false,
                    total: res.data.total_amount
                });
            }
        })
    }
    changeList(muenId, secondId) {
        this.setState({
            isLoading: true,
        });
        let params = {
            page: this.state.pageIndex,
            page_size: this.state.pageSize,
            LibraryType: "model",
            first_type_id: muenId,
            second_type_id: secondId
        }
        TOOLS.get("find_km_de/", params).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.data,
                    isLoading: false,
                    total: res.data.total_amount
                });
            }
        })
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
    }
    render() {
        const {menu_array, DataList, total, isLoading} = this.state;
        const onChange = (pageNumber) => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            this.findList(pageNumber)
        };
        return (
            <div className='Model'>
                <div className="addr">
                    <div className="m_left">
                        <span onClick={e => {
                            window.location.href = '/'
                        }}>首页</span>&gt;<span>矿业库</span>&gt;<span className="breadcrumb">模型库</span>
                    </div>
                    <div className="m_right">
                        <Search history={this.props.history} keyWord={this.state.Keyword}
                                placeholder={"请输入关键字搜索"}></Search>
                    </div>
                </div>
                {
                    isLoading ? <LoadingCmpt/> : <div className="box-item">
                        <div className="Menu-list">
                            <Menu onClick={this.handleClick}
                                  selectedKeys={[this.state.current]}
                                  mode="horizontal"
                            >
                                <Menu.Item key="all"><span onClick={e=>this.findList()}>全部</span></Menu.Item>
                                {
                                    menu_array.map((item, index) => {
                                        return <SubMenu key={index + 1} title={item.first_type_name}>
                                            {
                                                item.sec_json_array.map((it, i) => {
                                                    return <Menu.Item key={it.second_type_id}><span onClick={e=>this.changeList(item.first_type_id,it.second_type_id)}>{it.second_type_name}</span></Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    })
                                }
                            </Menu>
                        </div>
                        <div className="M-content">
                            {
                                DataList && DataList.length > 0 && <div>
                                    <List Addr="/container/modellist?type=model" isDemand={this.state.isDemand}
                                          history={this.props.history} DataList={DataList}/>
                                    <Pagination defaultPageSize="16" showQuickJumper hideOnSinglePage={true}
                                                defaultCurrent={1} onChange={onChange} total={total}/>
                                </div>
                            }
                            {!(DataList && DataList.length > 0) && <NotData/>}

                        </div>
                    </div>
                }
            </div>
        )
    }
};
export default Model;