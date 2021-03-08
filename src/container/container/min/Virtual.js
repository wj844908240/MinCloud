import React, {Component} from "react";
import "../BaseCloud/index.less"
import "./../common/index.less"
class MIM extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };
    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
    render() {
        return (
            <div className="cloud_conten">
                <div className="banner mim">
                    <div className="container">
                        <h2>虚拟矿山</h2>
                        <div className="content">
                            基于MIM技术和VR/AR技术，实现项目的三维交付和运营维护，提升用户体验。
                        </div>
                        <a href="">即将上线</a>
                    </div>
                </div>
                <div className="product">
                    <h2>AR（增强现实）技术应用——智慧图纸</h2>
                    <div className="p_content">
                        <p>智慧图纸APP基于MIM技术和AR技术研发。扫描对应二维码或者图纸后，叠加出三维模型图，可以对其进行旋转、缩放等全方位查看。工程材料、工程设备、方案描述、安装位置、施工要求等全部工程信息都可以随意调取查看，实现图纸承载信息的无限扩充。
                            此外，智慧图纸还能够进行信息检索，施工中经常用到的设计施工规范、可视化交底等可以随时查看。</p>
                        <p className="p_img"><img src={require("../../img/16.jpg")}/></p>
                    </div>
                    <h2>MR（混合现实）技术应用——远程技术指导</h2>
                    <div className="p_content">
                        <p>成果形式 HoloMine APP（安装在HoloLens上）</p>
                        <p>利用混合现实头显设备Microsoft HoloLens，将3D模型、实时数据等与物理实景相融合，并可将图像分享给其他用户，可用于辅助三维设计、远程技术指导等。</p>
                        <p className="p_img"><img src={require("../../img/18.jpg")}/></p>
                    </div>
                    <h2>VR（混合现实）技术应用——技术培训与方案优化</h2>
                    <div className="p_content">
                        <p>将虚拟现实技术与地质空间管理技术融入矿山设计中，建设矿山设计虚拟展现系统，在项目开工前就全面真
                            实的了解建成后的状况；并以矿山虚拟现实系统为基础建设矿山三维管控系统。</p>
                        <p>将设计的三维模型快速转为VR模型，通过身临其境的感受，查看设计成果，发现问题并改进。例如设计一个硐室，仅从平面图上看有些问题体会不深
                            ，戴上VR头盔，通过真实感受，能发现尺寸、布置等方面存在的问题。</p>
                        <p className="p_img"><img src={require("../../img/17.jpg")}/></p>
                    </div>
                </div>
            </div>
        )
    }
};
export default MIM;