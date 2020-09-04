import React, {Component} from "react";
import "./index.less";
class NoData extends Component {
    render() {
        return (
            <div className="page_search">
              <div className="p_img"></div>
              <div className="found_content">
                  <h2>暂无相关内容</h2>
              </div>
            </div>
        )
    }
}

export default NoData;