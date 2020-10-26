import React, {Component} from "react";
import TOOLS from "../../assets/tools/tools";
import Headernav from "../../components/HeaderNav/index";
import DetailHeader from "../../components/header/index";
import Footer from "../../components/footer/index";
import {BrowserRouter as Router, Link} from "react-router-dom"
import "./index.less"
import "./../common/index.less"
class Zsk extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {

    }

    handClick(type) {
        if(type==="hyzl"){
            sessionStorage.setItem("current", "model:2");
            this.props.history.push("/container/know");
        }else if(type==="rjy"){
            sessionStorage.setItem("current", "cloud");
            this.props.history.push("/container/could");
        } else if(type==="jcy"){
            sessionStorage.setItem("current", "jcy:1");
            this.props.history.push("/container/BaseCloud");
        }
    }
    render() {
        return (
            <div className="page_home pageC">
                <div className="banner cloud" id="zskBanner">
                    <div className="baner-content">
                        <h1>矿业库</h1>
                        {/* <p>前期用户可享免费云服务资源</p> */}
                        <span className="zskword">共享数据集成，挖掘数据价值</span>
                    </div>
                </div>
                {/* <div className="cloud_paltform">
                    <div className="w">
                        <h2>矿业经济数据</h2>
                        <p className='f-title'> <span>全面的行业数据平台，专业的数据分析和行业研究</span></p>
                        <p>
                            <a className='gdMore' target="_blank" href="http://218.249.43.70:8033/">更多+</a>
                        </p>
                        <div className="sourceOption clearfix">
                            <ul>
                                <li>
                                    <a href="javascript:;" className="activeHref">
                                        <img src={require("../../img/data_1.png")} alt=""/>
                                        <p>宏观经济</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className="activeHref">
                                        <img src={require("../../img/data_2.png")} alt=""/>
                                        <p>行业数据</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className="activeHref">
                                        <img src={require("../../img/data_3.png")} alt=""/>
                                        <p>企业数据</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className="activeHref">
                                        <img src={require("../../img/data_4.png")} alt=""/>
                                        <p>市场数据</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;" className="activeHref">
                                        <img  src={require("../../img/data_5.png")} alt=""/>
                                        <p>进出口数据</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className='cloud_paltform'>
                    <div className='w'>
                        <h2>矿业装备数据</h2>
                        <div className='gks'>
                            <p>涵盖矿业全流程的装备数据，便捷的数据检索和数据关联</p>
                        </div>
                        <a className='gdMore' target="_blank" href="http://218.249.43.70:8035/">更多+</a>
                        <ul className="zbLists" style={{marginTop:'80px'}}>
                            <li>
                                <h2>设备参数</h2>
                                <div className="imgWrap">
                                    <a> <img src={require("../../img/设备参数.jpg")}/></a>
                                </div>
                             
                            </li>
                            <li>
                                <h2>样本关联</h2>
                                <div className="imgWrap">
                                    <a><img src={require("../../img/样本关联.jpg")}/></a>
                                </div>
                            </li>
                            <li>
                                <h2>厂商信息</h2>
                                <div className="imgWrap">
                                    <a> <img src={require("../../img/厂商信息.jpg")}/></a>
                                </div>
                            </li>
                            <li>
                                <h2>使用情况</h2>
                                <div className="imgWrap">
                                    <a> <img src={require("../../img/使用情况.jpg")}/></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="cloud_paltform" style={{padding:'0 0 30px 0'}}>
                    <div className="w">
                        <h2>知识库</h2>
                        <p className='f-title'> <span>沉淀行业知识，驱动数据共享</span></p>
                        <a className='gdMore' href="">更多+</a>
                        <div className='zsks' style={{margin:'80px 0 0 0'}}>
                            <div className="ssBox sLeft">
                                <div>
                                    <h2>MIM构建库</h2>
                                    <p>共享标准的MIM模型，构建MIM族库</p>
                                    <b></b>
                                </div>
                                <div>
                                    <h2>信息资讯</h2>
                                    <p>快速获取所需的行业资讯
                                    </p>
                                    <b></b>
                                </div>
                                <div>
                                    <h2>会议资料</h2>
                                    <p>知名国际会议论文演讲资料免费共享</p>
                                    <b></b>
                                </div>
                            </div>
                            <div className="ssImg">
                                <img src={require("../../img/矢量智能对象@2x.png")} alt=""/>
                            </div>
                            <div className="ssBox srRight">
                                <div>
                                    <h2>行业研报</h2>
                                    <p>知名咨询和证券机构的行业研报</p>
                                    <b></b>
                                </div>
                                <div>
                                    <h2>标准规范</h2>
                                    <p>咨询设计和生产建设必备</p>
                                    <b></b>
                                </div>
                                <div>
                                    <h2>行业知识</h2>
                                    <p>知识共享的C2C平台</p>
                                    <b></b>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='mimk1'>
                    <div className='w'>
                        <h2>矿山设计数据</h2>
                        <div className='gks'>
                            <p>为矿业咨询设计提供基础数据库和智能化工具</p>
                        </div>
                        <a className='gdMore' target="_blank" href="http://218.249.43.70:8035/">更多+</a>
                        <div className='moxin' id="moxinlibrary">
                            <div className='mxItem'>
                                <img src={require("../../img/k.png")}/>
                                <p>矿山数据</p>
                                {/* <div>
                                    <p>针对品牌提供定制化网站</p>
                                    <p>建设解决方案</p>
                                </div> */}
                            </div>
                            <div className='mxItem'>
                                <img src={require("../../img/项目数据@2x.png")}/>
                                <p>项目数据</p>
                                {/* <div>
                                    <p>实现移动端多屏幕小屏</p>
                                    <p>幕上的“跨屏组合”</p>
                                </div> */}
                            </div>
                            <div className='mxItem'>
                                <img src={require("../../img/设计方案@2x.png")}/>
                                <p>设计方案</p>
                                {/* <div>
                                    <p>系统化的针对百度</p>
                                    <p>Google等主流搜索引擎推广服务</p>
                                </div> */}
                            </div>
                            <div className='mxItem'>
                                <img src={require("../../img/专业工具@2x.png")}/>
                                <p>专业工具</p>
                                {/* <div>
                                    <p>根据客户所在行业设计及</p>
                                    <p>具视觉冲击的网站</p>
                                </div> */}
                            </div>
                            <div className='mxItem'>
                                <img src={require("../../img/质量管理@2x.png")}/>
                                <p>设计质量管理</p>
                                {/* <div>
                                    <p>为客户提供一站式的互联</p>
                                    <p>网服务</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Zsk;