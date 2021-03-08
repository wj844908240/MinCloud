import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import {Avatar, Icon,  Dropdown, Menu, DatePicker} from 'antd';
import "./user.less"
import "./../common/index.less"
import Footer from "../../components/footer/index";
import TOOLS from "../../assets/tools/tools";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
        TOOLS.get("user/is_logined/").then(res => {
            if (res.status === 200) {

            }
        })
    }

    componentDidMount() {

    }
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="/login">
                        退出
                    </a>
                </Menu.Item>
            </Menu>
        )
        return (
            <div id="user">
                <header>
                    <div className='container'>
                        <Link to={"/"}><img src={require("../../img/LOGO@2x.png")} alt=''/></Link>
                        <div className='h-right'>
                            <ul>
                                <Dropdown overlay={menu} placement="bottomLeft">
                                    <li>
                                        <Avatar size={64} icon="user"/><span>用户名</span>
                                    </li>
                                </Dropdown>
                                <li><Icon type="question-circle" theme='outlined'/><span>帮助</span></li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className="content container">
                    <div className='yhx'>
                        <div className="user-top">
                            <div className='u-left'>
                                <img src={require("../../img/demand.jpg")} alt=''/>
                            </div>
                            <div className='u-right'>
                                <p><span>用户名：</span>Jay.Liu</p>
                                <p><span>用户类型：</span>个人用户</p>
                                <p><span>手机号码：</span>{'12345678901'.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}
                                </p>
                                {/* <p><span>账号ID：</span>56487569235410</p>*/}
                            </div>
                        </div>
                        <div className="xgrz">
                            <p></p>
                            <div className='r-box'>
                                <div className='r-left'>认证信息（个人）:已认证<img src={require("../../img/uyrz.png")}
                                                                         alt=''/></div>
                                <div className='r-right'>
                                    <div><b>*</b>姓名：特*普</div>
                                    <div>性别：男</div>
                                    <div><b>*</b>证件号码： 11***45</div>
                                    <div>
                                        {/*<span className="xg" onClick={e=>this.goToRz(1)}>修改认证</span>
                                        <Icon type="edit" theme="filled"/>*/}
                                    </div>
                                </div>
                            </div>
                            <div className='r-box'>
                                <div className='r-left'>个人信息</div>
                                <div className='r-right'>
                                    <div>名族：汉族</div>
                                    <div>生日： 2015/01/01</div>
                                </div>
                            </div>
                            <div className='r-box'>
                                <div className='r-left'>企业信息</div>
                                <div className='r-right qyxx'>
                                    <div><span>企业名称：</span>中国无色矿业有限公司</div>
                                    <div><span>联系电话：</span>020-65448556</div>
                                    <div><span>地址：</span>四川省成都市武侯区人民路4号</div>
                                    <div><span>网址：</span>www.baidu.com</div>
                                </div>
                                <div className='zyyws zyyws1'>
                                    <span>主营业务：</span>
                                    这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，
                                    这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，
                                    这是一段很长的描述，这是一段很长的描述，这是一段很长的描述，这是一段很长的描述。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default User;
