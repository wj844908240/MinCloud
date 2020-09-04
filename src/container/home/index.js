import React, { Component } from "react";
import TOOLS from "../../assets/tools/tools";
import Headernav from "../../components/HeaderNav/index";
import DetailHeader from "../../components/header/index";
import Footer from "../../components/footer/index";
import { BrowserRouter as Router, Link } from "react-router-dom"
import "./index.less"
import "./../common/index.less"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DataList: [],
            Newzn: [],
            Newgj: [],
        };
    }
    componentWillMount() {
        sessionStorage.setItem("current", "home")
        //获取列表数据
        TOOLS.get("enterpriseauth/", {
            page: 1,
            page_size: 4,
        }).then(res => {
            if (res.status === 200) {
                this.setState({
                    DataList: res.data.results,
                });
            }
        })
        this.getNews(2)
        this.getNews(4)
    }

    getNews(type) {
        TOOLS.get("miningnews/list/", {
            limit: 5,
            offset: 0,
            type: type
        }).then(res => {
            if (res.status === 200) {
                if (type === 2) {
                    this.setState({
                        Newzn: res.data.results,
                    });
                } else {
                    this.setState({
                        Newgj: res.data.results,
                    });

                }
            }
        })
    }

    GoLink(id, url) {
        this.props.history.push("/container/newslist?id=" + id);
    }
    handClick(type) {
        if (type === "hyzl") {
            sessionStorage.setItem("current", "model:2");
            this.props.history.push("/container/know");
        } else if (type === "rjy") {
            sessionStorage.setItem("current", "cloud:1");
            this.props.history.push("/container/compute");
        } else if (type === "jcy") {
            sessionStorage.setItem("current", "jcy:1");
            this.props.history.push("/container/BaseCloud");
        }
    }
    toPage(url) {
        sessionStorage.setItem("current", url.key);
        this.props.history.push(url.path);
    }
    render() {
        const { match } = this.props;
        const { Newzn, Newgj } = this.state
        return (
            <div className="body_content">
                <DetailHeader history={this.props.history}></DetailHeader>
                <Headernav match={match} history={this.props.history}></Headernav>
                <div className="page_home">
                    <div className="banner cloud">
                        <div className="baner-content">
                            <h1>MIM协同平台已上线</h1>
                            <p><Link to={"/container/coordinate"}>查看详情</Link></p>
                        </div>
                        <div className="banner_nav_ul">
                            <span onClick={e => { this.toPage({ path: '/container/compute', key: 'cloud:1' }) }}>云超算</span>
                            <span onClick={e => { this.toPage({ path: '/container/onsoft', key: 'cloud:2' }) }}>云软件</span>
                            <span onClick={e => { this.toPage({ path: '/container/min3DMine', key: 'MI:2' }) }}>MIM三维可视化</span>
                            <span><a href="http://equipment.miningcloud.com.cn" target='_blank'>矿业装备数据</a></span>
                            <span><a href="http://design.miningcloud.com.cn" target='_blank'>矿山设计数据</a></span>
                            <span><a href="http://meeting.miningcloud.com.cn" target='_blank'>恩菲会议</a></span>
                            {/* <span><a href="http://10.30.0.172:8060/register"  target='_blank'>MIM协同平台</a></span> */}
                        </div>
                    </div>
                    <div className="cloud_paltform">
                        <div className="w">
                            <h2 className="homeFontWeight">软件云服务</h2>
                            <span>高性能仿真和专业软件SaaS云平台</span>
                            <p className="whole" onClick={e => { this.handClick("rjy") }}>查看全部</p>
                            <ul className="productionLists">
                                <li onClick={e => { this.toPage({ path: '/container/compute', key: 'cloud:1' }) }}>
                                    <b><img src={require("../../img/binoculars.png")} /></b>
                                    <h2>高性能计算集群</h2>
                                    <p>依托“天河”超级计算机，计算性能卓越；按需动态调整计算资源权限，满足多元化需求。</p>
                                </li>
                                <li onClick={e => { this.toPage({ path: '/container/compute', key: 'cloud:1' }) }}>
                                    <b><img src={require("../../img/cubes.png")} /> </b>
                                    <h2>界面化提交作业</h2>
                                    <p>无需输入linux命令、无需编辑脚本即可提交作业，资源使用、任务提交情况一目了然。</p>
                                </li>
                                <li onClick={e => { this.toPage({ path: '/container/onsoft', key: 'cloud:2' }) }}>
                                    <b><img src={require("../../img/desktop.png")} /></b>
                                    <h2>专业软件在线使用</h2>
                                    <p>Web端一键远程启动软件，无需本地安装和本地授权，支持多用户同时调用。</p>
                                </li>
                                <li onClick={e => { this.toPage({ path: '/container/onsoft', key: 'cloud:2' }) }}>
                                    <b><img src={require("../../img/database.png")} /></b>
                                    <h2>专业的咨询服务</h2>
                                    <p>拥有专业的技术咨询团队，可提供各类软件的技术支持及项目外包服务。</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="basecloud" style={{ padding: '0 0 30px 0' }}>
                        <h2>基础云服务</h2>
                        <span>打造安全云计算平台，提供弹性可靠IaaS云服务</span>
                        <p className="whole" onClick={e => { this.handClick("jcy") }}>查看全部</p>
                        <div className="base-left base">
                            <ul className="productionLists clearfix">
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/云主机.png")} /></dt>
                                        <dd>
                                            <h2>云主机</h2>
                                            <p>高性能、高可靠、安全稳定的弹性计算服务</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/云硬盘.png")} /></dt>
                                        <dd>
                                            <h2>云硬盘</h2>
                                            <p>灵活稳定、方便扩展的分布式块存储服务</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/云网络.png")} /></dt>
                                        <dd>
                                            <h2>云网络</h2>
                                            <p>安全的虚拟化网络环境和云主机粒度的安全组服务</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/负载均衡.png")} /></dt>
                                        <dd>
                                            <h2>负载均衡</h2>
                                            <p>均衡应用流量，消除故障节点，提高业务可用性</p>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                        <div className="base-right base">
                            <ul className="productionLists clearfix">
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/安全保护.png")} /></dt>
                                        <dd>
                                            <h2>安全防护</h2>
                                            <p>全方位安全防护服务，包含WAF，IPS和抗DDOS</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/网站备案.png")} /></dt>
                                        <dd>
                                            <h2>网站备案</h2>
                                            <p>一站式免费网站备案服务，让您的产品快速上线</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/云存储.png")} /></dt>
                                        <dd>
                                            <h2>云存储</h2>
                                            <p>可靠、稳定、安全和低廉价格的云存储服务</p>
                                        </dd>
                                    </dl>
                                </li>
                                <li>
                                    <dl>
                                        <dt><img src={require("../../img/等保评测.png")} /></dt>
                                        <dd>
                                            <h2>等保评测</h2>
                                            <p>快速通过《信息系统安全等级保护》测评</p>
                                        </dd>
                                    </dl>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='zjk'>
                        <div className='w zjk-item'>
                            <div className='zj-left'>

                                <div className="imgwrap">
                                    <a href="http://tech.miningcloud.com.cn/" target='_blank'>
                                        <span className="img"></span>
                                        <span className="text">科技信息</span>
                                    </a>
                                </div>

                                <div className="imgwrap">
                                    <a href="http://218.249.43.70:8033/" target='_blank'>
                                        <span className="img"></span>
                                        <span className="text">矿业经济数据</span>
                                    </a>

                                </div>
                                <div className="imgwrap">
                                    <a href="http://equipment.miningcloud.com.cn" target='_blank'>
                                        <span className="img"></span>
                                        <span className="text">矿业设备数据</span>
                                    </a>
                                </div>
                                <div className="imgwrap">
                                    <a href="http://design.miningcloud.com.cn" target='_blank'>
                                        <span className="img"></span>
                                        <span className="text">矿山设计数据</span>
                                    </a>

                                </div>
                            </div>
                            <div className='zj-right'>
                                <h2>矿业库</h2>
                                <p>MINING LIBRARY</p>
                                <div>
                                    <p>共享数据集成</p>
                                    <p>挖掘数据价值</p>

                                </div>
                                <a className='gdMore' href="" onClick={e => { this.toPage({ path: '/container/zsk', key: 'model:3' }) }}>更多+</a>
                            </div>
                        </div>
                    </div>
                    <div className='mimk'>
                        <div className='w'>
                            <h2 className="homeFontWeight">MIM（矿山信息模型）</h2>
                            <div className='gks'>
                                <p>MIM（Mine Information Modeling），为智能矿山提供数据驱动</p>
                            </div>
                            <a className='gdMore' href="" onClick={e => { this.toPage({ path: '/container/Minindex', key: 'MI:0' }) }}>更多+</a>
                            <div className='moxin'>
                                <div className='mxItem' onClick={e => { this.toPage({ path: '/container/consultDesign', key: 'MI:0' }) }}>
                                    <img src={require("../../img/mimxtpt.png")} />
                                    <p>MIM咨询设计</p>
                                </div>
                                <div className='mxItem'  onClick={e => { this.toPage({ path: '/container/coordinate', key: 'MI:1' }) }}>
                                    <img src={require("../../img/minzusj.png")} />
                                    <p>MIM协同平台</p>
                                </div>
                                <div className='mxItem'  onClick={e => { this.toPage({ path: '/container/min3DMine', key: 'MI:2' }) }}>
                                    <img src={require("../../img/ksswpt.png")} />
                                    <p>MIM三维可视化平台</p>
                                </div>
                                <div className='mxItem'  onClick={e => { this.toPage({ path: '/container/minvam', key: 'MI:3' }) }}>
                                    <img src={require("../../img/VRARMR@2x.png")} />
                                    <p>VR/AR/MR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='ycjs'>
                        <div className='w'>
                            <h2>远程技术服务</h2>
                            <p>ROMOTE THCHNICAL <br />SERVICE</p>
                            <div className='dbx'>
                                <div className='dbxItem dbxItem1'>
                                    <div className="div0" onClick={e => { this.toPage({ path: '/container/diagnosis', key: 'MIM:5' }) }}>
                                        <p>
                                            <b><span className="bbx_img"></span>
                                            </b>
                                            远程诊断与大数据服务
                                        </p>
                                    </div>
                                </div>
                                <div className='dbxItem dbxItem2' >
                                    <div className="div0" onClick={e => { this.toPage({ path: '/container/acquisite', key: 'MIM:4' }) }}>
                                        <p>
                                            <b><span className="bbx_img"></span>
                                            </b>
                                            智能数据采集
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SD">
                        <div className="w">
                            <h2 className="homeFontWeight">智能矿山</h2>
                            <div className='gks'>
                                <p>依托中国恩菲矿山工程核心专长技术，基于矿业云提供智能矿山一站式整体解决方案</p>
                            </div>
                            <a className='gdMore' href="" onClick={e => { this.toPage({ path: '/container/Intelligentindex', key: 'big:1' }) }}>更多+</a>
                        </div>
                    </div>
                    <div className="SD_ul">
                        <div className="w">
                            <ul id="shop">
                                <li>
                                    <a>
                                        <img src={require("../../img/shop1.png")} />
                                    </a>
                                    <p>自动化采矿技术</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop2.png")} />
                                    </a>
                                    <p>有轨运输无人驾驶技术</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop3.png")} />
                                    </a>
                                    <p>提升自动化控制系统</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop4.png")} />
                                    </a>
                                    <p>智能配电与融合控制系统</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w">
                            <ul id="shop">
                                <li>
                                    <a>
                                        <img src={require("../../img/shop5.png")} />
                                    </a>
                                    <p>充填自动化控制系统</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop6.png")} />
                                    </a>
                                    <p>智能排水与泵站无人值守系统</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop7.png")} />
                                    </a>
                                    <p>溜破与胶带自动控制无人值守系统</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop8.png")} />
                                    </a>
                                    <p>智能按需通风系统</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w">
                            <ul id="shop">
                                <li>
                                    <a>
                                        <img src={require("../../img/shop9.png")} />
                                    </a>
                                    <p>斜坡道智能调度与物流管理系统</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop10.png")} />
                                    </a>
                                    <p>井下安全避险六大系统</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop11.png")} />
                                    </a>
                                    <p>选矿自动化技术</p>
                                </li>
                                <li>
                                    <a>
                                        <img src={require("../../img/shop12.png")} />
                                    </a>
                                    <p>尾矿在线智能检测系统</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="news">
                        <div className="news_title">
                            <h2 className="homeFontWeight">行业资讯</h2>
                            <a className='gdMore' href="" onClick={e => { this.toPage({ path: '/container/new', key: '' }) }}>更多+</a>
                        </div>
                        <div className="w news_list">
                            <div className="news-bg">
                                <div className="news_list_top">
                                    <span>智能矿山</span>
                                    <Link to={"/container/new"}>更多&nbsp;&gt;&nbsp;</Link>
                                </div>
                                <div>
                                    <ul>
                                        {
                                            Newzn.map((item, index) => {
                                                return (
                                                    <li key={index} onClick={e => this.GoLink(item.id)}>
                                                        <span className="title">{item.title}</span>
                                                        <span>{item.pure_content.replace(/^\s*/, "").substring(0, 35)}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className="news-bg news-right">
                                <div className="news_list_top">
                                    <span>国际矿业</span>
                                    <Link to={"/container/new?id=4"}>更多&nbsp;&gt;&nbsp;</Link>
                                </div>
                                <div>
                                    <ul>
                                        {
                                            Newgj.map((item, index) => {
                                                return (
                                                    <li key={index} onClick={e => this.GoLink(item.id)}>
                                                        <span className="title">{item.title}</span>
                                                        <span>{item.pure_content.replace(/^\s*/, "").substring(0, 35)}</span>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

        )
    }
}

export default Home;