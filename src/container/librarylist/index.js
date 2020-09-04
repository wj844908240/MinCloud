import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import Search from "../../components/search/index"
import Detail from "../../components/mindetail/detail"
import TOOLS from "../../assets/tools/tools";
import Utils from "../../assets/tools/utils";
import LoadingCmpt from "../../components/loading/index"
import "./index.less"
import "./../common/index.less"
import {Menu} from 'antd';
const SubMenu = Menu.SubMenu;
class Model extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Keyword: "",
            current: 'all',
            Type: false,
            menu_array: [],
            DataList: [],
            Resource: [],
            isLoading: false,
            LinkUrl: ""
        };
        this.handleClick = this.handleClick.bind(this);//手动绑定
    }
    componentWillMount() {
        const type = Utils.getUrlParams().type
        if (type === "model") {
            this.setState({
                Type: true,
                LinkUrl: "/container/model"
            });
        } else {
            this.setState({
                Type: false,
                LinkUrl: "/container/know"
            });
        }
        this.getMuen(type)
        this.findDetail()
    }
    getMuen(type) {
        //获取菜单数据
        TOOLS.get("find_km_ty/").then(res => {
            if (res.status === 200) {
                let newArr = []
                res.data.first.forEach((value, index) => {
                    value.sec_json_array.forEach((item, i) => {
                        item.third_json_array.forEach((key, j) => {
                            if (type === "know") {
                                if (key.LibraryType === "knowledge") {
                                    newArr.push(value)
                                }
                            } else {
                                if (key.LibraryType === "model") {
                                    newArr.push(value)
                                }
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
    findDetail() {
        //获取列表数据
        TOOLS.get("find_km_de/", {
            id: TOOLS.storage.get("companyId")
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.data,
                    isLoading: false
                });
            }
        })
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        const {Type, Keyword, menu_array, DataList, Resource, isLoading, LinkUrl} = this.state;
        return (
            <div className='Model'>
                <div className="addr">
                    <div className="m_left">
                        <span onClick={e => {
                            window.location.href = '/'
                        }}>首页</span>&gt;<span>矿业库</span>&gt;<span className="breadcrumb">{Type === true ? <Link to={"/container/model"}>模型库</Link> :
                        <Link to={"/container/know"}>知识库</Link>}</span>
                    </div>
                    <div className="m_right">
                        <Search history={this.props.history} keyWord={Keyword}
                                placeholder={"请输入关键字搜索"}></Search>
                    </div>
                </div>
                {/*<CloudModel menu_array={menu_array} url={LinkUrl} history={this.props.history}/>*/}
                <div className="M-content">
                    {isLoading ? <LoadingCmpt/> : <Detail DataList={DataList} Type={Type}/>}
                </div>
            </div>
        )
    }
};
export default Model;