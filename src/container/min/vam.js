
import React, { Component } from "react";
import { Row, Col } from 'antd';
import "../could/index.less";
import "./index.less";
import "./minDesign.less";
import "./../common/index.less"

class Minvam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
        };
        this.toUrl = this.toUrl.bind(this);//手动绑定
    };
    componentDidMount() {
        console.log()
        let curUrl = this.props.history.location.pathname;
        let urls = document.getElementsByClassName('links')
        for (let i = 0; i < urls.length; i++) {
            if (curUrl == urls[i].dataset.url) {
                urls[i].style.color = "#39B8E8"
            } else {
                urls[i].style.color = "#fff"
            }
        }
    }
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    toUrl(e) {
        this.props.history.push(e);
    }
    render() {
        const { size } = this.state;
        return (
            <div className="cloud_conten">
                <div className="computing-could banner VRBanner">
                    <div className="content">
                        <h2 style={{ padding: '10px 0px', margin: 0 }}>VR/AR/MR</h2>
                        <div className="text2"><p>基于MIM模型，融合虚拟现实、增强现实和混合现实<br />技术，连接虚拟矿山和物理矿山。</p></div>
                    </div>
                </div>
                <div className="server" style={{ height: "auto", backgroundColor: '#fff' }}>
                    <div className="topEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="content">
                                            <div className="word2Vm">
                                                <div className="headline" ><span>VR（虚拟现实）技术应用——技术培训与方案优化</span></div>
                                                <div className="imgAnnotate">
                                                    将虚拟现实技术与地质空间管理技术融入矿山设计中，建设矿山设计虚拟展现系统，在项目开工前就全面真 实的了解建成后的状况；并以矿山虚拟现实系统为基础建设矿山三维管控系统。
                                            <br></br>
                                            将设计的三维模型快速转为VR模型，通过身临其境的感受，查看设计成果，发现问题并改进。例如设计一个硐室，仅从平面图上看有些问题体会不深 ，戴上VR头盔，通过真实感受，能发现尺寸、布置等方面存在的问题。
                                            </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img12 flex_right"></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="middleEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img13"></div>
                                        </div>

                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="content">
                                            <div className="word2Vm flex_right convam">
                                                <div className="headline" ><span>AR（增强现实）技术应用——智慧图纸</span></div>
                                                <div className="imgAnnotate">智慧图纸APP基于MIM技术和AR技术研发。扫描对应图纸、图像或模型后，叠加出三维模型图，可以对其进行旋转、缩放等全方位查看。其次，相关的工程材料、工程设备、方案描述、安装位置、施工要求等全部工程信息都可以连接远程数据库随意调取查看，实现图纸承载信息的无限扩充。此外，智慧图纸还能够进行相关的工业演示，协助现场工作人员理解相关的工艺与流程。</div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="botEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="content">
                                            <div className="word2Vm">
                                                <div className="headline" ><span>MR（混合现实）技术应用——远程技术指导</span></div>
                                                <div className="imgAnnotate">利用支持混合现实的相关设备（Microsoft Hololens、支持MR SDK的移动设备等），将3D模型、实时数据等与物理实景相融合，做到虚实结合，从而实现部分混合现实功能，如虚拟测量、空间定位等功能；同时，基于远程协同数据交互框架，可用于辅助三维设计，进行远程专家指导等。</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img14  flex_right"></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="leftDisgn"></div>
                    <div className="rightDesign"></div>
                </div>
            </div>
        )
    }
};
export default Minvam;