import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import "./user.less"
import "./../common/index.less"
import Footer from "../../components/footer/index";
import {Avatar, Icon, Pagination, Select, Modal, Popconfirm, message, Dropdown, Menu} from "antd";
import TOOLS from "../../assets/tools/tools";

function showTotal(total) {
    return `Total ${total} items`;
}

const {Option} = Select;

function handleChange(value) {
    console.log(`selected ${value}`);
}

class UserSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible1: false,
            isShow: true
        }
    }

    componentWillMount() {
        TOOLS.get("user/is_logined/").then(res => {
            if (res.status === 200) {

                TOOLS.get("user/get_userinfo/").then(res => {
                    if (res.status === 200) {

                    }
                })
            }
        })
    }

    componentDidMount() {

    }

    confirm(e) {
        message.success('删除成功！');
    }

    cancel(e) {
        //message.error('Click on No');
    }


    showModal1(e) {
        if (e === 1) {
            this.setState({
                visible1: true,
                isShow: true
            });
        } else {
            this.setState({
                visible1: true,
                isShow: false
            });
        }
    }

    handleCancel1() {
        this.setState({
            visible1: false,
        });
    }
    goUser(id){
        this.props.history.push("/userxq?id=" + id);
    }
    render() {
        const {isShow} = this.state
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
                    <div className='list-item'>
                        <div className='l-title'>
                            <div className="t-title">
                                <b>用户信息</b>
                                <span>成员权限<Icon type="question-circle" theme='outlined'/></span>
                            </div>
                            <div className="t-right"></div>
                        </div>
                        <div className='t-left'>
                            <ul className='lists'>
                                <li>
                                    <div className='l-left' onClick={e => this.goUser("id")}>
                                        <div className='l-Avatar'>明</div>
                                        <div>
                                            <span>小明</span>
                                            <p>12345678@enfi.com.cn</p>
                                        </div>
                                    </div>
                                    <div className='l-right'>
                                        管理员
                                        <span onClick={e => this.showModal1(1)} className='right1'><img
                                            src={require("../../img/set.png")} alt=""/></span>
                                        <span className='right2' onClick={e => this.showModal1(2)}><img
                                            src={require("../../img/help.png")}
                                            alt=""/></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='l-left'>
                                        <div className='l-Avatar'>明</div>
                                        <div>
                                            <span>小明</span>
                                            <p>12345678@enfi.com.cn</p>
                                        </div>
                                    </div>
                                    <div className='l-right'>
                                        未授权
                                        <span onClick={e => this.showModal1()} className='right1'><img
                                            src={require("../../img/set.png")} alt=""/></span>
                                        <span className='right2'><img src={require("../../img/help.png")}
                                                                      alt=""/></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='l-left'>
                                        <div className='l-Avatar'>明</div>
                                        <div>
                                            <span>小明</span>
                                            <p>12345678@enfi.com.cn</p>
                                        </div>
                                    </div>
                                    <div className='l-right'>
                                        管理员
                                        <span className='right1'><img src={require("../../img/set.png")} alt=""/></span>
                                        <span className='right2'><img src={require("../../img/help.png")}
                                                                      alt=""/></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='l-left'>
                                        <div className='l-Avatar'>明</div>
                                        <div>
                                            <span>小明</span>
                                            <p>12345678@enfi.com.cn</p>
                                        </div>
                                    </div>
                                    <div className='l-right'>
                                        管理员
                                        <span className='right1'><img src={require("../../img/set.png")} alt=""/></span>
                                        <span className='right2'><img src={require("../../img/help.png")}
                                                                      alt=""/></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='l-left'>
                                        <div className='l-Avatar'>明</div>
                                        <div>
                                            <span>小明</span>
                                            <p>12345678@enfi.com.cn</p>
                                        </div>
                                    </div>
                                    <div className='l-right'>
                                        管理员
                                        <span className='right1'><img src={require("../../img/set.png")} alt=""/></span>
                                        <span className='right2'><img src={require("../../img/help.png")}
                                                                      alt=""/></span>
                                    </div>
                                </li>
                                <li>
                                    <div className='l-left'>
                                        <div className='l-Avatar'>明</div>
                                        <div>
                                            <span>小明</span>
                                            <p>12345678@enfi.com.cn</p>
                                        </div>
                                    </div>
                                    <div className='l-right'>
                                        管理员
                                        <span className='right1'><img src={require("../../img/set.png")} alt=""/></span>
                                        <span className='right2'><img src={require("../../img/help.png")}
                                                                      alt=""/></span>
                                    </div>
                                </li>
                            </ul>
                            <Pagination total={50} showSizeChanger showQuickJumper/>
                        </div>
                    </div>
                </div>
                <Footer/>
                <Modal
                    visible={this.state.visible1}
                    onCancel={e => this.handleCancel1()}
                    width='600px'
                    footer={[]}
                >
                    <div className="szqx" style={{display: isShow ? "block" : "none"}}>
                        <div className='l-left' onClick={e => this.picClick()}>
                            <div className='l-Avatar'>明</div>
                            <div>
                                <span>小明</span>
                                <p>12345678@enfi.com.cn</p>
                            </div>
                        </div>
                        <div className='setgl'>
                            设为管理员：<Select
                            mode="multiple"
                            style={{width: '60%'}}
                            placeholder="Please select"
                            defaultValue={['china']}
                            onChange={handleChange}
                        >
                            <Option value="china" label="China">
                                China (中国)
                            </Option>
                            <Option value="usa" label="USA">
                                USA (美国)
                            </Option>
                            <Option value="japan" label="Japan">
                                Japan (日本)
                            </Option>
                            <Option value="koean" label="Koean">
                                Koean (韩国)
                            </Option>
                        </Select>
                        </div>
                        <div className='m-bottom'>
                            <Popconfirm
                                title="删除用户后该用户将会彻底删除，是否确认进行删除？"
                                onConfirm={this.confirm}
                                onCancel={this.cancel}
                                okText="确定"
                                cancelText="取消"
                            >
                            <span className='del'><img
                                src={require("../../img/del.png")} alt=""/>删除</span>
                            </Popconfirm>
                            <button>保存</button>
                        </div>
                    </div>
                    <div className="ckxx" style={{display: isShow ? "none" : "block"}}>
                        <div className='l-left' onClick={e => this.picClick()}>
                            <div className='l-Avatar'>明</div>
                            <div>
                                <span>小明<b>&bull;</b><i>开启</i></span>
                                <p>{'12345678901'.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')}</p>
                            </div>
                            <p className='zcsj'>注册时间：2019-08-01</p>
                        </div>
                        <div className='mr'>
                            <p>实名认证：<span className='wc'>已完成</span></p>
                            <p>绑定邮箱：<span>12345678@enfi.com.cn</span>
                                <Popconfirm
                                    title="删除用户后该用户将会彻底删除，是否确认进行删除？"
                                    onConfirm={this.confirm}
                                    onCancel={this.cancel}
                                    okText="确定"
                                    cancelText="取消"
                                >
                            <span className='del'><img
                                src={require("../../img/del.png")} alt=""/></span>
                                </Popconfirm>
                            </p>
                        </div>
                    </div>
                </Modal>
            </div>

        )
    }


};
export default UserSet;