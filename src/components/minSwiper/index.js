import React, { Component } from "react";
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.css';
import "./index.less"
// import 'swiper/css/swiper.min.css';
class Minswiper extends Component {
    constructor(props){
        super(props);
        this.toUrl = this.toUrl.bind(this);//手动绑定
    }
    componentDidMount() {
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container', {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
          });
    }
    toUrl(e){
        this.props.history.push(e);
    } 
    render() {
        let sorce = [{ src: 'platform.png', text: 'MIM三维设计平台', link:'/container/consultDesign'}, { src: 'platform2.png', text: 'MIM协同平台',link:'/container/coordinate' }, { src: 'platform3.png', text: 'MIM三维管控平台',link:'/container/min3DMine' }]
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {sorce.map((item, index) => <div className="swiper-slide" key={index} style={{ objectFit: 'cover', width: '400px'}}>
                        <div className="content" onClick={e=> this.toUrl(item.link)} >
                            <img style={{ objectFit: 'cover', width: '300px', height: '300px' }} src={require(`../../img/${item.src}`)}></img><div className="textdescript">{item.text}</div>
                        </div>
                    </div>)}

                </div>
                {/* <!-- 如果需要分页器 --> */}
                <div className="swiper-pagination"></div>

                {/* <!-- 如果需要导航按钮 --> */}
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}

                {/* <!-- 如果需要滚动条 --> */}
                {/* <div className="swiper-scrollbar"></div> */}
            </div>
        )
    }

};
export default Minswiper;