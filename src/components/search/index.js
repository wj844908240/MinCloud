import React, {Component} from "react";
import TOOLS from "../../assets/tools/tools";
import {message} from 'antd';
message.config({
    top: 400,
    duration: 1,
});
export default class Search extends Component{
    search() {
        let self=this
        let content = TOOLS.trim(self.refs.search_text.value);
        if (content) {
            TOOLS.storage.set("Keyword",content);
            let Addr=window.location.pathname;
            if(Addr==="/container/searchList"){
                window.location.reload();
            }else {
                self.props.history.push("/container/searchList");
            }
        } else {
            message.warning('请输入查询内容！')
        }
    }
    onkeydown(event) {
        let e = event ? event : (window.event ? window.event : null);
        if (e.keyCode === 13) {
            this.search();
        }
    }
    render(){
        return(
            <div className="search_test">
                <input ref="search_text"
                       type="text"
                       className="s_word"
                       onKeyDown={this.onkeydown.bind(this)}
                       defaultValue={this.props.keyWord} placeholder={this.props.placeholder}/>
                <span className="search_btn" onClick={this.search.bind(this)}></span>
            </div>
        )
    }
}