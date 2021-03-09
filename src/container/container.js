import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "../container/about";
import Help from "../container/help/index";
import HelpList from "../container/help/helpList";
import News from "../container/news/news";
import NewsList from "../container/news/news_detai";
import Rotocol from "../container/user/register_rotocol";
import Model from "../container/library/model";
import Know from "../container/library/know";
import ModelList from "../container/librarylist/index";
import Headernav from "../components/HeaderNav/index";
import DetailHeader from "../components/header/index";
import Footer from "../components/footer/index";
import PagesearchList from "../container/searchlist";
import Supply from "../container/demand/supply";
import Commodity from "../container/demand/commodity";
import Technical from "../container/demand/technical";
import ServerDetails from "../container/demanddetails/server";
import ProductDetails from "../container/demanddetails/product";
import Company from "../container/demand/company";
import CompanyList from "../container/demanddetails/companylist";
import Could from "../container/could/could";
import Compute from "../container/could/compute";
import Onsoft from "../container/could/onsoft";
import BaseCloud from "../container/BaseCloud/BaseCloud";
import MinData from "../container/MinData/MinData";
import Acquisite from "../container/remotely/acquisite";
import Diagnosis from "../container/remotely/diagnosis";
import Remotely from "../container/remotely/remotely";
import MinconsultDesign from "../container/min/consultDesign";
import Mincoordinate from "../container/min/coordinate";
import Min3DMine from "../container/min/3DMine";
import MIMvam from "../container/min/vam";
import Minindex from "../container/min/index";
import MIM from "../container/min/min";
import Virtual from "../container/min/Virtual";
import License from "../container/License/index";
import File from "../container/library/file";
import Caving from "../container/library/Caving";
import Paste from "../container/library/Paste";
import UMT2017 from "../container/library/UMT2017";
import GroundSupport2019 from "../container/library/GroundSupport2019";
import MC2019 from "../container/library/MC2019";
import MGR2019 from "../container/library/MGR2019";
import zsk from "../container/library/index";
import Intelligentindex from "../container/Intelligent/index";
import Intelligence from "../container/Intelligence/index";
import Decision from "../container/decision/index";

class CustomLinkExample extends Component {
    constructor(props, context) {
        super(props);
        this.state = {
            user_name: "",
            isHOC: true
        };
    }
    render() {
        const { match } = this.props;
        return (
            <Router>
                <div className="body_content">
                    <DetailHeader history={this.props.history}/>
                    <Headernav match={match} history={this.props.history}/>
                    <Route path={`${match.url}/about`} component={About}/>
                    <Route path={`${match.url}/help`} component={Help}/>
                    <Route path={`${match.url}/HelpList`} component={HelpList}/>
                    <Route path={`${match.url}/new`} component={News}/>
                    <Route path={`${match.url}/newslist`} component={NewsList}/>
                    <Route path={`${match.url}/model`} component={Model}/>
                    <Route path={`${match.url}/know`} component={Know}/>
                    <Route path={`${match.url}/modellist`} component={ModelList}/>
                    <Route path={`${match.url}/searchList`} component={PagesearchList}/>
                    <Route path={`${match.url}/supply`} component={Supply}/>
                    <Route path={`${match.url}/commodity`} component={Commodity}/>
                    <Route path={`${match.url}/technical`} component={Technical}/>
                    <Route path={`${match.url}/productdetails`} component={ProductDetails}/>
                    <Route path={`${match.url}/serverdetails`} component={ServerDetails}/>
                    <Route path={`${match.url}/company`} component={Company}/>
                    <Route path={`${match.url}/companylist`} component={CompanyList}/>
                    <Route path={`${match.url}/register_rotocol`} component={Rotocol}/>
                    <Route path={`${match.url}/could`} component={Could}/>
                    <Route path={`${match.url}/compute`} component={Compute}/>
                    <Route path={`${match.url}/onsoft`} component={Onsoft}/>
                    <Route path={`${match.url}/BaseCloud`} component={BaseCloud}/>
                    <Route path={`${match.url}/MinData`} component={MinData}/>
                    <Route path={`${match.url}/diagnosis`} component={Diagnosis}/>
                    <Route path={`${match.url}/acquisite`} component={Acquisite}/>
                    <Route path={`${match.url}/remotely`} component={Remotely}/>
                    <Route path={`${match.url}/MIM`} component={MIM}/>
                    <Route path={`${match.url}/consultDesign`} component={MinconsultDesign}/> 
                    <Route path={`${match.url}/coordinate`} component={Mincoordinate}/>
                    <Route path={`${match.url}/min3DMine`} component={Min3DMine}/>
                    <Route path={`${match.url}/minvam`} component={MIMvam}/>
                    <Route path={`${match.url}/minindex`} component={Minindex}/>
                    <Route path={`${match.url}/Virtual`} component={Virtual}/>
                    <Route path={`${match.url}/License`} component={License}/>
                    <Route path={`${match.url}/File`} component={File}/>
                    <Route path={`${match.url}/Caving`} component={Caving}/>
                    <Route path={`${match.url}/Paste`} component={Paste}/>
                    <Route path={`${match.url}/UMT2017`} component={UMT2017}/>
                    <Route path={`${match.url}/GroundSupport2019`} component={GroundSupport2019}/>
                    <Route path={`${match.url}/MC2019`} component={MC2019}/>
                    <Route path={`${match.url}/MGR2019`} component={MGR2019}/>
                    <Route path={`${match.url}/zsk`} component={zsk}/>
                    <Route path={`${match.url}/Intelligentindex`} component={Intelligentindex}/>
                    <Route path={`${match.url}/Intelligence`} component={Intelligence}/>
                    <Route path={`${match.url}/decision`} component={Decision}/>
                    <Footer/>
                </div>
            </Router>
        )
    }
}
export default CustomLinkExample

