import React, {Component} from "react";
import "./index.less"
import "./../common/index.less"
import {Tabs} from 'antd';
const TabPane = Tabs.TabPane;
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div id="about">
                <header></header>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="关于天河矿业云" key="1">
                        <div className="cx_content">
                            <div className="gycxzx_title">
                                <span className="line-v"></span>
                                <div className="card-title-txt">
                                    <span className="title-txt">关于天河矿业云</span>
                                    <p>ABOUT US</p>
                                </div>
                                <span className="line-v"></span>

                            </div>
                            <p>天河矿业云是基于分布式计算、网络存储、虚拟化等技术的软件服务平台和矿业远程技术服务平台，</p>
                            <p>由中国恩菲与国家超算天津中心联合开发。矿业云面向广大的矿业企业、装备制造商和</p>
                            <p>专业技术人员，提供全面、实用的矿业技术资源与软件和服务。</p>
                            <div className="mtop">
                                <p>矿业云的功能模块包括软件云服务、供需对接、矿业库、新闻资讯、</p>
                                <p>矿业大数据服务、远程技术服务等。</p>
                            </div>
                        </div>
                        <div className="gyzy_content">
                            <ul>
                                <li>
                                    <img src={require("../../img/one.jpg")} alt=""/>
                                    <div className="mask">
                                        <div className="mask-content">
                                            <p>引领矿山</p>
                                            <p>智能技术</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src={require("../../img/two.jpg")} alt=""/>
                                    <div className="mask">
                                        <div className="mask-content">
                                            <p>推动自动化</p>
                                            <p>采矿示范应用</p>
                                        </div>

                                    </div>
                                </li>
                                <li>
                                    <img src={require("../../img/three.jpg")} alt=""/>
                                    <div className="mask">
                                        <div className="mask-content">
                                            <p>制定智能</p>
                                            <p>矿山标准</p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <img src={require("../../img/four.jpg")} alt=""/>
                                    <div className="mask">
                                        <div className="mask-content">
                                            <p>承担矿业</p>
                                            <p>高端咨询</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </TabPane>
                    <TabPane tab="大事记" key="2">
                        <div className="time_content">
                            <div className="gycxzx_title">
                                <span className="line-v"></span>
                                <div className="card-title-txt">
                                    <span className="title-txt">大事记</span>
                                    <p>TIME LINE</p>
                                </div>
                                <span className="line-v"></span>
                            </div>
                            <div className="tk_dsj_content">
                                <div className="tk_dsj_title" id="2018">
                                    <img className="tk_dsj_top"
                                         src={require("../../img/tk_about_03.png")}/><span>2018</span>
                                </div>
                                <div className="tk_dsj_center clearfix">
                                    <ul>
                                        <li>
                                            <p><span className="circle"></span><span className="tk_dsj_day">9月</span>
                                            </p>
                                            <span
                                                className="tk_dsj_centeres">天河矿业云一期服务进入上线试运行阶段，基于超级计算机及云计算技术，具备了提供软件云服务、供需对接、矿业库、新闻资讯等服务的能力。</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </TabPane>
                    <TabPane tab="联系我们" key="3">
                        <div className="us_content">
                            <div className="gycxzx_title">
                                <span className="line-v"></span>
                                <div className="card-title-txt">
                                    <span className="title-txt">联系我们</span>
                                    <p>CONTACT US</p>
                                </div>
                                <span className="line-v"></span>
                            </div>
                            <ul className="gycxzx_lxfs">
                                <li>您有任何关于天河矿业云的意见与建议，以及相关合作事宜，请通过以下方式与我们联系：</li>
                                <li><span>联系电话：</span>010-63936496</li>
                                <li><span>公司邮箱：</span>cmic@enfi.com.cn</li>
                                <li><span>公司地址：</span>北京市海淀区复兴路12号恩菲科技大厦B座</li>
                            </ul>
                            <div className="tk_lxwm_right">
                                <img src={require("../../img/wechat.jpg")}/>
                                <p>官方微信二维码</p>
                            </div>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
};
export default About;