import React, {Component} from "react";
import "../BaseCloud/index.less"
import "./../common/index.less"
class Remotely extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="cloud_conten">
                <div className="banner mim">
                    <div className="container">
                        <h2>远程技术服务</h2>
                        <div className="content">
                            包括远程监控→远程诊断→远程技术服务，通过设备诊断、工艺诊断、能源诊断及经济效果诊断
                            ，提供维护服务、优化服务、对标服务、云专家服务、行业信息服务等
                        </div>
                        <a href="">即将上线</a>
                    </div>
                </div>
                <div className="product">
                    <h2>远程技术服务</h2>
                    <div className="p_content">
                        <p>远程数据采集、远程诊断及
                            远程技术服务是本着从矿山企业实际生产的问题数据中查找病因，给出符合其自身特点的解决方案及事前维护计
                            划，从而提高设备可靠性，减少设备停机率，降低能源消耗，并最终实现降低企业的生产成本</p>
                        <p className="p_img"><img src={require("../../img/15.jpg")}/></p>
                    </div>
                    <h2>功能与服务</h2>
                    <ul className="productionLists clearfix">
                        <li>
                            <dl>
                                <dt><img src={require("../../img/database.png")}/></dt>
                                <dd>
                                    <h2>远程数据采集</h2>
                                    <p>实现矿山企业的实时生产数据、历史业务数据和音、视频数据与中国矿业信息化协同创新中心数据处理服务
                                        业务的无缝对接，并能够对各类远程数据建立数据档案，支持专业级价值数据挖掘</p>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><img src={require("../../img/cubes.png")}/></dt>
                                <dd>
                                    <h2>远程诊断</h2>
                                    <p>实现对各类远程数据的甄选和分析，形成综合性的工艺诊断、设备诊断、能耗诊断和经济效果评价</p>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt><img src={require("../../img/desktop.png")}/></dt>
                                <dd>
                                    <h2>远程技术服务</h2>
                                    <p>除了将诊断结果（如预防性维护、工艺行业对标与设备行业对标等）定制化向企业推送外，还包括利用三维可视化技术进行远程协助，帮助提升矿山企业的生产操作和管理决策能力</p>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
};
export default Remotely;