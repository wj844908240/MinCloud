import axios from "axios";
import cookie from 'react-cookies'
const TOOLS = {};

TOOLS.LINK = {
    local: "",
    Url: "http://www.miningcloud.com.cn/api/v1/",
    //Url: "http://172.18.1.111:8000/api/v1/",
};
TOOLS.storage = {
    get: (id) => {
        return window.localStorage.getItem(id) || {};
    },
    set: (id, val) => {
        window.localStorage.setItem(id, val);
    },
    del: (id) => {
        window.localStorage.removeItem(id);
    }
};
function getCookie(name){ 
    var cookieValue = null;
    if (document.cookie && document.cookie != '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].replace(/(^\s*)|(\s*$)/g, "");
            if (cookie.substring(0, name.length + 1) == (name + '=')) { 
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;                    
            }                
        }            
    }            
    return cookieValue;        
}
let headers = {
    'X-CSRFToken': getCookie('csrftoken'),
    'tokenCode':cookie.load('user_token')
};
//封装axios的get方法
TOOLS.get = (url, param, urlType = "Url") => {
    return new Promise((resolve, reject) => {
        let relUrl = TOOLS.LINK[ urlType ] + url;
        axios.get(relUrl,{
            headers: headers,
            params: param
        }).then(res => {
            if (res.request.readyState === 4 && (res.status === 200 || res.status === 304 || res.status === 201)) {
                resolve(res)
            }
        })
        .catch(err => {
            /*if (err.response.status == 504||err.response.status == 404) {
                message.warning('服务器被吃了⊙﹏⊙∥');
            } else if (err.response.status == 403) {
                message.warning('权限不足,请联系管理员!');
            }else {
                message.warning('未知错误!');
            }
            if (error.response) {
              console.log("1",error.response.data);
              if(error.response.data.error_desc!==""){
                message.warning(error.response.data.error_desc)
              }else{
                message.warning("注册失败,请检查电话或者邮箱是否被注册！")
              }
              console.log("2",error.response.status);
            } else if (error.request) {
              console.log("4",error.request);
            } else {
              console.log('Error', error.message);
            }*/
            return resolve(err);
        })
    });
};
//封装axios的post方法
TOOLS.post = (url, param, urlType = "Url") => {
    return new Promise((resolve, reject) => {
        let relUrl = TOOLS.LINK[ urlType ] + url;
        axios.post(relUrl, param,{
            headers: headers
        })
        .then(res => {
            //&& (res.status === 200|| res.status === 401 || res.status === 403 || res.status === 304 || res.status === 201)
            if (res.request.readyState === 4 ) {
                resolve(res)
            }
        })
        .catch(err => {
            return reject(err)
        })
    });
};
//封装delete请求
TOOLS.delete = (url, param, urlType = "Url") => {
    return new Promise((resolve, reject) => {
        let relUrl = TOOLS.LINK[ urlType ] + url;
        axios.delete(relUrl, param,{
            headers: headers
        })
        .then(res => {
            if (res.request.readyState === 4 && (res.status === 200 || res.status === 304)) {
                resolve(res)
            }
        })
        .catch(err => {
            return reject(err)
        })
    })
};
//封装put请求
TOOLS.put = (url, param, urlType = "Url") => {
    return new Promise((resolve, reject) => {
        let relUrl = TOOLS.LINK[ urlType ] + url;
        axios.put(relUrl, param,{
            headers: headers
        })
        .then(res => {
            if (res.request.readyState === 4 && (res.status === 200 || res.status === 304 || res.status === 201)) {
                resolve(res)
            }
        })
        .catch(err => {
            reject(err)
        })
    })
};
//封装axios的all方法
TOOLS.all = (reqArr) => {
    return new Promise((resolve, reject) => {
        axios.all(reqArr).then((responesArr) => {
            resolve(responesArr)
        }).catch(err => {
            reject(err)
        })
    })
};

//去掉字符串左右空格
TOOLS.trim = (str) => {
    return str.replace(/(^\s*)|(\s*$)/g, "");
};


TOOLS.getQueryString = (name) => {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
};
/* 封装ajax函数
 * @param {string}opt.type http连接的方式，包括POST和GET两种方式
 * @param {string}opt.url 发送请求的url
 * @param {boolean}opt.async 是否为异步请求，true为异步的，false为同步的
 * @param {object}opt.data 发送的参数，格式为对象类型
 * @param {function}opt.success ajax发送并接收成功调用的回调函数
 */
 
export default TOOLS;