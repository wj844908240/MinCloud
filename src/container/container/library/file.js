import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
import "./../common/index.less"
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

const DeepMining2019HYBG = [
    {
        "author": "Brendan Crompton",
        "title": "A practical design approach for an improved resin anchored tendon ",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/THM3J5A988fGrjz"
    },
    {
        "author": "B Darlington",
        "title": "NEW METHOD TO EVALUATE DYNAMIC BOLTS AND DEVELOPMENT OF A NEW DYNAMIC ROCK BOLT",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Tr5tzYkGwzCqppK"
    },
    {
        "author": "PROF FRANCOIS MALAN",
        "title": "LAYOUT DESIGN CRITERIA FOR DEEP TABULAR MINES QUO VADIS?",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/6XZnBM789sforWK"
    },
    {
        "author": "D. Ligaraba",
        "title": "Analysis of the Gutenberg-Richter b-values of overlapping seismic clusters with application to Cooke 4 gold mine",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/MfazTaZkCmqXFwE"
    },
    {
        "author": "Krstulovic, G",
        "title": "FRACTURE MODEL FOR ROCKBURST MITIGATION BASED ON THE STRAIN ENERGY CONCEPT ",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/o7dXBZDEzNd2tCw"
    },
    {
        "author": "John McGaughey",
        "title": "Artificial intelligence and big data analytics in mining geomechanics",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Q5iAxBRNq9TfxSW"
    },
    {
        "author": "T Jesel",
        "title": "Gotthard Base Tunnel Deep infrastructure tunnels - experience from the alpine crossings.",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TDyPtCAT5JDPq5s"
    },
    {
        "author": "Lindsay Linzer",
        "title": "Do stopes contribute to the seismic source?",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/cDt34KA5RfRGxbc"
    },
    {
        "author": "Nghia Q. Trinh",
        "title": "Numerical modelling of the high rock stress challenges at Rana mine, Norway",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/8ybftERfx4NzqQE"
    },
    {
        "author": "Reece van Buren ",
        "title": "Modern Seismic Illuminating the Depths ",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/YqizrbdwLeNDSiN"
    },
    {
        "author": "Tobias Ladinig ",
        "title": "Effects of stoping activities on tunnel conditions in a deep, hard rock mine in Austria",
        "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Z6zcHf4trKwiFgK"
    }
]

const Caving2018 = [
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

const Paste2019 = [
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
                    <img src={require("../../img/u0.png")} alt=""/>
                </div>
                <div className='conton'>
                    <p>
                        The Ninth International Conference on Deep and High Stress Mining (Deep Mining 2019) will be
                        held at the
                        Misty Hills Conference Centre, Muldersdrift, Johannesburg on 24 and 25 June 2019. Conferences in
                        this series
                        have previously been hosted in Australia, South Africa, Canada, and Chile. Around the world,
                        mines are
                        getting deeper and the challenges of stress damage, squeezing ground, and rockbursts are
                        everpresent and
                        increasing. Mining methods and support systems have evolved slowly to improve the management of
                        excavation
                        damage and safety of personnel, but damage still occurs and personnel are injured. Techniques
                        for modelling
                        and monitoring have been adapted and enhanced to help us understand rock mass behaviour under
                        high stress.
                        Many efficacious dynamic support products have been developed, but our understanding of the
                        demand and
                        capacity of support systems remains uncertain.
                    </p>

                    <div className='table-list'>
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
                    </div>
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
                                HYLW(DeepMining2019HYLW)
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