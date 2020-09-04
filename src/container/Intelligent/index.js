
import React, { Component } from "react";
import { Row, Col, Card } from 'antd';
import "../could/index.less";
import "../min/minDesign.less";
import "./index.less";
import "./../common/index.less"
class Intelligentindex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
        };
    };
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    render() {
        const { size } = this.state;
        const { Meta } = Card;
        let imgs1 = [{ src: 'introduce1.png', title: '自动化采矿', id:1}, { src: 'introduce2.png', title: '有轨运输无人驾驶', id:2 }, { src: 'introduce3.png', title: '提升自动化控制', id:3 }, { src: 'introduce4.png', title: '智能配电与融合控制', id:4  }];
        let imgs2 = [{ src: 'introduce5.png', title: '充填自动化', id:1 }, { src: 'introduce6.png', title: '智能排水与泵站无人值守', id:2 }, { src: 'introduce7.png', title: '溜破与胶带自动控制', id:3  }, { src: 'introduce8.png', title: '智能按需通风', id:4  }];
        let imgs3 = [{ src: 'introduce9.png', title: '智能物流调度', id:1 }, { src: 'introduce10.png', title: '安全避险六大系统', id:2 }, { src: 'introduce11.png', title: '智能选矿与优化控制', id:3  }, { src: 'introduce12.png', title: '尾矿库在线智能监测', id:34 }];
        return (
            <div className="cloud_conten">
                <div className="computing-could banner" id="intellBanner">
                    <div className="info" style={{backgroundColor:'transparent'}}>
                        <div className="title"><h2 className="linear" text="智能矿山">智能矿山</h2></div>
                        <section className="text"><span>依托中国恩菲矿山工程核心专长技术，基于矿业云提供智能矿山一站式整体解决方案</span></section>
                    </div>
                </div>
                <div className="server" style={{ height: "auto", backgroundColor: '#fff' }}>
                    <div className="topEle" style={{ height: "auto" }}>
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <Row>
                                    <Col className="ant-col" span={12}>
                                        <div className="content">
                                            <div className="headline Intelligent"><span>智能矿山</span></div>
                                            <div className="imgAnnotate">智能矿山以数字矿山和自动化矿山为基础，利用系统工程理论、物联网、大数据和人工智能等技 术，构建矿山信息物理系统，充分挖掘和利用矿山从勘探、建设和生产过程中产生的各种数据，建立 物理矿山和其虚拟模型、经济模型的映射关系，实现矿山全过程的自动化生产和最优决策,达到资源 利用率和资产效率的最大化以现代信息、控制技术和先进装备为基础，通过固定设备无人值守、物流管理智能化、回采工序自动化、生产管理全面信息化，实现矿山安全、绿色、高效运营，从而构建智能化无人矿山。</div>
                                        </div>
                                    </Col>
                                    <Col className="ant-col" span={12}>
                                        <div className="imgContent" style={{left:'auto',right:0,textAlign:'right'}}>
                                            <img className="imgPic" src={require(`../../img/Intelligent1.png`)}></img>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="middleEle" style={{ height: "auto" }}>
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <div className="content" id="intelligent">
                                    <div className="headline Intelligent"><span>核心专长技术</span></div>
                                    <div className="maincontent">中国恩菲依托“有色矿冶国家队”的技术优势, 在中国工程院院士、公司高级顾问专家于润沧院士的指导下，组建了一支多专业融合的智能矿山技术团队。多年来，通过持续不断的技术创新，中国恩菲拥有自动化采矿、有轨运输无人驾驶、提升机自动 控制、充填自动化控制、信息化集成、智能供配电、选矿自动化、尾矿库在线安全监测、多源异构数 据采集、虚拟矿山建设等方面的“智能+矿业”技术，并在多个矿山成功推广应用，实现成果转化，逐渐形成一大批核心专长技术。</div>
                                    <div className="imgList box">
                                        {imgs1.map((item) => <div className="flexbox"  key={item.id}> <Card  hoverable cover={<img alt="example" src={require(`../../img/${item.src}`)} />} >
                                            <Meta title={item.title} />
                                        </Card></div>)}
                                    </div>
                                </div>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="botEle" style={{ height: "auto" }}>
                        <Row>
                            <Col className="ant-col" span={5}>
                            </Col>
                            <Col className="ant-col" span={14}>
                                <div className="lastContent">
                                    <div className="imgList box">
                                        {imgs2.map((item) => <div className="flexbox"  key={item.id}> <Card hoverable cover={<img alt="example" src={require(`../../img/${item.src}`)} />} >
                                            <Meta title={item.title}/>
                                        </Card></div>)}
                                    </div>
                                    <div className="imgList box">
                                        {imgs3.map((item) => <div className="flexbox"  key={item.id} > <Card hoverable  cover={<img alt="example" src={require(`../../img/${item.src}`)} />} >
                                            <Meta title={item.title}/>
                                        </Card></div>)}
                                    </div>
                                </div>
                            </Col>
                            <Col className="ant-col" span={5}></Col>
                        </Row>
                    </div>
                    <div className="leftDisgn" style={{height:'14%'}}></div>
                    <div className="rightDesign"  style={{height:'14%'}}></div>
                </div>
            </div>
        )
    }
};
export default Intelligentindex;