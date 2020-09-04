import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
const DeepMining2019HYLW = [
    {
        "author": "Malan, D; Jooste, Y",
        "title": "Layout design criteria for deep tabular mines: Quo vadis?",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/aCMYKWer7yj4M5C"
    },
    {
        "author": "Andrews, PG; Butcher, RJ; Ekkerd, J",
        "title": "The geotechnical evolution of deep level mechanised destress mining at South Deep",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gkxzpzrmidMj22Y"
    },
    {
        "author": "Bouzeran, L; Pierce, M; Andrieux, P; Williams, E",
        "title": "Accounting for rock mass heterogeneity and buckling mechanisms in the study of excavation performance in foliated ground at Westwood mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/6CfeczozC6qazcp"
    },
    {
        "author": "McGaughey, J",
        "title": "Artificial intelligence and big data analytics in mining geomechanics",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/s5YkZMYPmsgfmtM"
    },
    {
        "author": "Masethe, RT; Durrheim, R J; Manzi, MSD",
        "title": "The seismic response to mining during the extraction of the Thuthukani shaft pillar, Kloof Operations, South Africa",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5bLAF7tCiLT4N5s"
    },
    {
        "author": "Ladinig, T; Wagner, H; Daborer, A",
        "title": "Effects of stoping activities on tunnel conditions in a deep, hard rock mine in Austria",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FZ5pXEQW8jt95jE"
    },
    {
        "author": "Costa, LCB; Padula, RC; Pimenta, LMV; Pereira, RS; Peterle, DT",
        "title": "Support and reinforcement damage initiation and design adjustments in a deep mine environment Case study: Cuiabá Mine, Minas Gerais, Brazil",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/NL4e3aCS5EyfPyr"
    },
    {
        "author": "Trinh, NQ; Larsen, TE; Molund, S; Nøst, B; Kuhn, A",
        "title": "Numerical modelling of the high rock stress challenges at Rana mine, Norway",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/fANrEixnYfKmZSX"
    },
    {
        "author": "Potvin, Y; Wesseloo, J; Morkel, G; Tierney, S; Woodward, K; Cuello, D",
        "title": "Seismic Risk Management practices in metalliferous mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/F3rn4XRBRpGYjPR"
    },
    {
        "author": "Andrews, PG; Rwodzi, L; Ekkerd, J; Ratshitaka, N",
        "title": "Advanced techniques for the monitoring of pillar and excavation behaviour at a deep level massive mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/HZm4PQnCrwRdYWP"
    },
    {
        "author": "Brändle, R; Fonseca, RL; Hangartner, T",
        "title": "Large scale testing of surface support",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/RkKgXy62BPdJFWA"
    },
    {
        "author": "Crompton, B; Sheppard, J",
        "title": "A practical design approach for an improved resin-anchored tendon",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/c3ZxCNdctSTrtwE"
    },
    {
        "author": "Bierman, IR; Gardner, L; Piper, P",
        "title": "An evaluation of the bond strength of multiple resin bolt and capsule combinations through laboratory testing and applied methodologies ",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/3rHckLdCtGA5YLt"
    },
    {
        "author": "Bray, P; Johnsson, A; Schunnesson, H",
        "title": "Rock reinforcement solutions case study: Malmberget iron ore mine, Sweden ",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2drppXi7X3YeZoK"
    },
    {
        "author": "Darlington, B; Rataj, M; Roach, W",
        "title": "A new method to evaluate dynamic bolts and the development of a new dynamic rock bolt",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/aEZoKwDXd5Wieec"
    },
    {
        "author": "Hagen, SA; Larsen, T; Berghorst, A; Knox, G",
        "title": "Laboratory full-scale rock bolt testing: Analysis of recent results",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nJ7RXW4JWTzqaxx"
    },
    {
        "author": "O'Connor, D; Sertic, T",
        "title": "Development of a remote control rock bolting system for narrow seam hard rock mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zAX968FjWRtQJKB"
    },
    {
        "author": "Zepeda, R; Krstulovic, G",
        "title": "Fracture model for rockburst mitigation based on the strain energy concept",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Si5rdfZLFexiEJB"
    },
    {
        "author": "Bouzeran, L; Pierce,M; Jalbout, A; Ruest, M",
        "title": "Stoping sequence optimisation at Eleonore Mine based on stress analysis through horizon scale numerical modelling",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Zm95wWKLGSjpf2M"
    },
    {
        "author": "Wesseloo, J",
        "title": "Addressing some misconceptions regarding seismic hazard assessment in mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/mAZciexAeTyYxig"
    },
    {
        "author": "Rakumakoe, O",
        "title": "Ideal stope profile to manage seismicity in deep tabular narrow reef mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wHsbtPJsweYAj2N"
    },
    {
        "author": "Sharrock, GB; Chapula, B",
        "title": "Anisotropic rock mass behaviour in large deformation ground at CSA mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/3ej9bKTxRerq3Yo"
    },
    {
        "author": "Jones, E; Sofonia, J; Canales, C; Hrabar, S; Kendoul, F",
        "title": "Advances and applications for automated drones in underground mining operations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/amq8C8x4YenEreT"
    },
    {
        "author": "von Ketelhodt, J; Ligaraba, D; Durrheim, RJ",
        "title": "Analysis of the Gutenberg-Richter b-values of overlapping seismic clusters with application to Cooke 4 gold mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/tFB84wkeL45dntj"
    },
    {
        "author": "Naicker, N",
        "title": "Seismic response to mining the massive ore body at South Deep gold mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Z6t63k2tR3Eq4KJ"
    },
    {
        "author": "van Buren, R; Turner, G; Hird, G",
        "title": "Modern seismic is illuminating the depths",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9Jpw8gwE36xm8rp"
    },
    {
        "author": "Ogasawara, H; Liebenberg, B; Rickenbacher, M; et al",
        "title": "2019 status report: Drilling into seismogenic zones of M2.0–M5.5 earthquakes in South African gold mines (DSeis project)",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/E5pawr4R3MNRksp"
    },
    {
        "author": "Morkel, IG; Wesseloo, J; Potvin, Y",
        "title": "The validity of Es/Ep as a source parameter in mining seismology",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gsff9MTPAFF52wn"
    },
    {
        "author": "Yabe, Y; Abe, S; Ito, T; Ishida, A; et al",
        "title": "In-situ stress around source faults of seismic events in and beneath South African deep gold mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nLyM9wr3QTZWW5q"
    },
    {
        "author": "Morton, E; Villaescusa, E; Thompson, A",
        "title": "Self-similarity in rock fracturing and the behaviour of large-scale faults in the mining environment",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/La39PWK4N4zPom7"
    },
    {
        "author": "Linzer, LM; Hildyard, M W; Spottiswoode, S M; Wesseloo, J",
        "title": "Do stopes contribute to the seismic source?",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/F3qcYpaTiZk7Stw"
    },
    {
        "author": "Birch, DJ; Meyer, S G",
        "title": "Seismic Response to hydraulic fracturing in caving mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/S2G7oPbd2kCw6xb"
    }
]

