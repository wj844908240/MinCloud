import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom"
import cookie from 'react-cookies'
import "./index.less"
import { Menu, Icon, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import TOOLS from "../../assets/tools/tools";


const SubMenu = Menu.SubMenu;
export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: "" || sessionStorage.getItem("current"),
            userName: "",
            isLogined: false
        };
        this.handleClick = this.handleClick.bind(this);//手动绑定
        this.getMenu = this.getMenu.bind(this);//手动绑定
    }
    componentWillMount() {
        // TOOLS.get("user/is_logined/").then(res => {
        //     if (res.status === 200) {
        //         this.setState({
        //             isLogined: res.data.is_logined
        //         });
        //         TOOLS.get("user/get_userinfo/").then(res => {
        //             if (res.status === 200) {
        //                 this.setState({
        //                     userName: res.data.username
        //                 });
        //             }
        //         })
        //     }
        // })
        if (cookie.load('child_sys_userInfo') && cookie.load('child_sys_userInfo').username) {
            this.setState({
                userName: cookie.load('child_sys_userInfo').username
            });
        }
        if (cookie.load('user_token')) {
            this.setState({
                isLogined: cookie.load('user_token') ? true : false
            });
        }
    }
    componentDidMount() {
        this.getMenu(true);
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
        sessionStorage.setItem("current", e.key);
        this.getMenu(false);
    }
    handClick(e) {
        this.setState({
            current: e.name,
        });
        sessionStorage.setItem("current", "")
        this.props.history.push(e.path);

    }
    LoginClick() {
        const expires = new Date()
        expires.setDate(Date.now() + 60 * 60 * 24 * 7)
        var list = { from: window.location.href }
        cookie.save('user_from', list);
        window.location = 'http://218.249.43.70:8031/';
        // this.setState({
        //     current: "",
        // });
        // sessionStorage.setItem("current", "")
        // this.props.history.push("/login")
    }
    reginClick() {
        const expires = new Date()
        expires.setDate(Date.now() + 60 * 60 * 24 * 7)
        var list = { from: window.location.href }
        cookie.save('user_from', list);
        window.location = 'http://218.249.43.70:8031/register'
        // this.setState({
        //     current: "",
        // });
        // sessionStorage.setItem("current", "")
        // this.props.history.push("/register")
    }
    goUserCenter() {
        window.location = 'http://218.249.43.70:8031/'
        // this.props.history.push("/user")
    }
    outLogin() {
        cookie.remove('user_from');
        TOOLS.get("user/logout").then(data => {
            if (data.status === 200) {
                TOOLS.get("user/is_logined/").then(res => {
                    if (res.status === 200) {
                        this.setState({
                            isLogined: res.data.is_logined
                        });
                    }
                })
            }
        })
    }
    updateState(e) {
        this.getMenu(false);
        this.setState({
            current: e.key,
        });
        sessionStorage.setItem("current", e.key)
    }
    // 获取菜单
    getMenu(ele) {
        let menu = document.getElementsByClassName('faMenu');
        for (let i = 0; i < menu.length; i++) {
            menu[i].getElementsByTagName('a')[0].style.color = '#000';
        }
        for (let i = 0; i < menu.length; i++) {
            if (menu[i].className.indexOf("ant-menu-submenu-active") != -1) {
                menu[i].getElementsByTagName('a')[0].style.color = '#1890ff';
            } else if (menu[i].className.indexOf("ant-menu-submenu-selected") != -1) {
                if (ele) {
                    menu[i].getElementsByTagName('a')[0].style.color = '#1890ff';
                }
            }
        }
    }
    toPage() {
        window.location = 'http://www.miningcloud.com.cn/console/';
    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item className="itemMenu">
                    <span onClick={e => this.reginClick()}>
                        注册用户
                </span>
                </Menu.Item>
            </Menu>
        );
        const menu2 = (
            <Menu>
                <Menu.Item className="itemMenu">
                    <span onClick={e => this.toPage()}>
                        管理控制台
                    </span>
                </Menu.Item>
                {/* <Menu.Item className="itemMenu">
                    <span onClick={e => this.goUserCenter()}>
                        用户中心
                    </span>
                </Menu.Item> */}
                <Menu.Item className="itemMenu">
                    <span onClick={e => this.outLogin()}>
                        退出
                    </span>
                </Menu.Item>
            </Menu>
        );
        return (
            <div id='navbar'>
                <div className="h_left" onClick={e => this.handClick({ name: 'home', path: '/' })}>
                    <img src={require("../../img/newlogo.png")} />
                </div>
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    {/*<Menu.Item key="home"><a href="javascript:void(0)" onClick={e => this.handClick()}>首页</a></Menu.Item>*/}
                    <Menu.Item key="server"><Link to={"/container/BaseCloud"}>基础云服务</Link></Menu.Item>
                    {/*<Menu.Item key="cloud"><Link to={"/container/could"}>软件云服务</Link></Menu.Item>*/}
                    <SubMenu title={<span className="submenu-title-wrapper">软件云服务</span>}>
                        <Menu.Item className="itemMenu" key="cloud:1"><Link to={"/container/compute"}>云超算</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="cloud:2"><Link to='/container/onsoft'>云软件</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu className="faMenu" title={<span className="submenu-title-wrapper" onClick={e => this.updateState({ key: 'model:3' })}><Link to={"/container/zsk"}>矿业库</Link></span>}>
                        {/* <Menu.Item key="model:7"></Menu.Item> */}
                        {/* <Menu.Item className="itemMenu" key="model:1"><Link to={"/container/model"}>模型库</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="model:2"><Link to={"/container/Know"}>知识库</Link></Menu.Item> */}
                        {/* <Menu.Item className="itemMenu" key="model:3"><Link to={"/container/model"}>科技信息</Link></Menu.Item> */}
                        <Menu.Item className="itemMenu" key="model:3"><a href='http://tech.miningcloud.com.cn/' target='_blank'>科技信息</a></Menu.Item>
                        <Menu.Item className="itemMenu" key="model:4"><a href='http://218.249.43.70:8033/' target='_blank'>矿业经济数据</a></Menu.Item>
                        <Menu.Item className="itemMenu" key="model:5"><a href='http://equipment.miningcloud.com.cn' target='_blank'>矿业装备数据</a></Menu.Item>
                        <Menu.Item className="itemMenu" key="model:6"><a href='http://design.miningcloud.com.cn' target='_blank'>矿山设计数据</a></Menu.Item>
                    </SubMenu>
                    {/*<SubMenu title={<span className="submenu-title-wrapper">供需对接</span>}>
                        <Menu.Item key="commodity:1"><Link to={"/container/commodity"}>工业产品</Link></Menu.Item>
                        <Menu.Item key="commodity:2"><Link to={"/container/technical"}>技术服务</Link></Menu.Item>
                        <Menu.Item key="commodity:3"><Link to={"/container/supply"}>需求大厅</Link></Menu.Item>
                        <Menu.Item key="commodity:4"><Link to={"/container/company"}>企业展示</Link></Menu.Item>
                    </SubMenu>*/}
                    <SubMenu className="faMenu" title={<span className="submenu-title-wrapper" onClick={e => this.updateState({ key: 'MI:0' })}><Link to={"/container/Minindex"}>MIM</Link></span>}>
                        <Menu.Item className="itemMenu" key="MI:0"><Link to={"/container/consultDesign"}>MIM咨询设计</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="MI:1"><Link to={"/container/coordinate"}>MIM协同平台</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="MI:2"><Link to={"/container/min3DMine"}>MIM三维可视化平台</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="MI:3"><Link to={"/container/minvam"}>VR/AR/MR</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu title={<span className="submenu-title-wrapper">远程技术服务</span>}>
                        <Menu.Item className="itemMenu" key="MIM:4"><Link to={"/container/acquisite"}>智能数据采集</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="MIM:5"><Link to={"/container/diagnosis"}>远程诊断与大数据服务</Link></Menu.Item>

                    </SubMenu>
                    <SubMenu className="faMenu" title={<span className="submenu-title-wrapper" onClick={e => this.updateState({ key: 'big:1' })}><Link to={"/container/Intelligentindex"}>智能矿山</Link></span>}>
                        {/*<Menu.Item key="big:1"><Link to={"/container/MinData"}>矿业大数据</Link></Menu.Item>*/}
                        <Menu.Item className="itemMenu" key="big:1"><Link to={"/container/Intelligentindex"}>自动化采矿技术</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:2"><Link to={"/container/Intelligentindex"}>有轨运输无人驾驶系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:3"><Link to={"/container/Intelligentindex"}>提升自动化控制系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:4"><Link to={"/container/Intelligentindex"}>智能配电与融合控制系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:5"><Link to={"/container/Intelligentindex"}>充填自动化控制系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:6"><Link to={"/container/Intelligentindex"}>智能排水与泵站无人值守系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:7"><Link to={"/container/Intelligentindex"}>溜破与胶带自动控制无人值守系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:8"><Link to={"/container/Intelligentindex"}>智能按需通风系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:9"><Link to={"/container/Intelligentindex"}>斜坡道智能调度与物流管理系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:10"><Link to={"/container/Intelligentindex"}>井下安全避险六大系统</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:11"><Link to={"/container/Intelligentindex"}>选矿自动化技术</Link></Menu.Item>
                        <Menu.Item className="itemMenu" key="big:12"><Link to={"/container/Intelligentindex"}>尾矿在线智能检测系统</Link></Menu.Item>
                    </SubMenu>

                </Menu>
                {/* <div className="thkyy">
                    <span className="userMsg">
                        {
                            this.state.isLogined === true ?
                                <Dropdown overlay={menu2}>
                                    <span className="login">
                                        {this.state.userName}
                                    </span>
                                </Dropdown>
                                : <Dropdown overlay={menu}>

                                    <span className="login" onClick={e => this.LoginClick()}>
                                        登录
                                    </span>
                                </Dropdown>
                        }
                    </span>
                </div> */}
            </div>
        )
    }
}