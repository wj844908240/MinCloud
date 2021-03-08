import React, {Component} from "react";
import "./index.less"
import {Tabs, Pagination} from 'antd';
import {BrowserRouter as Router, Link} from "react-router-dom"
import TOOLS from "../../assets/tools/tools";
import LoadingCmpt from "../../components/loading/index"
import NotData from "../../components/NoData/index";
import Utils from "../../assets/tools/utils";
import "./../common/index.less"
const TabPane = Tabs.TabPane;

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageIndex: 0,
            pageSize: 10,
            total: 1,
            listData: [],
            isLoading: true,
            Type: 2,
            ActiveId: "2"
        };
    };

    componentWillMount() {
        const id = Utils.getUrlParams().id
        if (id === "4") {
            this.setState({
                ActiveId: "4",
                Type: 4,
            });
            this.getNews(this.state.pageIndex, 4)
        } else {
            this.setState({
                ActiveId: "2",
                Type: 2,
            });
            this.getNews(this.state.pageIndex, this.state.Type)
        }
        //console.log(11, this.state.Type)

        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }

    getNews(pageIndex, key) {
        //获取新闻列表数据
        TOOLS.get("miningnews/list/", {
            limit: this.state.pageSize,
            offset: pageIndex,
            type: key
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    listData: res.data.results,
                    isLoading: false,
                    total: res.data.count
                });
            }
        })
    }

    GoLink(id, url) {
        this.props.history.push("/container/newslist?id=" + id);
    }
    render() {
        const {total, listData, isLoading, Type, ActiveId} = this.state
        const onChange = (pageNumber) => {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
            let offset = 10 * (pageNumber - 1)
            this.getNews(offset, Type)
        };
        const callback = (key) => {
            this.setState({
                Type: key,
                isLoading: true,
            });
            this.getNews(this.state.pageIndex, key)
        }
        const getList = (item, index) => {
            return (
                <li key={index + 1} onClick={e => this.GoLink(item.id)}>
                    <div className="left_box">
                        <p><img src={item.thumb === null ? require("../../img/u689.png") : item.thumb}/></p>
                    </div>
                    <div className="right_box">
                        <div className="news_title">
                            <p className="title">{item.title}</p>
                        </div>
                        <div className="news_text">
                            <p className="desc">{item.pure_content}</p>
                        </div>
                        <div className="bottom_btn">
                            <div className="left_link">
                                <span className="keyword">{item.keywords}</span>
                                <span className="time">{item.publish_time.split(" ")[0]}</span>
                            </div>
                            <div className="news_list_share clearfix">
                                <div className="share fr share_container">
                                    <i className="">来源：<a href={item.source_url}
                                                          target="_blank">{item.source_name || "暂无"}</a></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            )
        }
        const getListRight = (item, index) => {
            return (
                <li key={index}>
                    <span className={index < 3 ? "newLight" : ""}>{index + 1}</span>
                    <a href="javascript:;" onClick={e => this.GoLink(item.id)}>{item.title}</a>
                </li>
            )
        }
        return (
            <div id="new">
                <Tabs defaultActiveKey={ActiveId} onChange={callback} tabPosition="left">
                    <div className="addr">
                        <span onClick={e=>{window.location.href='/'}}>首页</span>&gt;<span className="breadcrumb">行业资讯</span>
                    </div>
                    <TabPane tab={<span>智能矿山<span>&nbsp;&gt;&gt;</span></span>} key="2">
                        <div className="news_list">
                            {isLoading ? <LoadingCmpt/> : <ul className="list_item">
                                {listData && listData.length > 0 && listData.map((item, index) => {
                                    return getList(item, index)
                                })}
                                {!(listData && listData.length > 0) && <NotData/>}
                            </ul>}
                            <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange}
                                        total={total}/>
                        </div>
                    </TabPane>
                    <TabPane tab={<span>企业动态<span>&nbsp;&gt;&gt;</span></span>} key="3">
                        <div className="news_list">
                            {isLoading ? <LoadingCmpt/> : <ul className="list_item">
                                {listData && listData.length > 0 && listData.map((item, index) => {
                                    return getList(item, index)
                                })}

                                {!(listData && listData.length > 0) && <NotData/>}
                            </ul>}
                            <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange}
                                        total={total}/>
                        </div>
                    </TabPane>
                    <TabPane tab={<span>国际矿业<span>&nbsp;&gt;&gt;</span></span>} key="4">
                        <div className="news_list">
                            {isLoading ? <LoadingCmpt/> : <ul className="list_item">
                                {listData && listData.length > 0 && listData.map((item, index) => {
                                    return getList(item, index)
                                })}

                                {!(listData && listData.length > 0) && <NotData/>}
                            </ul>}
                            <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange}
                                        total={total}/>
                        </div>
                    </TabPane>
                    <TabPane tab={<span>矿产新闻<span>&nbsp;&gt;&gt;</span></span>} key="5">
                        <div className="news_list">
                            {isLoading ? <LoadingCmpt/> : <ul className="list_item">
                                {listData && listData.length > 0 && listData.map((item, index) => {
                                    return getList(item, index)
                                })}

                                {!(listData && listData.length > 0) && <NotData/>}
                            </ul>}
                            <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange}
                                        total={total}/>
                        </div>
                    </TabPane>
                    <TabPane tab={<span>科技资讯<span>&nbsp;&gt;&gt;</span></span>} key="6">
                        <div className="news_list">
                            {isLoading ? <LoadingCmpt/> : <ul className="list_item">
                                {listData && listData.length > 0 && listData.map((item, index) => {
                                    return getList(item, index)
                                })}

                                {!(listData && listData.length > 0) && <NotData/>}
                            </ul>}
                            <Pagination showQuickJumper hideOnSinglePage={true} defaultCurrent={1} onChange={onChange}
                                        total={total}/>
                        </div>
                    </TabPane>
                </Tabs>
                <div className="news_list_ad">
                    <div className="place_ad">
                        <Link to={"/container/coordinate"}>
                            <img src={require("../../img/news_new_ad_banner1.jpg")}/>
                        </Link>
                    </div>
                    <div className="place_news">
                        <div className="place_news_title"><span>热门推荐</span></div>
                        <ul className="place_news_list">
                            {
                                listData && listData.length > 0 && listData.map((item, index) => {
                                    return getListRight(item, index)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
};
export default News;