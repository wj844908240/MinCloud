import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
import "./../common/index.less"

const Paste = [
    {
        "author": "Corriveau D ",
        "title": "Canada's Oil Sands Innovation Alliance: leading innovation in oil sands tailings",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZgBjwppMLRjGeY6"
    },
    {
        "author": "Legge KR",
        "title": "An economy and ecosystem symbiosis: barrier systems for water conservation and pollution control",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/7tsFoj6o8JQPBwe"
    },
    {
        "author": "Priscu C",
        "title": "Tailings dam safety: going beyond technical",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/pMS2QS4a9bcT2cH"
    },
    {
        "author": "Liefferink M",
        "title": "Selected extracts from South Africa's environmental legislation:challenges with the management of gold tailings within the Witwatersrand gold fields and case studies",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/dLxarAifPTHnBcz"
    },
    {
        "author": "Ulrich B",
        "title": "Practical thoughts regarding filtered tailings",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jepnNn2cqNkJzrg"
    },
    {
        "author": "Reid D",
        "title": "Estimating the in situ state of a thickened tailings deposit",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ikWBEJJ9r5ArCQf"
    },
    {
        "author": "Roshdieh A; Seddon K; Mohebbi M; Shakeri K; Nosrati M",
        "title": "Dareh Alou thickened tailings management scheme: design considerations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TKFMj9qK58JdApg"
    },
    {
        "author": "Copeland AM; Teixeira JM",
        "title": "Design of coarse tailings and dry ash disposal facilitie",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/aey8zJnNdrxesgx"
    },
    {
        "author": "Carneiro A; Fourie AB",
        "title": "An integrated approach to cost comparisons of different tailings management options",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xyfKGd9grs9eknF"
    },
    {
        "author": "Palmer J",
        "title": "Operational strategies to improve paste plant performance",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4MHs57ptQXJYnFS"
    },
    {
        "author": "Moshi P; DeVries J; Hogg C; Lane C",
        "title": "Dry stacking of high-grade flake graphite tailings:Tanzania",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/sA2P5BRPB42D7TD"
    },
    {
        "author": "Spagnoli G; Clement F; DilnesaBZ; Cao FH;Feng P",
        "title": "A new waterproofing membrane for tailings ponds",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/T7qRcXmXEn8daCb"
    },
    {
        "author": "Moon N; Parker M; Boshoff HJJ; Clohan D",
        "title": "Advances in non-Newtonian dambreak studies",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/iTrc65NjW5WwwoM"
    },
    {
        "author": "Cooper RA",
        "title": "Tailings properties affecting the stacking angle of cyclone underflow",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/NwYXgkyK6XXjZjq"
    },
    {
        "author": "Thomas A; Edwards SJ; Engels J; McCormack H; Hopkins V; Holley R",
        "title": "Earth observation data and satellite InSAR for the remote monitoring of tailings storage facilities:acase study of CadiaMine, Australia",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/QLwrWSjmfrzAX8r"
    },
    {
        "author": "Navarro L; Aravena G; Engels J; Turne J",
        "title": "Satellite bathymetry for the monitoring of supernatant water volumes within tailings storage facilities",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yHmjsw8m7fcqtwf"
    },
    {
        "author": "Gomes MFM; Filho JGM; Pinheiro JA; Crystal C",
        "title": "Disposal of tailings and the mining industry perspective: a case study of the Cuiabá Mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/aWtaAbg7AQK9xpY"
    },
    {
        "author": "McPhail GI; Ugaz R; Garcia F",
        "title": "Practical tailings slurry dewatering and tailings management strategies for small and medium mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CXzT7yzpE5mCASP"
    },
    {
        "author": "Hahn J",
        "title": "Tailings dewatering with increased filtration rates and lowest filter cake moisture for filtered tailings stacking",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/pKam6oY8j3nY28k"
    },
    {
        "author": "Kalumba D; Mudenge ST",
        "title": "Review of the potential role of electrokinetics technology in tailings dewatering and minerals recovery",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/57Z4ejgfgALkg6c"
    },
    {
        "author": "Shang JQ; Xu Y",
        "title": "Electrokinetic dewatering of mine tailings from hydrometallurgical processes",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5Kt5bWaRiZCfGeB"
    },
    {
        "author": "Torres López C; Catling M; Bellwood J; Boxil L",
        "title": "The effect of preconditioning of tailings prior to inline flocculation and deposition",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WCgaoacLoHMd2aj"
    },
    {
        "author": "Vietti AJ; Rabie SL; Ntshabel K",
        "title": "Process water conditioning to improve slurry dewatering",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/XedzqEewzpnTTmC"
    },
    {
        "author": "Verdoorn F; Gibbs K",
        "title": "Conversion of a conventional tailings storage facility to a perimeter discharge central decant configuration using Nalco WaterShed polymer",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FZ7cPL6WSZxNPcL"
    },
    {
        "author": "Yuan XS; Li H; Zhou J; Zhao L",
        "title": "Advancements of fluid fine tailings treatment technologies through fundamental research",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Tdw6Aj9mwSXAcfi"
    },
    {
        "author": "Wisdom T",
        "title": "Maintaining high availability and low operational costs for filtered tailings facilities",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/eW3tiqb3Q4FqCNg"
    },
    {
        "author": "Wimmler W; Whitton S; Wimmle L",
        "title": "The underdog mechanical alternative for tailings dewatering:the screw press",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/3YLY9CGb3Qs8XRF"
    },
    {
        "author": "Johnson J; Webb L",
        "title": "Paste thickener benefits for soda ash: liquor recovery, mine backfill and surface stack",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/i76aD3en4CENsyk"
    },
    {
        "author": "Klug R; Schwar N",
        "title": "Dewatering tailings: rapid waterrecovery by use of centrifuges",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/znynCSqRALZqGMR"
    },
    {
        "author": "Brown R; Smith N; Carmichael P",
        "title": "One year of paste operations at Jabal Sayid, Saudi Arabia",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ANGfwsK5aoQFap4"
    },
    {
        "author": "Grobler H; Chatziefstratiou V; Mousli O; Yumlu M",
        "title": "Design of high-strength backfill for a drift-and-fill mining method at Olympias Mine, Greece",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/dd8W3ygeEMesiLj"
    },
    {
        "author": "Steward NR; Allen G; Tiedermann K",
        "title": "Paste backfill reticulation optimisation using high shear mixing at DeGrussa Mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Q9kwrcRb9ygwmKJ"
    },
    {
        "author": "Guo LJ; Li WC; Pan A; Liu GS; Xu WY",
        "title": "Use of reactive MgO-activated slag in high sulphide-bearing lead-zinc cemented backfill",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/RjPxWJPSFfwn5m3"
    },
    {
        "author": "Salvoldi BG; der Spuy B van; Wilson S",
        "title": "Optimisation of cemented aggregate backfillat New Luika Gold Mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qZjgNKwkyXKFao7"
    },
    {
        "author": "Liu GS; Yang XC; Pan A; Guo LJ; Li L",
        "title": "Required strength evaluation model and its application forvertically exposed backfill: inspired byMitchell's physical model test",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ydrE9T7yNqFtFqy"
    },
    {
        "author": "Beukes JA; Vlok ML; Khosa FE",
        "title": "Rehabilitation of the Hillendale Mine's residue storage facility",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yAG5ox5krKr65yj"
    },
    {
        "author": "Cocks BLD",
        "title": "Mine fines dewatering trials using amphibious vehicles at the Tronox KZN Sands Fairbreeze Mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2KrAWoJTs5dCHaj"
    },
    {
        "author": "Chryss AG; Mönch A; Constanti-Carey K",
        "title": "Online rheology monitoring of a thickener underflow",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/HTTRZMq6tiAF9eH"
    },
    {
        "author": "Desriviers P; Quintero A; Primeau P",
        "title": "Effects of the mineralogical composition and particle size distribution on the rheology of gold and copper tailings",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CsDFCSTcsPZGeHo"
    },
    {
        "author": "Crawford J; Bessett N",
        "title": "Development of centrifugal slurry pumps in tailings disposal and comparison with positive displacement pumps",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xxaYs527LWYGpxG"
    },
    {
        "author": "Fraser C; Goosen P",
        "title": "Evaluation of a non-Newtonian two-layer model for high concentration suspensions",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/RKWidCFqcJjDtS9"
    },
    {
        "author": "Griffiths M",
        "title": "Underground paste fill reticulation management of system flow-loss",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/3g3ELMJQWbmyPQF"
    },
    {
        "author": "Waters R",
        "title": "Severe service valves for applications with high percentages of solids",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/t2pFkHW7bNPHH8k"
    },
    {
        "author": "Morcombe AS",
        "title": "Paste reticulation blockage: an Australiancase study",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nXYxjiNpXHxrmQa"
    },
    {
        "author": "Wu AX; Ruan ZE; Shao YJ; Wang JD; Yin SH; Wang SY; Li CP",
        "title": "Friction losses of cemented unclassified iron tailings slurry based on full-scale pipe-loop test",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/AFNYoaXTCKPyExL"
    }
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
                    <img src={require("../../img/Paste 2019.jpg")} alt=""/>
                </div>
                <div className='conton'>
                    <p>
                        22nd International Conference on Paste, Thickened and Filtered Tailings
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
                                HYLW(Paste)
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