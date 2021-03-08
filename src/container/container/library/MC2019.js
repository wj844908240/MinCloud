import React, {Component} from "react";
import "./index.less"
import Utils from "../../assets/tools/utils";
import "./../common/index.less"
const MC2019 = [
    { "author": "Tyler, L; Heyes, J", "title": "Why should we ‘think big’ on closure?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Ls5zMZF97E8drg2" },
    { "author": "Morrison-Saunders, A", "title": "The action is where the social is! The ecosystem services concept and other ideas for enhancing stakeholder engagement in integrated mine closure planning", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/94w73pfm8zRCSXf" },
    { "author": "Mucina, L; Tsakalos, JL; Macintyre, PD", "title": "Ecology, biodiversity and mining: science and solving the challenges", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FcgpZ4PnwWsKA6s" },
    { "author": "Warr, B", "title": "Designing contextual, efficient, and resilient land regeneration systems for mine closure under conditions of extreme uncertainty and resource constraints", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/R3ib59yFMB7HYMX" },
    { "author": "Richardson, C; Grigg, AH; Robinson, T; Wardell-Johnson, G", "title": "Achieving restoration targets and addressing completion criteria with remote sensing", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WbkHGBqc7XyKWzE" },
    { "author": "Jasper, DA; Hoffman, P; Banning, NC; Wiseman, GS; Stanbury, KE; Annison, SJ; Henderson, GR", "title": "Current practice and innovation in decommissioning, rehabilitation and monitoring on Barrow Island: applications for mine closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/itj9w9rdewBeR6W" },
    { "author": "McCullough, CD; van Rooijen, A; van Maren, DS", "title": "Process-based erosion modelling for shoreline rehabilitation design of a coal mine pit lake", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/25MQATzYM6wwT7f" },
    { "author": "Torgersrud, O; Breedveld, GD; Okkenhaug, G; Malme, B; Cataldi, P", "title": "Challenges for the closure and natural rehabilitation of bauxite residue disposal sites", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/PC2RMmo2ZW7xPNP" },
    { "author": "Kragt, ME; Lison, C; Manero, A; Hawkins, J", "title": "Mine site rehabilitation conditions in Western Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CkqJytWbcR5eDYS" },
    { "author": "Waghorne, EP; Disfani, MM", "title": "Land subsidence/rebound change after Hazelwood mine rehabilitation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gmbMfAGpQNqabcN" },
    { "author": "Mitchell, I; Hryczyszyn, K; Read, T", "title": "A framework to prioritise high-risk abandoned mine features for rehabilitation in Western Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LYzt2RBCZmbWqZe" },
    { "author": "Martin Duque, JF; Tejedor, M; Martin-Moreno, C; Nicolau, JM; Zapico, I", "title": "Geomorphic rehabilitation in Europe: recognition as best available technology and its role in LIFE projects", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Fn3tXMBRwG7YSjD" },
    { "author": "Feigl, A; Davis, B; Pratt, M; Kirwan, A; Millsom, B; Mozina, M; Rampal, E", "title": "Understanding the Latrobe Valley Regional Rehabilitation Strategy and why it is essential", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/NfncaxSRS6J4G9W" },
    { "author": "Huang, L; Fang, Y; Liu, Y; Wu, S; Parry, D", "title": "Ecological engineering to accelerate mineral weathering and transformation underpins sustainable tailings rehabilitation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/tnP9qwmxKBAt7KC" },
    { "author": "Ling, E; Guzzomi, AL; Merritt, DJ; Renton, M; Erickson, TE", "title": "Flash flaming technology shows promise to improve seed-based rehabilitation outcomes", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/3Pp22EQtTjKsjAo" },
    { "author": "Meney, K; Pantelic, L", "title": "Designing for success: applying ecological criteria to restoration at BHP Beenup, Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5xyHFa8b4B9RG6X" },
    { "author": "Masarei, M; Guzzomi, AL; Merritt, DJ; Erickson, TE", "title": "Improvements to mechanical direct seeder design guided by the optimal sowing depth of soft spinifex (Triodia pungens)", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/TpQjC9qYqw9HdzJ" },
    { "author": "de Graaf, PJH; Desjardins, M; Tsheko, P", "title": "\"" },
    { "author": "Geotechnical risk management for open pit mine closure: a sub-arctic and semi-arid case study\"", "title": "http://shareserver.miningcloud.com.cn:8066/s/sMroKsByW3bFeJx" },
    { "author": "de Bruyn, I; Prado, D; Mylvaganam, J; Walker, D", "title": "Geotechnical considerations for the stability of open pit excavations at mine closure: some scenarios", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/izRJn6pQT3BtdFd" },
    { "author": "Martinez, M; Hull, A", "title": "Toward a common practice in the selection of earthquake ground motion criteria for the design of critical mining facilities at closure and post-closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9QbtExEdwqka7jz" },
    { "author": "Pakula, A; Preston, R; Kennard, D; MacInnis, C", "title": "Stabilising an underground void: monolithic construction using self-consolidating concrete", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/KGQLHDK3nJCegq5" },
    { "author": "Wesley, G; Mackenzie, S; Campbell, G", "title": "Mine waste characterisation: the benefits of applying practical geological knowledge", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/StcWWd5bjooEFKz" },
    { "author": "Zhou, H; Amodio, A; Boylan, N", "title": "Informed mine closure by multi-dimensional modelling of tailings deposition and consolidation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/wWN4c8ZdsRSaTeA" },
    { "author": "T Laurencont", "title": "Social provisioning for mine closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/KNM2jeXixdQTc6i" },
    { "author": "Edwards, J; Maritz, A", "title": "Social aspects of mine closure: the elephant in the room", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/mzHX6Y9gAdL2j7L" },
    { "author": "January, M; Lee, H", "title": "Discounting social mine closure planning", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/d5F3iJaJ8FYjNnN" },
    { "author": "Svobodova, K", "title": "Life post-closure: perception and use of rehabilitated mine sites by local communities", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/BXCbzi89mfwHDWN" },
    { "author": "Aheto-Tsegah, D", "title": "Interesting case studies of conscious uncoupling", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/q8EbWYbR69gkcS6" },
    { "author": "Christoffersen, L; Reinecke, S; Shoesmith, M; McKennirey, E; Pilgrim, L; Rae, D", "title": "Innovative community engagement for the quantitative risk assessment for a mine closure and reclamation plan", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/y5r5ieYHjxoKMqF" },
    { "author": "Lacy, HWB", "title": "Mine landforms in Western Australia from dump to landform design: review, reflect and a future direction", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Dzkea9pLkjnjWcz" },
    { "author": "Thomson, H; Chandler, L", "title": "Tailings storage facility landform evolution modelling", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/cCKbdnb6wPiFjxX" },
    { "author": "Braimbridge, M; Mackenzie, S; Lyons, M; Clarke, T; Bow, B", "title": "Whole-of-landform erosion assessment using unmanned aerial vehicle data", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/NFj9oBo8NExF9xT" },
    { "author": "de San Miguel, V; Stone, T; Braimbridge, M; Mackenzie, S", "title": "Roy Hill waste landform design and construction process", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xYcicNmwkeDFZ59" },
    { "author": "Chapman, P; Kemp, A", "title": "A case for consequence categories to guide the closure design of landforms", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/X2CNSxgBL7jMGce" },
    { "author": "Lowry, JBC; Saynor, MJ", "title": "Developing a rehabilitation standard for landform stability for a uranium mine in northern Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9Yy2Smbe565Jfor" },
    { "author": "Iles, M", "title": "How can frameworks inform water quality objectives for the closure of the Ranger mine?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/a3QnFb3Xj9ycsN7" },
    { "author": "Ricaurte, J; Grant, CD; Freitas, A; Botha, PR", "title": "Clarifying closure scenarios through integrated planning at the Cerrejón mine in Colombia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/PierBcdLjbCkJgH" },
    { "author": "Gregory, S; Mackenzie, S; Bow, B", "title": "The Pardoo mine: closure planning, implementation and five years of performance monitoring data", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/QBKAeCKeppkW9qC" },
    { "author": "Lloyd, S", "title": "A stakeholder advisory committee as a mechanism to guide the preparation of a regional mine rehabilitation strategy: two years in, what have we learnt?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/W68ExeQEwoX6HQZ" },
    { "author": "Finucane, SJ; Tarnowy, K", "title": "New uses for old infrastructure: 101 things to do with the ‘stuff’ next to the hole in the ground", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/HgAXp39Epkddbmn" },
    { "author": "Lombard, PJ", "title": "Foresight in hindsight", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WwrDJWbA4reLd2Q" },
    { "author": "Shrivathsa, A; Cooper, S", "title": "An interjurisdictional approach to designing residual risk policy", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/PG8okkt4LHLgL9m" },
    { "author": "Welch, MA; Bartolo, RE; Harford, AJ", "title": "A framework for identification and planning of environmental research needs to inform rehabilitation of Ranger Uranium Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/kSEowaFGa2GHrSn" },
    { "author": "Sanders, J; McLeod, H; Small, A; Strachotta, C", "title": "Mine closure residual risk management: identifying and managing credible failure modes for tailings and mine waste", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/woFSHeJBP3c7Zbj" },
    { "author": "Svobodova, K; Owen, JR; Lebre, E; Edraki, M; Littleboy, A", "title": "The multi-risk vulnerability of global coal regions in the context of mine closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/7DxWP6pRGnfofGo" },
    { "author": "Williams, B; Donaldson, K; Beamish, B", "title": "Risk profiling and control of spontaneous combustion for coal mine closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/AAY3YcYmCZ5APyJ" },
    { "author": "Perotti, DA; Gitirana Jr, GFN; Fredlund, MD", "title": "Analysis of dry cover systems composed of tropical soils for mining waste", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/2Wpn5k4Fqc9H86S" },
    { "author": "Defferrard, PL; Rohde, TK", "title": "Six years of cover performance data for leading practice store and release cover trials at Century Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ts5iym8W86H63kE" },
    { "author": "Botula, Y-D; Guittonny, M; Bussière, B; Bresson, E", "title": "Will tree colonisation increase the risks of serious performance loss of engineered covers under climate change in Québec, Canada?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/MLBGk9zaFaAxPJf" },
    { "author": "Jamson, NP; Rohde, TK", "title": "Tailings storage facilities store-and-release cover design for the Cobar region", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zayQsCfH247SokB" },
    { "author": "Fridell, PS; Pearson, C; Woskoboenko, F; Brooker, R; Schenkel, MK", "title": "Coal ash waste categorisation to determine a regulatory capping profile for coal ash pond rehabilitation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/HZFPJPB7Hi5A3PS" },
    { "author": "Tibbett, M; O'Connor, R; Daws, MI", "title": "Too much of a good thing: phosphorus over-fertilisation in rehabilitated landscapes of high biodiversity value", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yd8mPASQbqxQMp5" },
    { "author": "Dobrowolski, MP", "title": "Combining seed burial, land imprinting and an artificial soil crust dramatically increases the emergence of broadcast seed", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Bqq3n86DCDsD8F7" },
    { "author": "Erickson, TE; Munoz-Rojas, M; Guzzomi, AL; Masarei, M; Ling, E; Bateman, AM; Kildisheva, OA; Ritchie, AL; Turner, SR; Parsons, B; Chester, P; Webster, T; Wishart, S; James, JJ; Madsen, MD; Abella, SR; Merritt, DJ", "title": "A case study of seed-use technology development for Pilbara mine site rehabilitation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LYZaDFp5MnNSRdo" },
    { "author": "Daws, MI; Grigg, AH; Standish, RJ; Tibbett, M", "title": "Applied phosphorus has long-term impacts on vegetation responses in restored jarrah forest", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/YeeWpptPKAkG2Wg" },
    { "author": "Logan, B; Futoransky, V; Dietrich, S; Flemming, BH; Wilson, V; Waterman, L", "title": "Target Ecosystem Assessment Model: a process to develop target revegetation prescriptions in the mine closure landscape", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/owQtQxcWnMpbFz3" },
    { "author": "Lu, P; Meek, I", "title": "Harnessing ecological processes in the Ranger Uranium Mine revegetation strategy", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ptJ9K9epTG2akbc" },
    { "author": "Mundodi, L; Yellishetty, M; Wong, V; Walmsley, A; Missen, J; Anderson, N", "title": "Growth of rye grass and clover in artificial topsoils: a case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/KbFb2KfAerkjofL" },
    { "author": "Christie, G; Horner, B; Scanlon, AT; Lemon, J; Williams, B", "title": "A ground up approach to revegetation in the arid zone", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/PbSL2LgME9DCRGB" },
    { "author": "Horner, B; Christie, G; Williams, B; Scanlon, AT; Lemon, J", "title": "Bang for your buck: revegetating arid sites using coloniser species", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9FqsGK8o8DE765a" },
    { "author": "Murphy, DP; Nahir, M; Didier, C", "title": "An update on the development of mine closure and reclamation standards by the International Organization for Standardization", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/mJWSBj4zbrrFcf4" },
    { "author": "Miller, JP", "title": "Environmental regulatory oversight: transitioning from an operational to rehabilitation framework", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Gsd5rwjz4zTJzHK" },
    { "author": "Brock, D; Weeks, B; Heyes, J", "title": "Introducing the International Council on Mining and Metals’ Integrated Mine Closure Good Practice Guide", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/HERrNygoyskwTxC" },
    { "author": "Murphy, DP; Fromm, J; Bairstow, R; Meunier, D", "title": "A repurposing framework for alignment of regional development and mine closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CGQNDs9ba694dE4" },
    { "author": "Mackay, R; Hastie, R; Lilley, H; Mathew, M", "title": "Mine rehabilitation in the Latrobe Valley, the start of a long journey: the Commissioner’s role", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/dBrmewPscW725GD" },
    { "author": "Getty, R; Morrison-Saunders, A", "title": "Does the integration of enviromental impact assessment and mine closure planning deliver effective mine closure plans in Western Australia?", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/rNsAWm9eG2SKFQP" },
    { "author": "Lamoureux, SC; O'Kane, MA", "title": "Harnessing risk to guide mine rock stockpile closure and long-term cost reduction", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/SKY2ggoYNMrWAAQ" },
    { "author": "Green, R; Linklater, C; Lee, S; Terrusi, L; Glasson, K", "title": "Rio Tinto’s framework for evaluating risks from low sulfur waste rock", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/fM27YfygQnynbRP" },
    { "author": "Robinson, SL; Finucane, SJ", "title": "Key outcomes of functional benchmarking for waste rock landform closure at a Western Australian iron ore mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/7QPxrbf9nanEo3z" },
    { "author": "Pearce, S; Brookshaw, D; Mueller, S; Barnes, A", "title": "Optimising waste management assessment using fragmentation analysis technology", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/gzbDprZWLBCjGSb" },
    { "author": "Garvie, A; Donaldson, K; Williams, B; Chapman, J", "title": "A demonstration of the cessation of spontaneous combustion in a coal overburden spoil pile", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/oQ3SYpXzPSCC95q" },
    { "author": "Jacob, J; Raignault, I; Battaglia-Brunet, F; Mailhan-Muxi, C; Engevin, J; Djemil, M", "title": "Biological manganese removal from mine drainage in a fixed-bed bioreactor at pilot-scale", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/6EjrKNTL7HEmpkY" },
    { "author": "Rosa, JCS; Morrison-Saunders, A; Sanchez, LE; Hughes, M; Geneletti, D", "title": "Applying ecosystem services assessment in closure planning to enhance post-mining land-use outcomes: learning from bauxite mining in Brazil and Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/MW6WFmpkCLaArPZ" },
    { "author": "Fogarty, K; Kragt, ME; White, B", "title": "Pre- and post-mine land-use trends across the New South Wales and Queensland coal industry", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/S52m6cypdA8pfLz" },
    { "author": "Hattingh, R; Williams, DJ; Corder, G", "title": "Applying a regional land use approach to mine closure: opportunities for restoring and regenerating mine-disturbed regional landscapes", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/E72cmEBFLz8BH54" },
    { "author": "Cooper, S", "title": "Maximising post-mining land use: Queensland Government reforms", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/DjasNMtkB4PRrM5" },
    { "author": "Pershke, DF; Elliott, PE", "title": "Post-closure land uses – defined through a strategic land use planning approach", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/JzqwbTFd6ZBxAms" },
    { "author": "Waggitt, PW", "title": "Uranium mining: post-closure land uses – a personal global review", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/f5NADB5B8aZmBP9" },
    { "author": "Heyes, J; Cooper, T", "title": "Strengthening BHP’s closure framework: a strategy to realise enduring value", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/s4XFxi9gziDQL4A" },
    { "author": "Lacy, HWB; Slight, M; Watson, A", "title": "Systems thinking: embedding closure planning within the management operating system is the key to drive closure performance", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/rnCmtRzXffpqzZ9" },
    { "author": "Kauppila, T; Bellenfant, G; Solismaa, L; Mittelstadt, P", "title": "Digitalisation of continuous mine closure planning and management: an EIT RawMaterials initiative", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/C4jxXMG9PYMF53m" },
    { "author": "Byrne, G", "title": "Mine closure plans assumptions and optimism", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Emdbm4owjaFQjrF" },
    { "author": "Aitken, SE; Burr, JP", "title": "Why mines should look at total life to achieve tailings facility closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/tJLytcw6bJaMMRw" },
    { "author": "Bussemaker, P; Pang, KL; Barnes, P; Latham, CL; McClenaghan, F", "title": "Closure planning challenges associated with mining adjacent to large creek lines", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/yYNySSbHjax5WnS" },
    { "author": "Fawcett, M; Laurencont, T", "title": "Setting objectives: the key to successful mine closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/5LetfAnXnLzPirt" },
    { "author": "Savage, RJ; Pearce, S; Mueller, S; Barnes, A; Renforth, P; Sapsford, D", "title": "Methods for assessing acid and metalliferous drainage mitigation and carbon sequestration in mine waste: a case study from Kevitsa mine, Finland", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/SH4wsssQfgajbQr" },
    { "author": "Narendranathan, S; Anders, J; Faithful, J; Patel, N", "title": "A case study: consolidation properties of Hazelwood Power Station ash", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/48ABSaoKNeTEK7f" },
    { "author": "Smedley, E; Stokes, B; Gallacher, M; Mackenzie, S", "title": "Quality management during closure works at the Telfer mine: a case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Xqf8Wa7QpgbfcHQ" },
    { "author": "Castendyk, DN; Straight, BJ; Voorhis, JC; Somogyi, MK; Jepson, WE; Kucera, BL", "title": "Using aerial drones to select sample depths in pit lakes", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/fYJnXAkLGXjiFbN" },
    { "author": "Kelcey, J; Blaxland, D; Smith, B; Gove, A", "title": "The analysis and validation of landform stability using unmanned aerial vehicles", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jXFB2yTRCMF6cAc" },
    { "author": "Howard, EJ; Bettison, MD", "title": "Selection of a representative dolerite waste sample for use in erosion assessments using remote sensing techniques", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/azXHTaCroD2pnz3" },
    { "author": "Berthelot, DS; Place-Hoskie, D; Willems, D; Black, K", "title": "Elliot Lake, Ontario uranium mines a legacy perpetual care case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/BZdQjHde255jkyS" },
    { "author": "Carneiro, A; Fourie, AB", "title": "Life cycle assessment of tailings management options: a conceptual case study in Western Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/QrTgBGkAwZ3eFLA" },
    { "author": "van Wyk, SJ; Hatting, J; Haagner, ASH", "title": "Wind erosion design considerations for closure of tailings storage facilities in South Africa: a case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZjqWAyedMTEqqGc" },
    { "author": "Patterson, TL; Trevor, M", "title": "Three case studies: mechanisms other than spillage and leaks that change groundwater quality and inhibit closure certification", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/SF8MYxEqTFag6cj" },
    { "author": "Grohs, SK; Pearce, S", "title": "Integrated life-of-mine waste characterisation, scheduling, and quality control for progressive closure at Martabe multi pit gold mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/KKfYbseDXdDBHP8" },
    { "author": "Worthington, T; Green, R; Latham, CL; Yaqub, B", "title": "Rehabilitation of the North End Box Cut dump at Tom Price mine operation: a legacy management case study", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/zrqEMCRig7pzTMt" },
    { "author": "Latham, CL; Lazo-Skold, C", "title": "Problematic pit: closure liability to operational opportunity", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/6ddqCPAqkTxtzor" },
    { "author": "Lange, S", "title": "Evaluating the effectiveness of Sunnyside Gold Corporation’s reclamation, San Juan County, Colorado, USA", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qtFAT9dwWGQkJns" },
    { "author": "Bartolo, RE; Nicholson, J; Rudge, M; Loewensteiner, D; Whiteside, T; Erskine, P; Barnes, M; Humphrey, CL", "title": "An approach to an ecosystem restoration standard for Ranger Uranium Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/jTksZnTn5SAFEJM" },
    { "author": "Alekseenko, AV", "title": "Environmental assessment and reclamation of abandoned marl mining dumps in the Northwest Caucasus", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/oiXs4daMLHiAKLb" },
    { "author": "Yunanto, T; Mitlohner, R; Bürger-Arndt, R", "title": "Vegetation development and the condition of natural regeneration after coal mine reclamation in East Kalimantan, Indonesia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/xN5nfMMBtdfLLkk" },
    { "author": "Amanah, F; Yunanto, T", "title": "Mine reclamation period to successfully meet criteria in Indonesia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ZzmTynTE36EeLai" },
    { "author": "Syari, IA; Sudrajat, J; Octaviano, HA; Hutahaean, B; Adnis, R; Taruk Allo, OA", "title": "Implementation of offshore reclamation methods on an old tin mining area on Bangka Island, Indonesia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/CPLGm6SMazmG6RH" },
    { "author": "Morgan, H; Hocking, A; Henderson, S", "title": "Simplified method to predict final void water levels", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/ALtjobHcgfkAGLg" },
    { "author": "Gresswell, R; Foley, G; Faithful, J", "title": "Hydrogeological modelling to inform closure planning for Hazelwood Mine", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/9zLq2nWCRijqxps" },
    { "author": "Gemson, WJ; Weaver, TR; Heemink, BL", "title": "Key considerations that can make or break a closure-focused groundwater-monitoring program", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Hqk48gXSZSESKda" },
    { "author": "Bulcock, HH; Heaslop, J", "title": "The application of an agro-hydrological model for a data limited closure study of a bauxite mine in Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/XJ3Gqy7HMJTNToj" },
    { "author": "McJannet, D; Hawdon, A; Baker, B; Ahwang, K; Gallant, J; Henderson, S; Hocking, A", "title": "Evaporation from coal mine pit lakes: measurements and modelling", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/n9EPA8SBMRZ4FZY" },
    { "author": "Carlino, AM; McCullough, CD", "title": "Modelling the long-term water balance of a pit lake with recreational end uses", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/sHFLWAzHRaS9kSf" },
    { "author": "Norrish, R; Lyon, B; Russell, W; Price, G", "title": "Engaging stakeholders to achieve rehabilitation completion: a case study of the BHP Beenup Project", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/qHJpf5Y9bceWQkx" },
    { "author": "Finucane-Woodman, MKJ; Finucane, SJ", "title": "Overcoming adverse stakeholder perception affecting tenement relinquishment", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/joHkwrmB8YszbHw" },
    { "author": "Tiemann, CD; McDonald, MC; Middle, G; Dixon, KW", "title": "Mine relinquishment policy in Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/AQddqmDnrLWxCRa" },
    { "author": "Jones, PL; Franklin, C", "title": "Relinquishment criteria verification: quality assurance/quality control using unmanned aerial vehicles", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/LCNj9z3mJJmGii3" },
    { "author": "Marten, R; Bagnall, C", "title": "Engineering a path to relinquishment: an Australian case study in ecological conservation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/AWER8HWMrdKxPxy" },
    { "author": "Weaver, TR; Fridell, PS; Ospina, MB; Brooker, R; Schenkel, MK; Scrase, AM", "title": "Contamination assessment of mine infrastructure areas for closure and relinquishment: Hazelwood Coal Mine, Victoria, Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/FNc93c6r7rSSt6y" },
    { "author": "Smedley, E; Mackenzie, S; Gregory, S", "title": "How long is long enough? Adopting a risk-based approach to inform drainage management in closure designs", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/sbDPbjEXwncs8JL" },
    { "author": "Richardson, DL; Bourke, G; Rissik, D; Fisk, GW; Iles, M", "title": "Development of a vulnerability assessment framework to evaluate potential effects of mine water discharges from Ranger Uranium Mine, Northern Territory", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/d43REaZP7XqfSnK" },
    { "author": "Slingerland, N; Beier, NA; Wilson, GW", "title": "Stress testing geomorphic and traditional tailings dam designs for closure using a landscape evolution model", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/Dfb4od8oeKzyy6y" },
    { "author": "Howard, EJ; Loch, RJ", "title": "Acceptable erosion rates for mine waste landform rehabilitation modelling in the Pilbara, Western Australia", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/GNMBALAyX6HELfP" },
    { "author": "Peroor, R; Howard, EJ; Braun, T; Chesal, T; Chataut, S", "title": "Integration of field erosion measurements with erosion models and 3D civil design tools for development of erosion resistant cover systems", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/WzCTxF8KZXaW39a" },
    { "author": "Getty, R; Caporn, D; Kyan, D; Beltran, J", "title": "Repurposing closure cost estimation tools: a Gold Fields case study of the benefit of integration", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/BsobXF8EBy3HatK" },
    { "author": "Brock, D; Slight, M; McCombe, C", "title": "Financial concepts for mine closure: information document", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/a8xWjcDBmafMXXm" },
    { "author": "Kumari, P; Cooper, M", "title": "Spatial data-based closure costing integrated with life of mine planning: a key enabler facilitating value realisation", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/4W92YXgws9YJwNf" },
    { "author": "Bocking, KA; Lewis, K", "title": "Progressive release of security to incentivise and fund closure", "previewLink": "http://shareserver.miningcloud.com.cn:8066/s/c47to4DzF57K6Jg" }
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
                    <img src={require("../../img/MC2019_banner.jpg")} alt=""/>
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
                                HYLW(MC2019)
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