import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
import "./../common/index.less"
const Caving = [
    {
        "author": "Campbell, R; Banda, H; Fajar, J; Brannon C",
        "title": "Optimising for success at the Grasberg Block Cave",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/P6CmJ2moaLnNJGH"
    },
    {
        "author": "Cuello D; Newcombe G",
        "title": "Key geotechnical knowledge and practical mine planning guidelines in deep, high-stress, hard rock conditions for block and panel cave mining",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jskY73rdanYjXWo"
    },
    {
        "author": "Stegman C; Van As A; Peebles E",
        "title": "Past learnings focusinnovative solutions to future cave mining",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xMNLBN9QEKfdjRM"
    },
    {
        "author": "Shea NA; Sinclair RW; Welsh TM",
        "title": "Safely re-openinga collapsed extraction level drive in a resource-limited environment",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/mGx8jxddHRFgRWa"
    },
    {
        "author": "Lewis PA; Clark LM; Rowles SJ; Auld CP; Petryshen CM; Elderkin AP",
        "title": "Sublevel retreat mining in the subarctic: acase study of the Diavik Diamond Mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5RN84AgYYcPcHpA"
    },
    {
        "author": "Jakubec J; Lagacé D; Boggis B; Clark LM; Lewis PA",
        "title": "Underground mining at Ekati and Diavik diamond mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/JeBSad7bakt4Cg9"
    },
    {
        "author": "Diering T; Ngidi SN; Bezuidenhout JJ; Paetzold HD",
        "title": "Palabora Lift 1 block cave: understanding the grade behaviour",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ktBXL5jjPCcJYJ2"
    },
    {
        "author": "Shelswell KJ; Labrecque PO; Morrison DM",
        "title": "Increasing productive capacityin block caving mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/fSGjNWoNfD28GmB"
    },
    {
        "author": "Moss A; Klein B; Nadolski S",
        "title": "Cave to mill: improving value of caving operations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nqeAMGZBNR3bMyn"
    },
    {
        "author": "Nadolski S; Klein B; JRHart C; Moss A; Elmo D",
        "title": "An approach to evaluatingblock and panel caveprojects for sensor-based sorting applications",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jnbnXjSmqPYSeeD"
    },
    {
        "author": "Henning MG",
        "title": "Grade control and segregation at New Gold’s New Afton block cave operation, Kamloops, British Columbia",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qJ9QK58HZCGy9YJ"
    },
    {
        "author": "Hebert Y; Sharrock G",
        "title": "Three-dimensional simulation of cave initiation, propagation and surface subsidence using a coupled finite difference–cellular automata solution",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/tMERn48f9PEdAQY"
    },
    {
        "author": "Sainsbury B; Sainsbury D; Carroll D",
        "title": "Back-analysis of PC1 cave propagation and subsidence behaviourat the Cadia East mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qwmzP4SLN5S5k6r"
    },
    {
        "author": "Cumming-Potvin D;Wesseloo J; Jacobsz SW; Kearsley E",
        "title": "A re-evaluation of the conceptual model of caving mechanics",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/8H2tbrYTamX5CZP"
    },
    {
        "author": "Cumming-Potvin D; Wesseloo J; Pierce ME; Garza-Cruz T; Bouzeran L; Jacobsz SW; Kearsley E",
        "title": "Numerical simulations of a centrifuge modelof caving",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2Mc6xtMgEGsLoCy"
    },
    {
        "author": "Bahrani N; Kaiser PK; Corkum A",
        "title": "Suggested methods for estimationofconfined strength of heterogeneous(defected)rocks",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CNc8pde3q3xN5gL"
    },
    {
        "author": "Ghaychi Afrouz S; Westman EC",
        "title": "Review and simulation of passive seismic tomography in block cave mining",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ro6mBi4HSp8Lzcg"
    },
    {
        "author": "Castro R; Cuello D",
        "title": "Hang-up analysis and modelling for Cadia East PC1-S1 and PC2-S1",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/EewLcTnfdeHMfPc"
    },
    {
        "author": "Arndt S; Bui T; Diering T; Austen I; Hocking R",
        "title": "Integrated simulation and optimisation tools for production scheduling using finite element analysiscaving geomechanics simulation coupled with 3D cellular automata",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xXSNeyMmrWWX5q6"
    },
    {
        "author": "Munkhchuluun M; Elmo D; Nadolski S; Moss A; Klein B",
        "title": "Presence of natural fracture as an indicator of operational difficulty for cave operations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZZyTbEQ877nTeiS"
    },
    {
        "author": "Dorador L; Eberhardt E; Elmo D",
        "title": "Influence of rock mass veining and non-persistent joints on secondary fragmentation during block caving",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Lax3JyyyGFwCX3M"
    },
    {
        "author": "Diering T; Breed F",
        "title": "Footprint Finder tool for sublevel caving",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/e37aRrjHePi9Xdb"
    },
    {
        "author": "Fuenzalida MA; Pierce ME; Katsaga  T",
        "title": "REBOP–FLAC3D hybrid approach to cave modelling",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wg9NxYNsS5sfMEA"
    },
    {
        "author": "Castro R; Arancibia L; Guzman D; Henriquez JP",
        "title": "Experiments and simulation of gravity flow in block cavingthrough FlowSim",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jN2aQ2ejceaMm6x"
    },
    {
        "author": "Parsons J; Hamilton D; Ludwicki C ",
        "title": "Non-vertical cave and dilution modelling at New Gold's New Afton Mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/YwcWLFM7gQBxYe5"
    },
    {
        "author": "Thompson RJ; Malekzehtab H",
        "title": "Underground roadway design considerations for efficient autonomous hauling",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yyqMQtsjZGFDDjZ"
    },
    {
        "author": "Hormazabal E; Alvarez R; Russo A; Acevedo D",
        "title": "Influence of the undercut height on the behaviour of pillars at the extraction level in block and panel caving operations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WcHEFfcDnQ8nM2z"
    },
    {
        "author": "Noriega R; Pourrahimian Y; Victor WL",
        "title": "Optimisation of the undercut level elevation in block caving mines using a mathematical programming framework",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/RotX2EBmdgeXH3W"
    },
    {
        "author": "Beard D; Brannon C",
        "title": "Grasberg Block Cave mine: cave planning and undercut sequencing",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nqcs9B5QA8C3J9m"
    },
    {
        "author": "Morrison D; Webb R; Akerman A; Parsons H",
        "title": "Mine design impact on operating and capital costs",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zmLziRi6qqMMdDw"
    },
    {
        "author": "Paredes P; Leaño T; Jauriat L",
        "title": "Chuquicamata underground mine design: the simplification of the ore handling system of Lift 1",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wy2LWYaZzADSeER"
    },
    {
        "author": "Cortes D; Martínez Y; Silva M",
        "title": "Maximising resource utilisation in scheduling of underground mining works with multiple faces",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/R2EWDcTz4yba5Q9"
    },
    {
        "author": "Fowke S; Groeneveld B",
        "title": "Overview of mine scheduling for Oyu Tolgoi Underground Project",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FMpBsZPKxP2ej2d"
    },
    {
        "author": "Crook K; Prince F",
        "title": "Development planning for the Oyu Tolgoi panel cave mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/iKwG8Ekp9G9aM4A"
    },
    {
        "author": "Arancibia M; Soto F",
        "title": "Developing projects using CaveLogicTM",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ffko65dcpKKa4sB"
    },
    {
        "author": "Hocking R; Balog G; Ormerod T; Pearce H",
        "title": "Early cave management at the Carrapateena sublevel cave",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2yc26QEYWs28JAW"
    },
    {
        "author": "Quinteiro C",
        "title": "Design of a new layout for sublevel caving at depth",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Ae54TMsdBYKZ4HZ"
    },
    {
        "author": "Campbell AD",
        "title": "Full-scale experiments to measure the effect of crosscut height on recovery in sublevel cave mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/cQ5Gc8M3HAzs49m"
    },
    {
        "author": "Campbell AD",
        "title": "Effects of blast ring burden and explosive density on fragmentation and ore recovery in sublevel cave mines",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/AtwsCLztREj7rx5"
    },
    {
        "author": "Ross IT",
        "title": "Benchmarking and its application for caving projects",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FjMoSYMjyEpxGgG"
    },
    {
        "author": "Ferguson GA; Cuello D; Gandara P; Potvin Y; Roja E",
        "title": "Strategy for research and development in the cave mining industry",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qgzsaoS53yyEwRJ"
    },
    {
        "author": "McKinnon SD; Ferguson GA",
        "title": "The role of research in cave mining",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/kXseTpm35dpECnP"
    },
    {
        "author": "Morrison DM; Drylie V; Labrecque PO",
        "title": "A systems approach to mining innovation",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/kqNdWHFrT9GGN95"
    },
    {
        "author": "Chester C; Cuello D; Basson G",
        "title": "Development and implementation of the Short Term Activity Tracker and Mine Control Trigger Response System",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xxaYFgpJAyqAny6"
    },
    {
        "author": "Meyer S; Doolan J; Chester C; Basson G",
        "title": "Rapid assessment of the spatial extent of strong ground motion in mines –ShakeMap approach",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/r297tyB4JQAk7xm"
    },
    {
        "author": "Beer W de; Smith-Boughner L; Viegas G; Bosman K; Angus  D",
        "title": "Towards physics-based hazard assessment tools for developing blanket re-entry rules",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/aMmAbJeGyBBRNHL"
    },
    {
        "author": "Lynch R; Meyer S;        Lötter E; Lett J",
        "title": "Tracking cave shape development with microseismic data",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qjMLFPpddMwdwMR"
    },
    {
        "author": "Brown LG; Hudyma MR",
        "title": "Identifying a migrating stress front using apparent stress for an unplanned rock mass cave",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/P7gftzp5YTqJgtY"
    },
    {
        "author": "Viegas G; Bosman K; Angus D; Beer W de; Urbanci T",
        "title": "Mapping cave front growth utilising the collective behaviour of seismicity and velocity fields",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qiBfXJDYxGF5Xct"
    },
    {
        "author": "Hopkins M; Rimmelin R; Landon A",
        "title": "Leinster cave seismic risk management: ablock cave solution",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/XoxaLP7P3tZfzSo"
    },
    {
        "author": "Esterhuizen HCJ",
        "title": "Controlling the effects of stress and seismicity in a sublevel caving operation",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/EqjgmtjRtCkejkS"
    },
    {
        "author": "Woods MJ; Poulter ME; King RG",
        "title": "Progression and management of seismic hazard through the life of Telfer sublevel cave",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/285sJg2kkPp9mcj"
    },
    {
        "author": "Malovichko D; Cuello D; Rojas E",
        "title": "Analysis of damaging seismic event on 24 December 2011 in the Pilar Norte sector of El Teniente mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/D3EesRxLHx2xx2W"
    },
    {
        "author": "Jonsson K; Martinsson  J",
        "title": "Evaluating the effect on seismicity of a hydraulic fracturing trial using Bayesian data analysis",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZCM9jqYxgmyB5NE"
    },
    {
        "author": "Mäkitaavola K; Stöckel B-M; Savilahti T; Sjöberg J; Dudley J; McParland MA; Morin  R",
        "title": "InSAR as a practical tool to monitor and understand large-scale mining-induced ground deformations in a caving environment",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/iPbJ787qtCpGR88"
    },
    {
        "author": "Davies AGL; Hamilton DB; Clayton MA",
        "title": "Understanding and managing surface subsidence at New Gold's New Afton block cave operation",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/rDgtoGsdFWt6bDB"
    },
    {
        "author": "Clayton MA; Dugie M; LeRiche A; McKane C; Davie AGL",
        "title": "Development of a monitoring network for surface subsidence at New Gold's New Afton block cave operation",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5WaxmnNspx4Asgk"
    },
    {
        "author": "Falorni G; Conte S Del; Bellotti F; Colombo D",
        "title": "InSAR monitoring of subsidence induced by underground mining operations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/btFDmtigbHS5sk3"
    },
    {
        "author": "Wilson ML; Hout GJ Van; Dean FF",
        "title": "Testing the suitability of radio frequency identification cattle tags for tracking block cave progression",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/JmKYFH2exQBxnMs"
    },
    {
        "author": "Hadjigeorgiou J; Tomasone P",
        "title": "Characterising the behaviour of rockboltsbased on insitu pull tests",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/m5NdjiktLxPtaPm"
    },
    {
        "author": "Karampinos E; Baek B; Hadjigeorgiou J",
        "title": "Discrete element modelling of a laboratory static test on welded wire mesh",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wiJLo4qnw3bTRRE"
    },
    {
        "author": "Knox G; Berghorst A; Bruin P de",
        "title": "An empirical comparison between new and existing laboratory-based dynamic sample configurations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/762nqXkSgDHCFRC"
    },
    {
        "author": "Erismann F; Lindlar B; Munoz C; Hansson M; Erlangga R",
        "title": "Rapid mine development using efficient in-cycle shotcrete",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/rmpdHtkMgmBeAAj"
    },
    {
        "author": "Marambio E; Vallejos JA; Burgos L; Gonzalez C; Castro L; Saure JP; Urzúa J",
        "title": "Numerical modelling of dynamic testing for rock reinforcement used in underground excavations",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gkxKfg8n6Skn2xf"
    },
    {
        "author": "Savage E; Moorcroft T; Talu S",
        "title": "Using a structured data management system to improve mine development efficiencies",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FtxALSQxPFmafw6"
    },
    {
        "author": "Llewelyn K; Jakubec J; Goddard R; Stenhouse P",
        "title": "Geotechnical data collection and approach to modelling for the Cukaru Peki deposit",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zHdfdXHRREWbQpL"
    },
    {
        "author": "Cortolezzis DM; Hudyma MR",
        "title": "Application of sequential spatial clustering and fractal dimension to caving seismic event parameters of time, distance, and intensity",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/k2iaSiEzK5iDF9e"
    },
    {
        "author": "Khodayari F; Pourrahimian Y; Ben-Awuah E",
        "title": "Application of mathematical modellingfor draw control under material flow uncertainty",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/rJKNeKji5c6KWSF"
    },
    {
        "author": "Mercier J-P; As A van; Carlson C; Tumur-Ochir B",
        "title": "Microseismic monitoring of the Oyu Tolgoi Hugo North Lift 1",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/reXE5SNi7adERAn"
    },
    {
        "author": "Tishkov M",
        "title": "Evaluation of caving as a mining method for the Udachnaya underground diamond mine project",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LYst6F4gdQMrqET"
    }
]

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
                    <img src={require("../../img/Caving 2018.jpg")} alt=""/>
                </div>
                <div className='conton'>
                    <p>
                        The Fourth International Symposium on Block and Sublevel Caving was held in Vancouver, 15–17 October 2018. The Caving 2018 Symposium peer-reviewed proceedings contain 66 papers representing 13 countries globally.
                        The key themes covered by these papers include:<br/>
                        • Draw control / material flow<br/>
                        • Caving mechanics<br/>
                        • Ground support<br/>
                        • Geotechnical monitoring<br/>
                        • Fragmentation<br/>
                        • Mine equipment<br/>
                        • Numerical modelling<br/>
                        • Planning and design of caving mines<br/>
                        • Preconditioning<br/>
                        • Seismic monitoring of caving mines<br/>
                        • Subsidence<br/>
                        • Caving mine closure<br/>
                    </p>

                   {/* <div className='table-list'>
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
                                HYLW(Caving)
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