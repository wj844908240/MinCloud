
import React, { Component } from "react";
import { Row, Button, Col } from 'antd';
import TOOLS from "../../assets/tools/tools";
import "../could/index.less";
import "./index.less";
import "./minDesign.less";
import "./../common/index.less"
class Mincoordinate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
        };
        this.toUrl = this.toUrl.bind(this);//手动绑定
    };
    componentDidMount() {
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
    GoPrint() {
        window.location.href = "http://web.miningcloud.com.cn:8032/";
		// TOOLS.get("user/is_logined/").then(res => {
		// 	if (res.status === 200) {
		// 		if (res.data.is_logined === true) {
		// 			window.location.href = "http://218.249.43.70:8032/"
		// 		} else {
		// 			this.props.history.push("/login") 
		// 			// 页面刷新
		// 			window.location.reload()
		// 		}
		// 	}
		// })
	}
    toUrl(e) {
        this.props.history.push(e);
    }
    render() {
        const { size } = this.state;
        return (
            <div className="cloud_conten">
                <div className="computing-could banner" id="coordinate">
                <div className="info coordinateInfo" style={{backgroundColor:'transparent'}}>
						<div className="innerText">
							<div className="title"><h2>MIM协同平台</h2></div>
							<div className="text"><p>以项目为核心的数字化交付，全流程协同工作</p></div>
                            <div className="link"><Button size={size} type="primary" onClick={e => this.GoPrint()} id="customBtn" type="primary">立即使用</Button></div>
						</div>
					</div>
                    {/* <div className="info">
                        <div className="title"><h2>MIM协同平台</h2></div>
                        <div className="text"><span>以项目为核心的数字化交付，全流程协同工作</span></div>
                        <div className="link"><Button size={size} type="primary" onClick={e => this.GoPrint()} id="customBtn" type="primary">立即使用</Button></div>
                        {/* <div className="linkHref">
                            <Row>
                                <Col className="ant-col" span={7}></Col>
                                <Col className="ant-col" span={10}>
                                    <Row>
                                        <Col className="ant-col" span={6}><div><span data-url ="/container/consultDesign"  className="links" onClick={e=> this.toUrl('/container/consultDesign')}>MIM咨询设计</span></div></Col>
                                        <Col className="ant-col" span={6}><div><span data-url ="/container/coordinate"  className="links" onClick={e=> this.toUrl('/container/coordinate')}>MIM协同平台</span></div></Col>
                                        <Col className="ant-col" span={6}><div><span data-url ="/container/min3DMine"  className="links" onClick={e=> this.toUrl('/container/min3DMine')}>矿山三维管控平台</span></div></Col>
                                        <Col className="ant-col" span={6}><div><span data-url ="/container/minvam"  className="links" onClick={e=> this.toUrl('/container/minvam')}>VR/AR/MR</span></div></Col>
                                    </Row>
                                </Col>
                                <Col className="ant-col" span={7}></Col>
                            </Row>
                        </div> */}
                    {/* </div>  */}
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
                                            <div className="word">
                                                <div className="headline" ><span>模型轻量化在线浏览</span></div>
                                                <div className="imgAnnotate">不需安装任何专业软件，即可通过浏览器或者手机进行十几种格式模型和图纸文件的在线预览，包括DWG、RVT、DGN、IFC、OBJ等，模型数据100%保留。</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img4 flex_right"></div>
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
                                            <div className="img5"></div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>

                                        <div className="content  flex_right conDes">
                                            <div className="word">
                                                <div className="headline" ><span>MIM协作</span></div>
                                                <div className="imgAnnotate">支持模型和图纸版本管理、文档关联，支持在线添加批注和保存共享，可发起评论，方便项目团队进行在线审阅，沟通与协作。</div>
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
                                            <div className="word">
                                                <div className="headline" ><span>图档集中管理</span></div>
                                                <div className="imgAnnotate">可在云端存储和管理整个项目生命周期中的文档、图纸、模型等所有项目数据，支持共享、收藏、标签等功能，支持快速检索。支持私有云部署，保证数据隐私与安全。</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img6 flex_right"></div>
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
                <div className="server" style={{ height: "auto", backgroundColor: '#fff' }}>
                    <div className="middleEle">
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent">
                                            <div className="img7"></div>
                                        </div>

                                    </Col>
                                    <Col className="ant-col" span={12}>

                                        <div className="content">
                                            <div className="word  flex_right conDes">
                                                <div className="headline" ><span>细粒度权限控制</span></div>
                                                <div className="imgAnnotate">提供浏览、下载、创建、修改、删除、权限设置六种细粒度的权限控制，可针对任一层级文件夹或单个文件，对工作组或个人进行灵活授权。</div>
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
                                            <div className="word">
                                                <div className="headline" ><span>多终端协同工作</span></div>
                                                <div className="imgAnnotate">基于web技术开发，与云端数据同步，通过手机端可以随时浏览项目文件、图纸及模型。支持基于文档的消息对话和视频会议。</div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent" style={{ right: 0, left: 'auto', textAlign: 'right' }}>
                                            <div className="img8 flex_right"></div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>

                </div>
            </div>
        )
    }
};
export default Mincoordinate;