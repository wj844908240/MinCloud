import React, {Component} from "react";
import {BrowserRouter as Router, Link} from "react-router-dom"
import {Avatar, Icon, Upload, message, Dropdown, Menu} from 'antd';
import "./user.less"
import "./../common/index.less"
import Footer from "../../components/footer/index";
import TOOLS from "../../assets/tools/tools";



class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            //文件上传
            fileList: [],
            uploading: false,
            fileDate: {},
        }
        this.handleChange=this.handleChange.bind(this)
    }

    componentWillMount() {
        /*TOOLS.get("user/is_logined/").then(res => {
            if (res.status === 200) {

            }
        })*/
    }

    componentDidMount() {

    }
    handleChange({fileList}) {
        this.setState({
            fileList
        })
    };
    render() {
        const { fileList, fileDate } = this.state;
        const menu = (
            <Menu>
                <Menu.Item>
                    <a rel="noopener noreferrer" href="/login">
                        退出
                    </a>
                </Menu.Item>
            </Menu>
        );
        const uploadButton = (
            <div>
                <Icon type='plus' />
                <div className="ant-upload-text">上传</div>
            </div>
        );

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
                    <div className='yhrz'>
                        <div className="user-top">
                            <div className='u-left'>
                                <h4>用户认证</h4>
                            </div>
                            <div className="yhcon">
                                <div className='u-right'>
                                    <p><span>认证状态：</span>已认证<img src={require("../../img/uok.png")}
                                                                 alt=''/>
                                    </p>
                                    <p><span>用户类型：</span>个人用户/企业用户</p>
                                    <p><span>姓名/企业名称：</span>张*某/中国**公司</p>
                                    <p><span>证件号码/组织机构代码：</span>11***9X</p>
                                    <div className='upzj'>
                                        <span>上传证件：</span>
                                        <Upload
                                            action={TOOLS.LINK.Url + 'up'}
                                            listType="picture-card"
                                            fileList={fileList}
                                            directory={true}
                                            data={fileDate}
                                            onChange={this.handleChange}
                                        >
                                            {fileList.length >= 3 ? null : uploadButton}
                                        </Upload>
                                    </div>
                                    <div className="sl">
                                        <p>用户身份证正面扫描件</p>
                                        <p>如图所示</p>
                                        <img src={require("../../img/sl.png")}
                                             alt=''/>
                                    </div>
                                    <button>发起认证</button>
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
