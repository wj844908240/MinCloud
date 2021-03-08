import React, {Component} from "react";
import TOOLS from "../../assets/tools/tools";
import "./index.less"
import Headernav from "../../components/HeaderNav/index";
import DetailHeader from "../../components/header/index";
import Footer from "../../components/footer/index";
import "./../common/index.less"
class noMatch extends Component {
    Link() {
        window.history.go(-1);
    }
    render() {
        const { match } = this.props;
        return (
            <div className="body_content">
                <DetailHeader history={this.props.history}></DetailHeader>
                <Headernav match={match}></Headernav>
                <div className="page_search">
                    <div className="f_img"></div>
                    <div className="f_content">
                        <h2>咦~ 页面出问题了噢</h2>
                        <button onClick={this.Link.bind(this)}>返回上一页</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
            )
    }
}

export default noMatch;