const MGR2019 = [
    { "author": "Hadjigeorgiou, J", "title": "Understanding, managing and communicating geomechanical mining risk", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZtTdrXB4YrX8jLs" },
    { "author": "Brown, BS", "title": "What are the real risks for tailings facilities?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/mAyYGgXzzkNq7Zw" },
    { "author": "Flores-Gonzalez, G", "title": "Major hazards associated with cave mining: are they manageable?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/mtHQzm9tCRDsgFj" },
    { "author": "Potgieter, GS; Grubb, AB", "title": "Risk-based access control at Mount Isa Copper Operations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4Lp2AJfnfdS58ER" },
    { "author": "Lupo, JF", "title": "Geotechnical risk-informed decision-making in mining", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/F4SpezGLDmnJpy8" },
    { "author": "Porter, M; Lato, M; Quinn, P; Whittall, J", "title": "Challenges with use of risk matrices for geohazard risk management for resource development projects", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/MCg6qro45QicTSX" },
    { "author": "Mishra, R; Kiuru, R; Uotinen, L; Janiszewski, M; Rinne, M", "title": "Combining expert opinion and instrumentation data using Bayesian networks to carry out stope collapse risk assessment", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/YXaa5RtznCN2aGd" },
    { "author": "Atkins, AC; Ritchie, M", "title": "Improving board assurance of technical and operational risks in mining", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ombcCg2jg4MazPF" },
    { "author": "Jele, R; Dunn, MJ", "title": "Economic significance of geotechnical uncertainties in open pit mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wjwe89N89NC3cwZ" },
    { "author": "Hamman, ECF; Venter, J", "title": "Using qualitative risk assessment as a leading indicator for geotechnical risk in mining", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9fMBGfEqfpf4bBs" },
    { "author": "Morgan, JL; Colombo, D; Meloni, F", "title": "InSAR tools for risk assessment over mine assets", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/JdeyoeFcmK844sz" },
    { "author": "Conrad, WJ; Neuwirt, AM", "title": "Using an integrated monitoring platform to communicate geotechnical risk to project stakeholders", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Yoj4ao7QyqbnTqo" },
    { "author": "Tierney, SR; Woodward, KR; Wesseloo, J", "title": "Seismic exclusions and re-entry from a risk perspective", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jW3Kq8iM83C47Dr" },
    { "author": "Venter, J; Hamman, ECF", "title": "A practical safety risk model for monitoring program design", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Nc74dSj5yN9Mw6P" },
    { "author": "Coffey, JP; Plunkett, JD", "title": "A measured risk approach to managing the design and operation of a tailings storage facility", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/YT47XSZ6qeY669X" },
    { "author": "McGaughey, WJ", "title": "Data-driven geotechnical hazard assessment: practice and pitfalls", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/bLTAQCwkazHL6Dc" },
    { "author": "Abolfazlzadeh, Y; Smith-Bougher, L; Anderson, Z; Jalbout, A; Mataseje, A", "title": "Calibration of a seismic hazard assessment tool using velocity fields and geotechnical data", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/L5dYZPkmqQnTQHz" },
    { "author": "Malovichko, DA", "title": "Calibrating and testing of the forecasts of seismic hazard for planned mining sequences", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WgHjn9AwA5DkgtH" },
    { "author": "Vatcher, J; Boskovic, M; Sjoberg, J", "title": "Production-associated risk factors of seismicity in the Kiirunavaara mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/6AACF6yLSeF9Ww7" },
    { "author": "Andrijasevich, J; Basarir, H; Wesseloo, J", "title": "Construction of a damage risk model for footwall drifts", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/crZyQSjWzsHFyq7" },
    { "author": "Gagnon, AG", "title": "Key considerations when developing a risk management framework for tailings facilities", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5pqExs3joJwRR27" },
    { "author": "Hebblewhite, BK", "title": "Geotechnical risk in mining methods and practice: critical issues and pitfalls of risk management", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jiia28cNdXMdy6C" },
    { "author": "Wessels, SDN; Dixon, R", "title": "Managing geotechnical risk in multi-pit operations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/z7DkttiXgscxxEq" },
    { "author": "Lato, M; Quinn, P; Porter, M; Newton, S; Dixon, R; Wessels, SDN; Wessels, L; Sirois, D; Leveque, M", "title": "Geohazard risk management for linear transportation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/tyGfgweeYrygMrG" },
    { "author": "Juldyz, A", "title": "Use of the excavation compliance indicator at the Oyu Tolgoi copper–gold mine, Mongolia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/eYzMARwMiStMsQk" },
    { "author": "Venter, J; Hamman, ECF", "title": "Geotechnical value quantification through real options", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/A3Z8WKXM6i3tFDF" },
    { "author": "Contreras, L-F; Hormazabal, E; Ledezma, R; Arellano, M", "title": "Geotechnical risk analysis for the closure alternatives of the Chuquicamata open pit", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/aTTS2eAtW7tS2D6" },
    { "author": "Dunn, MJ", "title": "Quantifying uncertainty in mining geomechanics design", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2EaYcjDYdBayoPH" },
    { "author": "Brockman, MC; Gosche, KMR; Du Plooy, DJ", "title": "The role of the geotechnical model for rapid integration in managing operational geotechnical risk", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jrM2w7SWyaWF7Wr" },
    { "author": "Coffey, JP; Susic, N", "title": "Getting back to basics: risk fundamentals applied to the geotechnical engineering of tailings storage facilities", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/pe9Z3SCEQP8iEfq" },
    { "author": "Duran, A", "title": "Probabilistic stability analyses for sedimentary deposits", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/insyq3jWk59T62X" },
    { "author": "Kanda, MJ; Stacey, TR", "title": "Review of the practical effectiveness of thin spray-on liners based on information from suppliers and observations from the mining industry", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/K4SzdnoWCM7fymy" },
    { "author": "Narendranathan, S; Cheng, M", "title": "Development of the Mine Geotechnical Risk Index", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2NYNyCAZH2ge5GH" },
    { "author": "Mandisodza, KT; Dunn, MJ", "title": "Geotechnical design and uncertainty in residual soil slopes", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/YWeHg9zQyZp7B5X" },
    { "author": "Whittall, J; Quinn, P; Lato, M; Porter, M; Bowden, B; Drew, J; Croaker, M", "title": "Managing geohazard risk during mineral exploration at remote locations in rugged terrain and tropical environments", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/f5DBQDcDw9nzRCm" },
    { "author": "Woods, MJ; Fitch, S; Doolan, J; Barnett, DS", "title": "A case study: managing decline deformation in an active sublevel caving operation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wTYNxJCC8Dej2Kk" },

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
                    <img src={require("../../img/MGR2019_Banner.jpg")} alt=""/>
                </div>
                <div className='conton'>
                    <p>

                    </p>

                    {/*<div className='table-list'>
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
                                HYBG(DeepMining2019HYBG)
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
                                HYLW(MGR2019)
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