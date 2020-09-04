import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
import "./../common/index.less"
const UMT2017 = [
    { "author": "Morrison, D", "title": "Meeting the productivity challenge below 2.5 kilometres", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2ZdKHbLr2MZt3PF" },
    { "author": "Potvin, Y", "title": "The need for new technology to optimise the engineering design of ground support systems in underground mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/HGYrmDWYk7StKMX" },
    { "author": "Brändle, R; Rorem, E; Luis, R; Fischer, G", "title": "Full-scale dynamic tests of a ground support system using high-tensile strength chain-link mesh in El Teniente mine, Chile", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/B6sgey59gJTjDrA" },
    { "author": "Snell, G; Kuley, E; Milne, D", "title": "A laboratory-based approach to assess rockbolt behaviour in shear", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/AEsFHEp6zrJBaBY" },
    { "author": "Rispin, M; Kleven, OB; Dimmock, R; Myrdal, R", "title": "Shotcrete: early strength and re-entry revisited – practices and technology", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jgJD5APiBtDtrH4" },
    { "author": "Kothe, T", "title": "TamCrete structural support liner – a rapid polymeric structural support lining", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yGKd9QNopgR9AXG" },
    { "author": "Chang, S-H; Choi, S-W; Lee, C; Kang, T-H; Kim, J; Choi, M-S", "title": "Performance comparison between thin spray-on liners with different compositions", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LgHC8CtcxcYHifH" },
    { "author": "Acuña, EI; Allen, C", "title": "Ventilation control system implementation and energy consumption reduction at Totten Mine with Level 4 Tagging and future plans", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TtBHXWHPijQHWWd" },
    { "author": "Acuña, EI; Dobson, A", "title": "Results of the return air raise silencer system upgrade at Totten Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4jyGaygg4LkETtT" },
    { "author": "Harris, W; Kadiayi, AK; Macdonald, K; Witow, D", "title": "Environmental discharge criteria and dispersion estimation for mine ventilation exhaust stacks", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZgSj8CXE9tNyoZB" },
    { "author": "Millar, DL", "title": "A reverse Brayton cycle mine refrigeration system", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/GMZr2NQtjsWrDLb" },
    { "author": "Cluff, DL; Foster, PJ", "title": "Advances in cryogenic chilling technology for deep mines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Wrid4wfZJn8QEBF" },
    { "author": "Zhang, H; Hauta, R; Fava, L", "title": "Mine schedule optimisation with ventilation constraints: a case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/fAgtyeLwLYroCpM" },
    { "author": "Saeidi, N; Romero, A; Fava, L; Allen, C", "title": "Simulation of large-scale thermal storage in fragmented rock modelled as a discretised porous medium – application to the Natural Heat Exchange Area at Creighton Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LrYkytoNJJCx85d" },
    { "author": "Álvarez, RA; Acuña, EI", "title": "Ventilation and fire door coverage solution at the Chuquicamata underground mine project", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FYYH7Ld92AoKZQ2" },
    { "author": "San Martin, YH; Hurtado, JP; Vargas, JP; Acuña, EI", "title": "Rapid selection strategies for tunnel development auxiliary ventilation systems", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WZwAK63zcwyjTeD" },
    { "author": "Reyes, G; Hurtado, JP; Vargas, JP; Acuña, EI", "title": "Computational fluid dynamic study of primary parallel fan stations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/nJsyBGXbpi4XCe6" },
    { "author": "Carusone, O; Hudyma, M", "title": "Variations in apparent stress and energy index as indicators of stress and yielding around excavations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/NQ365pEoXqAeWL7" },
    { "author": "Woodward, KR; Tierney, SR", "title": "Seismic hazard estimation using databases with bimodal frequency–magnitude behaviour", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gZ5zgnsZxnXAoj4" },
    { "author": "de Beer, W; Jalbout, A; Riyanto, E; Ginting, A; Sullivan, M; Collins, DS", "title": "The design, optimisation, and use of the seismic system at the deep and high-stress block cave Deep Mill Level Zone mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yZeZgQM3J65wyPz" },
    { "author": "Rebuli, DB", "title": "Correlating seismic wave velocity measurements with mining activities at Williams Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/iMedaJ3NeXRm6Fs" },
    { "author": "Wang, X; Cai, M", "title": "Numerical analysis of ground motion in a South African mine using SPECFEM3D", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/DiTqcMgym8s3Xkm" },
    { "author": "Abolfazlzadeh, Y; Penhall, SL; McKinnon, SD", "title": "Statistical analysis of the outlier events from seismic stress inversion", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/K2ndWtcRrfr6TZC" },
    { "author": "Ferguson, GA; Didyk, M; Zenteno, LF; San Martin, JF; Fowell, RJ", "title": "Cave mining design methodology for use in challenging geomechanics environments", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/B7fFtnBbTRkrXer" },
    { "author": "Suzuki Morales, K; Suorineni, FT", "title": "Using numerical modelling to represent parameters affecting cave mining", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/dHabAYcHJanp9Q5" },
    { "author": "Nezhadshahmohammad, F; Khodayari, F; Pourrahimian, Y", "title": "Draw rate optimisation in block cave production scheduling using mathematical programming", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2cSqq7QngpsM4zQ" },
    { "author": "Malaki, S; Khodayari, F; Pourrahimian, Y; Liu, WV", "title": "An application of mathematical programming and sequential Gaussian simulation for block cave production scheduling", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CdKZM56jskjKnCE" },
    { "author": "Ugarte, E; Pourrahimian, Y; Boisvert, JB", "title": "Determination of optimum drawpoint layout in block caving using sequential Gaussian simulation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/NXKxAfP4428eB5q" },
    { "author": "Lee, C; Gu, F", "title": "Co-disposal of waste rock with backfill", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/eMRgxy5gs7L8MZb" },
    { "author": "Hane, I; Belem, T; Benzaazoua, M; Maqsoud, A", "title": "Laboratory investigation into the compressive strength of cemented paste tailings aggregate fills", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/bawz9PDsDmagoQi" },
    { "author": "Koupouli, NJF; Belem, T; Rivard, P", "title": "Shear strength between cemented paste backfill and natural rock surface replicas", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/eGX8BX6xgymrQNQ" },
    { "author": "Turichshev, A; Cotesta, L; Brummer, R; Beauvais, M", "title": "Estimation of fill strength requirements using bonded particle modelling for mining under cemented rockfill", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/bPFpqD9cDFz5tm8" },
    { "author": "Yang, PY; Li, L", "title": "Numerical and limit equilibrium stability analyses of cemented mine backfill upon vertical exposure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4pHdZ2kfajzBAk4" },
    { "author": "Benecke, N", "title": "iDeepMon – intelligent deep mine shaft inspection and monitoring", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Fz6ZRd4N7BWyE27" },
    { "author": "Azhari, F; Kiely, S; Sennersten, C; Lindley, C; Matuszak, M; Hogwood, S", "title": "A comparison of sensors for underground void mapping by unmanned aerial vehicles", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/8JQ7iQp4S8or4QR" },
    { "author": "Cecchetti, M; Rossi, M; Coppi, F; Bicci, A; Coli, N; Boldrini, N; Preston, C", "title": "A novel radar-based system for underground mine wall stability monitoring", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/kXZsB28iWSmEx5P" },
    { "author": "Rodriguez, G", "title": "Underground versatile laser scanning solution", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/sT6Lt7MWnWGK54t" },
    { "author": "Pak, M; Preston, RP; Groccia, C; Taylor, J", "title": "Conventional and advanced borehole investigation methods for inaccessible underground voids", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/SrRZCHnkogb8QXw" },
    { "author": "Ahmed, SN; Gagnon, JD, Makhdoom, MN; Naeem, R; Wang, J", "title": "New methods and equipment for three-dimensional laser scanning, mapping and profiling underground mine cavities", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gxCGMHTf4TKbxsk" },
    { "author": "Siren, T; Hakala, M; Perras, MA", "title": "Reliable in situ rock stress measurement from the excavation surface", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CYb27fjaGRms4R2" },
    { "author": "Goodfellow, SD; Simser, B; Drielsma, C; Gerrie, V", "title": "In situ stress estimation using acoustic televiewer data", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/x3HMRoDdYAeKL6K" },
    { "author": "Maybee, B; Yana, J", "title": "Using the single index model to create a short-term mine plan", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4TRbMZaAGpTWQLQ" },
    { "author": "Cai, SJ; Lyu, WS; Wu, D; Yang, P", "title": "Mining method optimisation of Bayi gold mine based on the value engineering principle", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zdwdzjHSPYexqzR" },
    { "author": "Salamanca, JM; Rodriguez-Diaz, OO; Fernández, AA; Niño-Merchan, JJ; Rojas, B", "title": "Modernisation of the underground coal mining sector in Colombia – a proposal from the academy", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/f8dM3qaRCEKpP5J" },
    { "author": "Whittier, M; Hauta, R; Fava, L", "title": "Robust mine schedule optimisation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Rwz5wFcjjLQJxBA" },
    { "author": "Hauta, R; Whittier, M; Fava, L", "title": "Application of the GeoSequencing Module to ensure optimised underground mine schedules with reduced geotechnical risk", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/c6LxH9Li7geWegW" },
    { "author": "Napa-García, GF; Navarro Torres, VF", "title": "Applicability of failure strain for the stability evaluation of square pillars in room and pillar mining", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/rEJ8oEZJ5AMrnjX" },
    { "author": "Kukkonen, S", "title": "Energy consumption analysis of battery electric vehicles in underground environments", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/pWeDECEzNDM6g8C" },
    { "author": "Lyle, RR", "title": "Considerations for large-diameter raiseboring", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/JEq64CnXNerGaWS" },
    { "author": "Preston, RP; Roy, J", "title": "Use of unmanned aerial vehicles to supplement conventional investigation methods for underground open void stability and mitigation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/E6iKWGPQQDR6qQT" },
    { "author": "Ferreira, N", "title": "Improving production data quality in underground operations", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/XwDsfoHfxymBTQY" },
    { "author": "Baines, J; Bell, T; Grigg, N", "title": "Underground mineral processing – Gekko Systems modular Python", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/k63M54JmsRenGdy" },
    { "author": "Choi, S-W; Lee, C; Ha, T; Kang, T-H; Chang, S-H", "title": "Endurance performance of conical picks with hardfacing for improving wear resistance", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/izFjqyBJs747tSb" },
    { "author": "Firmanulhaq, SA; Kamarea, J; Hasan, R; Putra, F; Salim, F", "title": "Lessons learnt from egress drift excavation through a minor pillar in an extraction level, Deep Ore Zone mine, Freeport Indonesia, Papua", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/H3HaZsH4j3FJnaP" },
    { "author": "Lee, D-K", "title": "Evaluation of the optimum conditions for a local ventilation system in connection with the mine ventilation network", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/MMzLr2xdTWiP6Ma" },
    { "author": "Salamanca, JM; Rodríguez, HE; Moreno, MM", "title": "Design and construction of a prototype for acidity level control in coal mining liquid effluents", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qtZ7pXRyF4bCzyA" },
    { "author": "Shelswell, KJ; Labrecque, PO", "title": "Discrete simulations modelling the impact of operator numbers and truck availability on haulage fleet productivity", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WyWYGip8o82yjpo" },
    { "author": "Sotoudeh, F; Kakaie, R; Ataei, M", "title": "Development of a computer program for underground mine stope optimisation using a heuristic algorithm", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2AiALsDWycGAPe6" },
    { "author": "Freire, GR; Cota, RF", "title": "Capture of images in inaccessible areas in an underground mine using an unmanned aerial vehicle", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ARCbkWse5nxMAZ9" }
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
                    <img src={require("../../img/UMT2017_Banner.jpg")} alt=""/>
                </div>
                <div className='conton'>
                    <p>

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
                                HYLW(UMT2017)
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