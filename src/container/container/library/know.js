import React, {Component} from "react";
import Search from "../../components/search/index"
import List from "../../components/list/list"
import TOOLS from "../../assets/tools/tools";
import LoadingCmpt from "../../components/loading/index"
import NotData from "../../components/NoData/index";
import "./index.less"
import "../../components/Menu/index.less"
import {Menu, Pagination} from 'antd';
import "./../common/index.less"
const SubMenu = Menu.SubMenu;

class Know extends Component {
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
            hyzl: false,
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
        TOOLS.get("find_km_ty/").then(res => {
            if (res.status === 200) {
                let newArr = []
                res.data.first.forEach((value, index) => {
                    value.sec_json_array.forEach((item, i) => {
                        item.third_json_array.forEach((key, j) => {
                            if (key.LibraryType === "knowledge") {
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
            size: this.state.pageSize,
            LibraryType: "knowledge"
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

    hyList() {
        this.setState({
            hyzl: true
        })
    }
    goFile(title){
        if (title === 'Caving2018') {
            this.props.history.push(`/container/Caving`);
        } else if (title === 'DeepMining2019') {
            this.props.history.push(`/container/file`);
        } else if (title ==='UMT2017') {
            this.props.history.push(`/container/UMT2017`);
        }else if (title ==='GroundSupport2019') {
            this.props.history.push(`/container/GroundSupport2019`);
        }else if (title ==='MC2019') {
            this.props.history.push(`/container/MC2019`);
        }else if (title ==='MGR2019') {
            this.props.history.push(`/container/MGR2019`);
        }else{
            this.props.history.push(`/container/Paste`);
        }

    }
    changeList(muenId, secondId) {
        this.setState({
            isLoading: true,
        });
        let params = {
            page: this.state.pageIndex,
            page_size: this.state.pageSize,
            LibraryType: "knowledge",
            first_type_id: muenId,
            second_type_id: secondId
        };
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
        const {DataList, isLoading, menu_array, hyzl} = this.state;
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
                        }}>首页</span>&gt;<span>矿业库</span>&gt;<span className="breadcrumb">知识库</span>
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
                                <Menu.Item key="all"><span onClick={e => this.findList()}>全部</span></Menu.Item>
                                {
                                    menu_array.map((item, index) => {
                                        return <SubMenu key={index + 1} title={item.first_type_name}>
                                            {
                                                item.sec_json_array.map((it, i) => {
                                                    return <Menu.Item key={it.second_type_id}><span
                                                        onClick={e => this.changeList(item.first_type_id, it.second_type_id)}>{it.second_type_name}</span></Menu.Item>
                                                })
                                            }
                                        </SubMenu>
                                    })
                                }
                                <Menu.Item key="hyzl"><span onClick={e => this.hyList()}>会议资料</span></Menu.Item>
                            </Menu>
                        </div>
                        {
                            hyzl ? <div className="M-content">
                                <ul className='hyzl'>
                                    <li onClick={e => this.goFile('UMT2017')}><img src={require("../../img/UMT2017_Cover.jpg")}
                                                                                   alt=""/></li>
                                    <li onClick={e => this.goFile('Caving2018')}><img src={require("../../img/Caving2018.jpg")}
                                                                          alt=""/></li>
                                    <li onClick={e => this.goFile('DeepMining2019')}><img src={require("../../img/DeepMining2019.jpg")}
                                                                          alt=""/></li>
                                    <li onClick={e => this.goFile('Paste2019')}><img src={require("../../img/Paste2019.jpg")}
                                                                          alt=""/></li>
                                    <li onClick={e => this.goFile('GroundSupport2019')}><img src={require("../../img/GroundSupport2019_cover.jpg")}
                                                                                      alt=""/></li>
                                    <li onClick={e => this.goFile('MC2019')}><img src={require("../../img/MC2019_Cover.jpg")}
                                                                                          alt=""/></li>
                                    <li onClick={e => this.goFile('MGR2019')}><img src={require("../../img/MGR2019_Cover.jpg")}
                                                                                     alt=""/></li>
                                </ul>

                            </div> : <div className="M-content">
                                {
                                    DataList && DataList.length > 0 && <div>
                                        <List Addr="/container/modellist?type=know" isDemand={this.state.isDemand}
                                              DataList={DataList} history={this.props.history}/>
                                        <Pagination defaultPageSize="16" showQuickJumper hideOnSinglePage={true}
                                                    onChange={onChange} total={this.state.total}/>
                                    </div>
                                }
                                {!(DataList && DataList.length > 0) && <NotData/>}
                            </div>
                        }
                    </div>
                }
            </div>
        )
    }
};
export default Know;