import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import {Avatar, Icon, Tabs, Cascader, Alert, Dropdown, Menu, DatePicker} from 'antd';
import moment from 'moment';
import "./user.less"
import "./../common/index.less"
import Footer from "../../components/footer/index";
import TOOLS from "../../assets/tools/tools";
const {TabPane} = Tabs;

const dateFormat = 'YYYY/MM/DD';
const options = [
    {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
            {
                value: 'hangzhou',
                label: 'Hangzhou',
                children: [
                    {
                        value: 'xihu',
                        label: 'West Lake',
                    },
                ],
            },
        ],
    },
    {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
            {
                value: 'nanjing',
                label: 'Nanjing',
                children: [
                    {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                    },
                ],
            },
        ],
    },
];
function onChange(value) {
    console.log(value);
}
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        this.callback = this.callback.bind(this)
    }

    componentWillMount() {
        TOOLS.get("user/is_logined/").then(res => {
            if (res.status === 200) {

            }
        })
    }

    componentDidMount() {

    }

    callback(key) {
        //console.log(key);
    }

    changeRevision() {
        TOOLS.get("user/get_userinfo/").then(res => {
            if (res.status === 200) {

            }
        })
    }
    goToRz(id){
        this.props.history.push("/userrz?id=" + id);
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
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="账号信息" key="1">
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
                                            <div><span className="xg" onClick={e=>this.goToRz(1)}>修改认证</span><Icon type="edit" theme="filled"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='r-box'>
                                        <div className='r-left'>个人信息</div>
                                        <div className='r-right'>
                                            <div>名族：<input type="text"/>族</div>
                                            <div>生日：<DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} /></div>
                                        </div>
                                    </div>
                                    <div className='r-box'>
                                        <div className='r-left'>企业信息</div>
                                        <div className='r-right qyxx'>
                                            <div><span>企业名称：</span><input type="text"/></div>
                                            <div><span>联系电话：</span><input type="text"/></div>
                                            <div><span>地址：</span><input type="text"/></div>
                                            <div><span>网址：</span><input type="text"/></div>
                                        </div>
                                        <div className='zyyws'>
                                            <span>主营业务：</span>
                                            <textarea rows="6" cols="31"></textarea>
                                        </div>
                                    </div>
                                    <div className='r-box'>
                                        <div className='r-left'>联系地址</div>
                                        <div className='r-right qyxx lxdz'>
                                            <div className='setgl'>
                                                <span>所在地区：</span>
                                                <Cascader options={options} onChange={onChange} placeholder="请选择城市" />
                                            </div>
                                            <br/>
                                            <div><span>详细地址：</span><input type="text"/></div>
                                            <div><span>联系电话：</span><input type="text"/></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="安全设置" key="2">
                            <div className='tab2'>
                                <div className='t-left'>
                                    <ul>
                                        <li><span>登录密码</span>安全性高的密码可以使账号更安全。建议您定期更换密码，密码包含字母、符合或数字至少两项且长度超过6位</li>
                                        <li><span>手机绑定</span>您已绑定手机181****3339[您的手机号可以用于找回密码等操作]</li>
                                        {/*<li><span>邮箱绑定</span>您未绑定邮箱</li>
                                        <li><span>微信绑定</span>您未绑定微信，绑定微信可用于便捷登录</li>
                                        <li><span>注销账号</span>如果您不再使用此账号，可以将其注销。账号成功注销后，其下所有服务、数据及隐私信息将会被删除并将无法恢复</li>*/}
                                    </ul>
                                </div>
                                <div className='t-right'>
                                    <ul>
                                        <li><img src={require("../../img/uok.png")} alt=''/><span>已设置</span><Icon
                                            type="edit" theme="filled"/></li>
                                        <li><img src={require("../../img/uok.png")} alt=''/><span>已设置</span><Icon
                                            type="edit" theme="filled"/></li>
                                        {/*<li><img src={require("../../img/warring.png")} alt=''/><span>未设置</span><Icon
                                            type="edit" theme="filled"/></li>
                                        <li><img src={require("../../img/warring.png")} alt=''/><span>未设置</span><Icon
                                            type="edit" theme="filled"/></li>
                                        <li><span>注销</span></li>*/}
                                    </ul>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tab="实名认证" key="3">
                            <div className='sprz'>
                                <div className="user-top">
                                    <div className='u-left'>
                                        <img src={require("../../img/demand.jpg")} alt=''/>
                                    </div>
                                    <div className='u-right'>
                                        <p><span>认证状态：</span>已认证<img src={require("../../img/uok.png")}
                                                                     alt=''/><b
                                            onClick={e => this.changeRevision()}>修改认证</b>
                                        </p>
                                        <p><span>用户类型：</span>个人用户/企业用户</p>
                                        <p><span>姓名/企业名称：</span>张*某/中国**公司</p>
                                        <p><span>证件号码/组织机构代码：</span>11***9X</p>
                                    </div>
                                </div>
                                <Alert message="消息：已通过认证        2019-05-06" type="success"/>
                                <Alert message="消息：未通过认证，原因：未知      2019-05-06" type="error"/>
                            </div>
                        </TabPane>
                    </Tabs>
                </div>
                <Footer/>
            </div>

        )
    }
}
export default User;
