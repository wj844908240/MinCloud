import React, { Component } from "react";
import Swiper from 'swiper/js/swiper.js';
import 'swiper/css/swiper.css';
// import 'swiper/css/swiper.min.css';
class Swipers extends Component {
    componentDidMount() {
        //可以加上你需要的条件等，然后生成Swiper对象，
        //一定要检查是不是每次都生成了Swiper对象，否则可能出现不滑动的情况和别的情况等
        new Swiper('.swiper-container', {
            loop: true, // 循环模式选项
            slidesPerView: 5,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            observer: true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents: true,//修改swiper的父元素时，自动初始化swiper
        });
    }
    render() {
                                               
        let sorce =['ABAQUS.png','Anylogic PLE.png','assembly-sta.png','CFD_Post.png','cfx14.png','EDMS.png','fluent.png','hycast.png','hypermesh.png','maya2016.png','measure-sta.png',
        ,'nasa.png','paraview.png','rockbox_dlsm3d.png','vuma3d.png',,'weld_sta_2MvmfLL.png',,'x3d-sta.png']
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {sorce.map((item,index)=> <div className="swiper-slide" key={index} style={{height:'200px',textAlign:'center',lineHeight:'200px'}}><img  style={{objectFit: 'cover',width:'150px',height:'150px'}} src={require(`../../img/${item}`)}></img></div>)}
                </div>
                {/* <!-- 如果需要分页器 --> */}
                {/* <div className="swiper-pagination"></div> */}

                {/* <!-- 如果需要导航按钮 --> */}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>

                {/* <!-- 如果需要滚动条 --> */}
                {/* <div className="swiper-scrollbar"></div> */}
            </div>
        )
    }

};
export default Swipers;