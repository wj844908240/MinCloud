import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from "axios";
import {ConfigProvider} from 'antd';
import Route from "./components/baseRoute"
import zhCN from 'antd/lib/locale-provider/zh_CN';
import rootRoute from "./route/routes"
import "./App.css"
class App extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // 超时时间
        axios.defaults.timeout = 60000;
        // http请求拦截器
        axios.interceptors.request.use(config => {
            return config
        }, error => {
            return Promise.reject(error)
        });

        // http响应拦截器
        /*axios.interceptors.response.use(data => { // 响应成功关闭loading
            let code = +data.data.code;
            if(code == 0){
                return data
            }else {
                if (code === 2003) {
                    message.warning(data.data.msg);
                    window.location = '/';
                }
                message.warning(data.data.msg);
                return data
            }
        }, error => {
            message.warning("服务器未响应");
            return Promise.reject(error);
        })*/
    }
    componentWillUnmount(){

    }
    render() {
        return (
            <ConfigProvider  locale={zhCN}>
                <Router>
                    <Route path="/" component={rootRoute}/>
                </Router>
            </ConfigProvider >

        );
    }
}

export default App;