import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
import "./../common/index.less"

const GroundSupport2019 =  [
    { "author": "Board, M", "title": "Ground support from a corporate perspective", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2g2k6wMS3TpbDin" },
    { "author": "Andrews, PG", "title": "Ground support selection rationale: a Gold Fields perspective", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yH7SLzSkFBcXgQi" },
    { "author": "Mercier-Langevin, F", "title": "Ground support: a mine manager’s perspective", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wC4ERzX57qPLdHf" },
    { "author": "Counter, DB", "title": "Laser-based scanning to manage geotechnical risk in deep mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nk5cJWkKpmkPqPz" },
    { "author": "Gelinas, LP; Falmagne, V; Bedard, B; Matte, O", "title": "Advanced geotechnical monitoring technology to assess ground support effectiveness", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/QtqC4WpXNeNErXo" },
    { "author": "Sun, Z; Wu, KT; Kruger, SE; Levesque, D; Gagnon, D; Quenneville, Y; Lacroix, R; Royer, R", "title": "A new paradigm in ground support monitoring through ultrasonic monitoring of clusters of rockbolts", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Xd9tWcAosNnq8eE" },
    { "author": "Cumming-Potvin, D; Potvin, Y; Wesseloo, J; Harris, P; Ho, C; Heinsen Egan, M", "title": "Development of a single-pass detailed damage mapping application", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jysNeEXPJjDbRwN" },
    { "author": "Milne, DM", "title": "Relating measured deformation to support load", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nD3nMjPtKr33BRE" },
    { "author": "Dawn, T", "title": "Technologies of ground support monitoring in block caving operations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Ht9M36KKbnZPGB3" },
    { "author": "Gonzalez, CV; Beltran, R; Henning, J", "title": "Response of a support system to seismic events: case study of Mina Uchucchacua, Peru", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WPnWBGY56nRc63r" },
    { "author": "Falmagne, V; St-Onge, N", "title": "Ground support challenges in arctic mining conditions", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9jqmKayjkrgCRZL" },
    { "author": "Sasseville, G; Grenon, M; Morissette, P", "title": "Assessing the contribution of seismicity to the demand on ground support elements at LaRonde mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/sRY88jpBjrSjq7W" },
    { "author": "Warren, SN; Pakalnis, R; Raffaldi, MJ; Benton, DJ; Sandbak, L; Barnard, CK", "title": "Ground support design for weak rock mass: quantifying time-dependent closure in squeezing ground", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/MpcPLnypfZcCrps" },
    { "author": "Edelbro, C; Brummer, R; Pierce, M; Sandstrom, D; Sjoberg, J", "title": "Raiseboring in difficult rock conditions", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/RsP7rNC4LHTWSgr" },
    { "author": "Roach, W; Rataj, M; Darlington, B", "title": "Development of a new Sandvik ‘little brother’ dynamic rockbolt and the in situ dynamic evaluation of bolts", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Zd3TzA4PQ99fQmp" },
    { "author": "Gaudreau, D", "title": "About the likely performance of ground support systems submitted to dynamic loading", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/GS45XsrSJeKxLrX" },
    { "author": "Knox, G; Berghorst, A", "title": "Dynamic testing: determining the residual dynamic capacity of an axially strained tendon", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TFAC9SSofyCfLQs" },
    { "author": "Brandle, R; Luis Fonseca, R", "title": "Dynamic testing of surface support system", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TwQoygdiCMjcn2a" },
    { "author": "Landry, D; Reimer, E", "title": "Failure mechanisms and ground support observations at Coleman mine, Sudbury Basin", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qHYdwcHNB4iQ3dY" },
    { "author": "Shea, NA", "title": "The evolution and performance of the Henderson Mine’s C-arch shotcrete drawpoint support", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4zS8RkYBDTMdJZS" },
    { "author": "Pritchard, C; Rorem, E; Landry, D; Whitmell, B", "title": "Mechanised installation of rolled high tensile strength steel wire mesh for ground support: Canadian trial observations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/6N8kkR2LBr8Jz5t" },
    { "author": "Schunnesson, H; Shekhar, G; Gustafson, A; Johansson, D", "title": "A review of mining practices for surface support: an international survey", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WnRd9tozGqLGw7r" },
    { "author": "Swan, G; Hedlin, J", "title": "Mining initiative on ground support and equipment: 12 years of accomplishments", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/QTSriG68MCJFzN3" },
    { "author": "Naseri, S; Bahrani, N", "title": "Stability assessment of initial shotcrete lining using two-dimensional continuum numerical modelling", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jjXizWbKFyx9erX" },
    { "author": "Lavoie, T; Andrieux, P; Guido, S; Caumartin, R", "title": "Explicit discrete fracture network numerical analyses of the stability of underground stopes and effects of cable bolt support at Raglan Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/3JZjbP7TpQzPDzj" },
    { "author": "Garza-Cruz, T; Bouzeran, L; Pierce, M; Jalbout, A; Ruest, M", "title": "Evaluation of ground support design at Eleonore Mine via Bonded Block Modelling", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wqpyRNRGx9xXm5p" },
    { "author": "Vallejos, JA; Marambio, E; Marulanda, Y; Burgos, L; Gonzalez, C", "title": "Progress in the numerical modelling of dynamic testing for reinforcement and retaining elements used in underground excavations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/bxnR3edyRjoDJCQ" },
    { "author": "Nguyen, BV; Cai, M; Challagulla, K", "title": "Finite element analysis of the Superbolt under dynamic loading", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/APDDMbi2NK7xjfC" },
    { "author": "Zhang, P; Nordlund, E", "title": "Numerical investigation of dynamic response of a rockbolt under drop testing and simulated seismic loading conditions", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/imJFB9wgN97FRYH" },
    { "author": "Dorion, JP", "title": "Corroded rock support issues: implementation of an investigation and rehabilitation program", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yNSnzMK49KNL8Rx" },
    { "author": "Chambers, AJ; Sunderman, CB; Clark, CC; Powers, MJ", "title": "Analysis of in situ and laboratory corrosion coupons", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/t3rwsgapH3pzTR3" },
    { "author": "Preston, RP; Roy, JM; Bewick, RP", "title": "Rusty bolts: planning for corrosion of ground support in underground mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZmMg3DbQgWfywZ9" },
    { "author": "Chen, H; Kimyon, O; Ramandi, HL; Hebblewhite, B; Manefield, M; Crosky, A; Saydam, S; Kaksonen, AH; Morris, C", "title": "Microbiologically induced cable bolt corrosion in underground coal mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/XXSetBzECCNM2XA" },
    { "author": "Hentrich, N-A; Calderon, DS; Bock, S; Franz, J", "title": "Limitations of standard analytical methods of shaft liner design", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/dZpifK8BDaoZYNR" },
    { "author": "Mejia Camones, LA; Chacon Nunez, C", "title": "Application of the Geological Strength Index in Peruvian underground mines: retrospective 18 years after its implementation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/crSeQqgcqoBe8RL" },
    { "author": "McDonald, AC; McKinnon, SD", "title": "Suppression of tunnel spalling by engineered rock mass damage", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qXSzJSsAjpHNzLf" },
    { "author": "Sewnun, D; Joughin, W; Wanless, M; Mpunzi, P", "title": "The creation and application of a geotechnical block model for an underground mining project", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zRKyHy5MmWT4Dww" },
    { "author": "Potvin, Y; Hadjigeorgiou, J; Wesseloo, J", "title": "Towards optimising ground support systems in underground mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qF4gs3dmXPqJcfw" },
    { "author": "Roberts, T; Faulkner, D", "title": "Polyester resin injection of dynamic resin and cable bolting systems to improve development efficiency", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZHFwNQyF4pQTcfG" },
    { "author": "Coleman, TJ; Neely, DD", "title": "Developments in stiff ground support in deep potash operations at the Vanscoy Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/tojETmo8bgEJWWn" },
    { "author": "Reny, S; Pena Cruz, J; Clements, W", "title": "Development of a new cementitious grout for permafrost conditions", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TqqAraXoDrEi2Ri" },
    { "author": "Yokota, Y; Zhao, Z; Nie, W; Date, K; Iwano, K; Koizumi, Y; Okada, Y", "title": "Development of new deformation-controlled rockbolt: numerical modelling and laboratory verification", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ymCWPNFAeNxxXTE" },
    { "author": "Erismann, F; Hansson, M", "title": "Early strength development of shotcrete for rapid mine development and behaviour under dynamic loads", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/W7BqDRf8zbF86xQ" },
    { "author": "Gibbons, O; Lee, C", "title": "How convincing is the quality of our resin rebar installation? A case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/E4JP3xaYA7cHJZ4" },
    { "author": "Viljoen, BN; Murphy, BA", "title": "Ground support installation quality controls and possible pitfalls: a case study from a critical fall of ground contract rehabilitation project", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/iqnMMtowLA7X4iT" },
    { "author": "Veltin, KG; Preston, RP; Pakula, AL; Kennard, D", "title": "Utilising databases algorithms and three-dimensional visualisation software to optimise ground-control management", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LRe3Yo2KwYWZPXy" }
]
const type = Utils.getUrlParams().type

class File extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    componentWillMount() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;

    }

    render() {
        return (
            <div id="file">
                <div className="top_banner">
                    <img src={require("../../img/GroundSupport2019_banner.jpg")} alt=""/>
                </div>
                <div className='conton'>
                    <p>

                    </p>
                  {/*  <div className='table-list'>
                        <p>会议报告</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <td width="5%">编号</td>
                                <td width="40%">报告人</td>
                                <td width="55%">标题</td>
                            </tr>
                            </thead>
                            <tbody id="productTr">
                            {
                                HYBG()
                            }
                            </tbody>
                        </table>
                    </div>*/}
                    <div className='table-list'>
                        <p>会议论文</p>
                        <table className="table">
                            <thead>
                            <tr>
                                <td width="5%">编号</td>
                                <td width="40%">作者</td>
                                <td width="55%">标题</td>
                                {/*<td width="10%">摘要</td>*/}
                            </tr>
                            </thead>
                            <tbody id="productTr">
                            {
                                HYLW(GroundSupport2019)
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
};
export default File;

const HYLW = (data) => {
    return data.map((item, index) => {
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.author}</td>
            <td><a href={item.previewLink} target="_blank">{item.title}</a></td>
            {/*<td>查看摘要</td>*/}
        </tr>
    })
}
const HYBG = (data) => {
    return data.map((item, index) => {
        return <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.author}</td>
            <td><a href={item.previewLink} target="_blank">{item.title}</a></td>
            {/*<td>查看摘要</td>*/}
        </tr>
    })
}