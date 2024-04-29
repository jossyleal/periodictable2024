const data = [
    {name:"Hydrogen",id:1,groups:["react_nonmetal","nonmetal"],boilPt:-252.9,calcAtomRad:53,condElectric:"-",condThermal:"0.1805",density:'8.988e-5',electroneg:2.2,empAtomRad:25,heatFusion:"0.558",heatSpecific:"14300",heatVapor:"0.452",ionFirst:"1312",ionSecond:"-",meltPt:-259.16,mwt:1.008,oxidState:"-1 1"},{name:"Helium",id:2,groups:["noble","nonmetal"],boilPt:-269,calcAtomRad:31,condElectric:"-",condThermal:"0.1513",density:'1.785e-4',electroneg:"-",empAtomRad:"-",heatFusion:"0.02",heatSpecific:"5193.1",heatVapor:"0.083",ionFirst:"2372.3",ionSecond:"5250.5",meltPt:"-",mwt:4.0026,oxidState:"-"},{name:"Lithium",id:3,groups:["alkali","metal"],boilPt:1342,calcAtomRad:167,condElectric:"11",condThermal:"85",density:0.534,electroneg:0.98,empAtomRad:145,heatFusion:"3.0",heatSpecific:"3570",heatVapor:"147",ionFirst:"520.2",ionSecond:"7298.1",meltPt:180.5,mwt:6.94,oxidState:"1"},{name:"Beryllium",id:4,groups:["alkaline","metal"],boilPt:2470,calcAtomRad:112,condElectric:"25",condThermal:"190",density:1.85,electroneg:1.57,empAtomRad:105,heatFusion:"7.95",heatSpecific:"1820",heatVapor:"297",ionFirst:"899.5",ionSecond:"1757.1",meltPt:1287,mwt:9.0122,oxidState:"2"},{name:"Boron",id:5,groups:["metalloid"],boilPt:4000,calcAtomRad:87,condElectric:"1.0e-10",condThermal:"27",density:2.34,electroneg:2.04,empAtomRad:85,heatFusion:"50",heatSpecific:"1030",heatVapor:"507",ionFirst:"800.6",ionSecond:"2427.1",meltPt:2076,mwt:10.81,oxidState:"3"},{name:"Carbon",id:6,groups:["react_nonmetal","nonmetal"],boilPt:4027,calcAtomRad:67,condElectric:"0.10",condThermal:"140",density:2.267,electroneg:2.54,empAtomRad:70,heatFusion:"105",heatSpecific:"710",heatVapor:"715",ionFirst:"1086.5",ionSecond:"2352.6",meltPt:3527,mwt:12.011,oxidState:"-4 4"},{name:"Nitrogen",id:7,groups:["react_nonmetal","nonmetal"],boilPt:-195.8,calcAtomRad:56,condElectric:"-",condThermal:"0.02583",density:'1.251e-3',electroneg:3.04,empAtomRad:65,heatFusion:"0.36",heatSpecific:"1040",heatVapor:"2.79",ionFirst:"1402.3",ionSecond:"2856",meltPt:-210,mwt:14.007,oxidState:"-3 3 5"},{name:"Oxygen",id:8,groups:["react_nonmetal","nonmetal"],boilPt:-183,calcAtomRad:48,condElectric:"-",condThermal:"0.02658",density:'1.429e-3',electroneg:3.44,empAtomRad:60,heatFusion:"0.222",heatSpecific:"919",heatVapor:"3.41",ionFirst:"1313.9",ionSecond:"3388.3",meltPt:-218.79,mwt:15.999,oxidState:"-2"},{name:"Fluorine",id:9,groups:["react_nonmetal","nonmetal"],boilPt:-188.1,calcAtomRad:42,condElectric:"-",condThermal:"0.0277",density:'1.696e-3',electroneg:3.98,empAtomRad:60,heatFusion:"0.26",heatSpecific:"824",heatVapor:"3.27",ionFirst:"1681.0",ionSecond:"3374.2",meltPt:-219.67,mwt:18.998,oxidState:"-1"},{name:"Neon",id:10,groups:["noble","nonmetal"],boilPt:-246.1,calcAtomRad:38,condElectric:"-",condThermal:"0.0491",density:'8.999e-4',electroneg:"-",empAtomRad:"-",heatFusion:"0.34",heatSpecific:"1030.0",heatVapor:"1.75",ionFirst:"2080.7",ionSecond:"3952.3",meltPt:-248.59,mwt:20.18,oxidState:"-"},{name:"Sodium",id:11,groups:["alkali","metal"],boilPt:882.9,calcAtomRad:190,condElectric:"21",condThermal:"140",density:0.971,electroneg:0.93,empAtomRad:180,heatFusion:"2.60",heatSpecific:"1230",heatVapor:"97.7",ionFirst:"495.8",ionSecond:"4562",meltPt:97.794,mwt:22.99,oxidState:"1"},{name:"Magnesium",id:12,groups:["alkaline","metal"],boilPt:1090,calcAtomRad:145,condElectric:"23",condThermal:"160",density:1.738,electroneg:1.31,empAtomRad:150,heatFusion:"8.7",heatSpecific:"1020",heatVapor:"128",ionFirst:"737.7",ionSecond:"1450.7",meltPt:650,mwt:24.305,oxidState:"2"},{name:"Aluminum",id:13,groups:["post_transition","metal"],boilPt:2519,calcAtomRad:118,condElectric:"38",condThermal:"235",density:2.698,electroneg:1.61,empAtomRad:125,heatFusion:"10.7",heatSpecific:"904",heatVapor:"293",ionFirst:"577.5",ionSecond:"1816.7",meltPt:660.32,mwt:26.982,oxidState:"3"},{name:"Silicon",id:14,groups:["metalloid"],boilPt:2900,calcAtomRad:111,condElectric:"0.0010",condThermal:"150",density:2.33,electroneg:1.9,empAtomRad:110,heatFusion:"50.2",heatSpecific:"710",heatVapor:"359",ionFirst:"786.5",ionSecond:"1577.1",meltPt:1414,mwt:28.085,oxidState:"-4 4"},{name:"Phosphorous",id:15,groups:["react_nonmetal","nonmetal"],boilPt:280.5,calcAtomRad:98,condElectric:"10",condThermal:"0.236",density:1.82,electroneg:2.1,empAtomRad:100,heatFusion:"0.64",heatSpecific:"769.7",heatVapor:"12.4",ionFirst:"1011.8",ionSecond:"1907",meltPt:44.15,mwt:30.974,oxidState:"-3 3 5"},{name:"Sulfur",id:16,groups:["react_nonmetal","nonmetal"],boilPt:444.72,calcAtomRad:98,condElectric:"1.0e-21",condThermal:"0.205",density:2.067,electroneg:2.58,empAtomRad:100,heatFusion:"1.73",heatSpecific:"705",heatVapor:"9.8",ionFirst:"999.6",ionSecond:"2252",meltPt:115.21,mwt:32.06,oxidState:" -2 2 4 6"},{name:"Chlorine",id:17,groups:["react_nonmetal","nonmetal"],boilPt:-34.04,calcAtomRad:79,condElectric:"1.0e-8",condThermal:"0.0089",density:'3.214e-4',electroneg:3.16,empAtomRad:100,heatFusion:"3.2",heatSpecific:"478.2",heatVapor:"10.2",ionFirst:"1251.2",ionSecond:"2298",meltPt:-101.5,mwt:35.45,oxidState:"-1 1 3 5 7"},{name:"Argon",id:18,groups:["noble","nonmetal"],boilPt:-186,calcAtomRad:71,condElectric:"-",condThermal:"0.017772",density:'1.784e-3',electroneg:"-",empAtomRad:"-",heatFusion:"1.18",heatSpecific:"520.33",heatVapor:"6.5",ionFirst:"1520.6",ionSecond:"2665.8",meltPt:-189.34,mwt:39.948,oxidState:"-"},{name:"Potassium",id:19,groups:["alkali","metal"],boilPt:758.9,calcAtomRad:243,condElectric:"14",condThermal:"100",density:0.862,electroneg:0.82,empAtomRad:220,heatFusion:"2.33",heatSpecific:"757",heatVapor:"76.9",ionFirst:"418.8",ionSecond:"3052",meltPt:63.5,mwt:39.098,oxidState:"1"},{name:"Calcium",id:20,groups:["alkaline","metal"],boilPt:1484,calcAtomRad:194,condElectric:"29",condThermal:"200",density:1.54,electroneg:1,empAtomRad:180,heatFusion:"8.54",heatSpecific:"631",heatVapor:"155",ionFirst:"589.8",ionSecond:"1145.4",meltPt:842,mwt:40.078,oxidState:"2"},{name:"Scanadium",id:21,groups:["transition","metal"],boilPt:2830,calcAtomRad:184,condElectric:"1.8",condThermal:"16",density:2.989,electroneg:1.36,empAtomRad:160,heatFusion:"16",heatSpecific:"567",heatVapor:"318",ionFirst:"633.1",ionSecond:"1235.0",meltPt:1541,mwt:44.956,oxidState:"3"},{name:"Titanium",id:22,groups:["transition","metal"],boilPt:3287,calcAtomRad:176,condElectric:"2.5",condThermal:"22",density:4.54,electroneg:1.54,empAtomRad:140,heatFusion:"18.7",heatSpecific:"520",heatVapor:"425",ionFirst:"658.8",ionSecond:"1309.8",meltPt:1668,mwt:47.867,oxidState:"4"},{name:"Vanadium",id:23,groups:["transition","metal"],boilPt:3407,calcAtomRad:171,condElectric:"5.0",condThermal:"31",density:6.11,electroneg:1.63,empAtomRad:135,heatFusion:"22.8",heatSpecific:"489",heatVapor:"453",ionFirst:"650.9",ionSecond:"1414",meltPt:1910,mwt:50.942,oxidState:"5"},{name:"Chromium",id:24,groups:["transition","metal"],boilPt:2671,calcAtomRad:166,condElectric:"7.9",condThermal:"94",density:7.15,electroneg:1.66,empAtomRad:140,heatFusion:"20.5",heatSpecific:"448",heatVapor:"339",ionFirst:"652.9",ionSecond:"1590.6",meltPt:1907,mwt:51.996,oxidState:"3 6"},{name:"Manganese",id:25,groups:["transition","metal"],boilPt:2061,calcAtomRad:161,condElectric:"0.62",condThermal:"7.8",density:7.44,electroneg:1.55,empAtomRad:140,heatFusion:"13.2",heatSpecific:"479",heatVapor:"220",ionFirst:"717.3",ionSecond:"1509.0",meltPt:1246,mwt:54.938,oxidState:"2 4 7"},{name:"Iron",id:26,groups:["transition","metal"],boilPt:2861,calcAtomRad:156,condElectric:"10",condThermal:"80",density:7.874,electroneg:1.83,empAtomRad:140,heatFusion:"13.8",heatSpecific:"449",heatVapor:"347",ionFirst:"762.5",ionSecond:"1561.9",meltPt:1538,mwt:55.845,oxidState:"2 3"},{name:"Cobalt",id:27,groups:["transition","metal"],boilPt:2900,calcAtomRad:152,condElectric:"17",condThermal:"100",density:8.86,electroneg:1.88,empAtomRad:135,heatFusion:"16.2",heatSpecific:"421",heatVapor:"375",ionFirst:"760.4",ionSecond:"1648",meltPt:1495,mwt:58.933,oxidState:"2 3"},{name:"Nickel",id:28,groups:["transition","metal"],boilPt:2913,calcAtomRad:149,condElectric:"14",condThermal:"91",density:8.912,electroneg:1.91,empAtomRad:135,heatFusion:"17.2",heatSpecific:"445",heatVapor:"378",ionFirst:"737.1",ionSecond:"1753.0",meltPt:1455,mwt:58.693,oxidState:"2"},{name:"Copper",id:29,groups:["transition","metal"],boilPt:2562,calcAtomRad:145,condElectric:"59",condThermal:"400",density:8.96,electroneg:1.9,empAtomRad:135,heatFusion:"13.1",heatSpecific:"384.4",heatVapor:"300",ionFirst:"745.5",ionSecond:"1957.9",meltPt:1084.62,mwt:63.546,oxidState:"2"},{name:"Zinc",id:30,groups:["transition","metal"],boilPt:906.9,calcAtomRad:142,condElectric:"17",condThermal:"120",density:7.134,electroneg:1.65,empAtomRad:135,heatFusion:"7.35",heatSpecific:"388",heatVapor:"119",ionFirst:"906.4",ionSecond:"1733.3",meltPt:419.53,mwt:65.38,oxidState:"2"},{name:"Gallium",id:31,groups:["post_transition","metal"],boilPt:2204,calcAtomRad:136,condElectric:"7.1",condThermal:"29",density:5.907,electroneg:1.81,empAtomRad:130,heatFusion:"5.59",heatSpecific:"371",heatVapor:"256",ionFirst:"578.8",ionSecond:"1979.3",meltPt:29.7646,mwt:69.723,oxidState:"3"},{name:"Germanium",id:32,groups:["metalloid"],boilPt:2820,calcAtomRad:125,condElectric:"0.0020",condThermal:"60",density:5.323,electroneg:2.01,empAtomRad:125,heatFusion:"31.8",heatSpecific:"321.4",heatVapor:"334",ionFirst:"762",ionSecond:"1537.5",meltPt:938.25,mwt:72.63,oxidState:"-4 2 4"},{name:"Arsenic",id:33,groups:["metalloid"],boilPt:614,calcAtomRad:114,condElectric:"3.3",condThermal:"50",density:5.776,electroneg:2.18,empAtomRad:115,heatFusion:"27.7",heatSpecific:"328",heatVapor:"32.4",ionFirst:"947.0",ionSecond:"1798",meltPt:817,mwt:74.922,oxidState:"-3 3 5"},{name:"Selenium",id:34,groups:["react_nonmetal","nonmetal"],boilPt:685,calcAtomRad:103,condElectric:"-",condThermal:"0.52",density:4.809,electroneg:2.55,empAtomRad:115,heatFusion:"5.4",heatSpecific:"321.2",heatVapor:"26",ionFirst:"941.0",ionSecond:"2045",meltPt:221,mwt:78.971,oxidState:"-2 2 4 6"},{name:"Bromine",id:35,groups:["react_nonmetal","nonmetal"],boilPt:58.9,calcAtomRad:94,condElectric:"1.0e-16",condThermal:"0.12",density:3.122,electroneg:2.96,empAtomRad:115,heatFusion:"5.8",heatSpecific:"947.3",heatVapor:"14.8",ionFirst:"1139.9",ionSecond:"2103",meltPt:-7.3,mwt:79.904,oxidState:"-1 1 3 5"},{name:"Krypton",id:36,groups:["noble","nonmetal"],boilPt:-'153.22,calcAtomRad:88,condElectric:"-",condThermal:"0.00943",density:3.733e-3',electroneg:3,empAtomRad:"-",heatFusion:"1.64",heatSpecific:"248.05",heatVapor:"9.02",ionFirst:"1350.8",ionSecond:"2350.4",meltPt:-157.37,mwt:83.798,oxidState:"2"},{name:"Rubidium",id:37,groups:["alkali","metal"],boilPt:688,calcAtomRad:265,condElectric:"8.3",condThermal:"58",density:1.532,electroneg:0.82,empAtomRad:235,heatFusion:"2.19",heatSpecific:"364",heatVapor:"72",ionFirst:"403.0",ionSecond:"2633",meltPt:39.3,mwt:85.468,oxidState:"1"},{name:"Strontium",id:38,groups:["alkaline","metal"],boilPt:1382,calcAtomRad:219,condElectric:"7.7",condThermal:"35",density:2.64,electroneg:1,empAtomRad:200,heatFusion:"8",heatSpecific:"300",heatVapor:"137",ionFirst:"549.5",ionSecond:"1064.2",meltPt:777,mwt:87.62,oxidState:"2"},{name:"Yttrium",id:39,groups:["transition","metal"],boilPt:3345,calcAtomRad:212,condElectric:"1.8",condThermal:"17",density:4.469,electroneg:1.22,empAtomRad:180,heatFusion:"11.4",heatSpecific:"298",heatVapor:"380",ionFirst:"600",ionSecond:"1180",meltPt:1526,mwt:88.906,oxidState:"3"},{name:"Zirconium",id:40,groups:["transition metal","metal"],boilPt:4409,calcAtomRad:206,condElectric:"2.4",condThermal:"23",density:6.506,electroneg:1.33,empAtomRad:155,heatFusion:"21",heatSpecific:"278",heatVapor:"580",ionFirst:"640.1",ionSecond:"1270",meltPt:1855,mwt:91.224,oxidState:"4"},{name:"Niobium",id:41,groups:["transition metal","metal"],boilPt:4744,calcAtomRad:198,condElectric:"6.7",condThermal:"54",density:8.57,electroneg:1.6,empAtomRad:145,heatFusion:"26.8",heatSpecific:"265",heatVapor:"690",ionFirst:"652.1",ionSecond:"1380",meltPt:2477,mwt:92.906,oxidState:"5"},{name:"Molybdenum",id:42,groups:["transition metal","metal"],boilPt:4639,calcAtomRad:190,condElectric:"20",condThermal:"139",density:10.22,electroneg:2.16,empAtomRad:145,heatFusion:"36",heatSpecific:"251",heatVapor:"600",ionFirst:"684.3",ionSecond:"1560",meltPt:2623,mwt:95.95,oxidState:"4 6"},{name:"Technetium",id:43,groups:["transition metal","metal"],boilPt:4265,calcAtomRad:183,condElectric:"5.0",condThermal:"51",density:11.5,electroneg:1.9,empAtomRad:135,heatFusion:"23",heatSpecific:"63",heatVapor:"550",ionFirst:"702",ionSecond:"1470",meltPt:2157,mwt:98,oxidState:"4 7"},{name:"Ruthenium",id:44,groups:["transition","metal"],boilPt:4150,calcAtomRad:178,condElectric:"14",condThermal:"120",density:12.37,electroneg:2.2,empAtomRad:130,heatFusion:"25.7",heatSpecific:"238",heatVapor:"580",ionFirst:"710.2",ionSecond:"1620",meltPt:2334,mwt:101.07,oxidState:"3 4"},{name:"Rhodium",id:45,groups:["transition","metal"],boilPt:3695,calcAtomRad:173,condElectric:"23",condThermal:"150",density:12.41,electroneg:2.28,empAtomRad:135,heatFusion:"21.7",heatSpecific:"240",heatVapor:"495",ionFirst:"719.7",ionSecond:"1740",meltPt:1964,mwt:102.91,oxidState:"3"},{name:"Palladium",id:46,groups:["transition","metal"],boilPt:2963,calcAtomRad:169,condElectric:"10",condThermal:"72",density:12.02,electroneg:2.2,empAtomRad:140,heatFusion:"16.7",heatSpecific:"240",heatVapor:"380",ionFirst:"804.4",ionSecond:"1870",meltPt:1554.9,mwt:106.42,oxidState:"2 4"},{name:"Silver",id:47,groups:["transition","metal"],boilPt:2162,calcAtomRad:165,condElectric:"62",condThermal:"430",density:10.501,electroneg:1.93,empAtomRad:160,heatFusion:"11.3",heatSpecific:"235",heatVapor:"255",ionFirst:"731.0",ionSecond:"2070",meltPt:961.78,mwt:107.87,oxidState:"1"},{name:"Cadmium",id:48,groups:["transition","metal"],boilPt:766.9,calcAtomRad:161,condElectric:"14",condThermal:"97",density:8.69,electroneg:1.69,empAtomRad:155,heatFusion:"6.3",heatSpecific:"230",heatVapor:"100",ionFirst:"867.8",ionSecond:"1631.4",meltPt:321.07,mwt:112.41,oxidState:"2"},{name:"Indium",id:49,groups:["post_transition","metal"],boilPt:2072,calcAtomRad:156,condElectric:"12",condThermal:"82",density:7.31,electroneg:1.78,empAtomRad:155,heatFusion:"3.26",heatSpecific:"233",heatVapor:"230",ionFirst:"558.3",ionSecond:"1820.7",meltPt:156.6,mwt:114.82,oxidState:"3"},{name:"Tin",id:50,groups:["post_transition","metal"],boilPt:2602,calcAtomRad:145,condElectric:"9.1",condThermal:"67",density:7.287,electroneg:1.96,empAtomRad:145,heatFusion:"7.0",heatSpecific:"217",heatVapor:"290",ionFirst:"708.6",ionSecond:"1411.8",meltPt:231.93,mwt:118.71,oxidState:"-4 2 4"},{name:"Antimony",id:51,groups:["metalloid"],boilPt:1587,calcAtomRad:133,condElectric:"2.5",condThermal:"24",density:6.685,electroneg:2.05,empAtomRad:145,heatFusion:"19.7",heatSpecific:"207",heatVapor:"68",ionFirst:"834",ionSecond:"1594.9",meltPt:630.63,mwt:121.76,oxidState:"-3 3 5"},{name:"Tellurium",id:52,groups:["metalloid"],boilPt:987.9,calcAtomRad:123,condElectric:"0.010",condThermal:"3",density:6.232,electroneg:2.1,empAtomRad:140,heatFusion:"17.5",heatSpecific:"201",heatVapor:"48",ionFirst:"869.3",ionSecond:"1790",meltPt:449.51,mwt:127.6,oxidState:"-2 2 4 6"},{name:"Iodine",id:53,groups:["react_nonmetal","nonmetal"],boilPt:184.3,calcAtomRad:115,condElectric:"1.0e-13",condThermal:"0.449",density:4.93,electroneg:2.66,empAtomRad:140,heatFusion:"7.76",heatSpecific:"429.0",heatVapor:"20.9",ionFirst:"1008.4",ionSecond:"1845.9",meltPt:113.7,mwt:126.9,oxidState:"-1 1 3 5 7"},{name:"Xenon",id:54,groups:["noble","nonmetal"],boilPt:-108,calcAtomRad:108,condElectric:"-",condThermal:"0.00565",density:'5.887e-3',electroneg:2.6,empAtomRad:"-",heatFusion:"2.30",heatSpecific:"158.32",heatVapor:"12.64",ionFirst:"1170.4",ionSecond:"2046.4",meltPt:-111.75,mwt:131.29,oxidState:"2 4 6"},{name:"Cesium",id:55,groups:["alkali","metal"],boilPt:671,calcAtomRad:298,condElectric:"5.0",condThermal:"36",density:1.873,electroneg:0.79,empAtomRad:260,heatFusion:"2.09",heatSpecific:"242",heatVapor:"65",ionFirst:"375.7",ionSecond:"2234.3",meltPt:28.5,mwt:132.91,oxidState:"1"},{name:"Barium",id:56,groups:["alkaline","metal"],boilPt:1870,calcAtomRad:253,condElectric:"2.9",condThermal:"18",density:3.594,electroneg:0.89,empAtomRad:215,heatFusion:"8.0",heatSpecific:"205",heatVapor:"140",ionFirst:"502.9",ionSecond:"965.2",meltPt:727,mwt:137.33,oxidState:"2"},{name:"Lanthanum",id:57,groups:["lanthanoid","metal"],boilPt:3464,calcAtomRad:226,condElectric:"1.6",condThermal:"13",density:6.145,electroneg:1.1,empAtomRad:195,heatFusion:"6.2",heatSpecific:"195",heatVapor:"400",ionFirst:"538.1",ionSecond:"1067",meltPt:920,mwt:138.91,oxidState:"3"},{name:"Cerium",id:58,groups:["lanthanoid","metal"],boilPt:3360,calcAtomRad:210,condElectric:"1.4",condThermal:"11",density:6.77,electroneg:1.12,empAtomRad:185,heatFusion:"5.5",heatSpecific:"192",heatVapor:"350",ionFirst:"534.4",ionSecond:"1050",meltPt:795,mwt:140.12,oxidState:"3 4"},{name:"Praseodymium",id:59,groups:["lanthanoid","metal"],boilPt:3290,calcAtomRad:247,condElectric:"1.4",condThermal:"13",density:6.773,electroneg:1.13,empAtomRad:185,heatFusion:"6.9",heatSpecific:"193",heatVapor:"330",ionFirst:"527",ionSecond:"1020",meltPt:935,mwt:140.91,oxidState:"3"},{name:"Neodymium",id:60,groups:["lanthanoid","metal"],boilPt:3100,calcAtomRad:206,condElectric:"1.6",condThermal:"17",density:7.007,electroneg:1.14,empAtomRad:185,heatFusion:"7.1",heatSpecific:"190",heatVapor:"285",ionFirst:"533.1",ionSecond:"1040",meltPt:1024,mwt:144.24,oxidState:"3"},{name:"Promethium",id:61,groups:["lanthanoid","metal"],boilPt:3000,calcAtomRad:205,condElectric:"1.3",condThermal:"15",density:7.26,electroneg:1.13,empAtomRad:185,heatFusion:"7.7",heatSpecific:"-",heatVapor:"290",ionFirst:"540",ionSecond:"1050",meltPt:1042,mwt:144.91,oxidState:"3"},{name:"Samarium",id:62,groups:["lanthanoid","metal"],boilPt:1803,calcAtomRad:238,condElectric:"1.1",condThermal:"13",density:7.52,electroneg:1.17,empAtomRad:185,heatFusion:"8.6",heatSpecific:"196",heatVapor:"175",ionFirst:"544.5",ionSecond:"1070",meltPt:1072,mwt:150.36,oxidState:"3"},{name:"Europium",id:63,groups:["lanthanoid","metal"],boilPt:1500,calcAtomRad:231,condElectric:"1.1",condThermal:"14",density:5.243,electroneg:1.2,empAtomRad:185,heatFusion:"9.2",heatSpecific:"182",heatVapor:"175",ionFirst:"547.1",ionSecond:"1085",meltPt:826,mwt:151.96,oxidState:"2 3"},{name:"Gadolinium",id:64,groups:["lanthanoid","metal"],boilPt:3250,calcAtomRad:233,condElectric:"0.77",condThermal:"11",density:7.895,electroneg:1.2,empAtomRad:180,heatFusion:"10",heatSpecific:"240",heatVapor:"305",ionFirst:"593.4",ionSecond:"1170",meltPt:1312,mwt:157.25,oxidState:"3"},{name:"Terbium",id:65,groups:["lanthanoid","metal"],boilPt:3230,calcAtomRad:225,condElectric:"0.83",condThermal:"11",density:8.229,electroneg:1.1,empAtomRad:175,heatFusion:"10.8",heatSpecific:"182",heatVapor:"295",ionFirst:"565.8",ionSecond:"1110",meltPt:1356,mwt:158.93,oxidState:"3"},{name:"Dysprosium",id:66,groups:["lanthanoid","metal"],boilPt:2567,calcAtomRad:228,condElectric:"1.1",condThermal:"11",density:8.55,electroneg:1.22,empAtomRad:175,heatFusion:"11.1",heatSpecific:"167",heatVapor:"280",ionFirst:"573.0",ionSecond:"1130",meltPt:1407,mwt:162.5,oxidState:"3"},{name:"Holmium",id:67,groups:["lanthanoid","metal"],boilPt:2700,calcAtomRad:226,condElectric:"1.1",condThermal:"16",density:8.795,electroneg:1.23,empAtomRad:175,heatFusion:"17.0",heatSpecific:"165",heatVapor:"265",ionFirst:"581.0",ionSecond:"1140",meltPt:1461,mwt:164.93,oxidState:"3"},{name:"Erbium",id:68,groups:["lanthanoid","metal"],boilPt:2868,calcAtomRad:226,condElectric:"1.2",condThermal:"15",density:9.066,electroneg:1.24,empAtomRad:175,heatFusion:"19.9",heatSpecific:"168",heatVapor:"285",ionFirst:"589.3",ionSecond:"1150",meltPt:1529,mwt:167.26,oxidState:"3"},{name:"Thulium",id:69,groups:["lanthanoid","metal"],boilPt:1950,calcAtomRad:222,condElectric:"1.4",condThermal:"17",density:9.321,electroneg:1.25,empAtomRad:175,heatFusion:"16.8",heatSpecific:"160",heatVapor:"250",ionFirst:"596.7",ionSecond:"1160",meltPt:1545,mwt:168.93,oxidState:"3"},{name:"Ytterbium",id:70,groups:["lanthanoid","metal"],boilPt:1196,calcAtomRad:222,condElectric:"3.6",condThermal:"39",density:6.965,electroneg:1.1,empAtomRad:175,heatFusion:"7.7",heatSpecific:"154",heatVapor:"160",ionFirst:"603.4",ionSecond:"1174.8",meltPt:824,mwt:173.05,oxidState:"3"},{name:"Lutetium",id:71,groups:["lanthanoid","metal"],boilPt:3402,calcAtomRad:217,condElectric:"1.8",condThermal:"16",density:9.84,electroneg:1.27,empAtomRad:175,heatFusion:"22",heatSpecific:"154",heatVapor:"415",ionFirst:"523.5",ionSecond:"1340",meltPt:1652,mwt:174.97,oxidState:"3"},{name:"Hafnium",id:72,groups:["transition","metal"],boilPt:4603,calcAtomRad:208,condElectric:"3.3",condThermal:"23",density:13.31,electroneg:1.3,empAtomRad:155,heatFusion:"25.5",heatSpecific:"144",heatVapor:"630",ionFirst:"658.5",ionSecond:"1440",meltPt:2233,mwt:178.49,oxidState:"4"},{name:"Tantalum",id:73,groups:["transition","metal"],boilPt:5458,calcAtomRad:200,condElectric:"7.7",condThermal:"57",density:16.654,electroneg:1.5,empAtomRad:145,heatFusion:"36",heatSpecific:"140",heatVapor:"735",ionFirst:"761",ionSecond:"1500",meltPt:3017,mwt:180.95,oxidState:"5"},{name:"Tungsten",id:74,groups:["transition","metal"],boilPt:5930,calcAtomRad:193,condElectric:"20",condThermal:"170",density:19.25,electroneg:2.36,empAtomRad:135,heatFusion:"35",heatSpecific:"132",heatVapor:"800",ionFirst:"770",ionSecond:"1700",meltPt:3422,mwt:183.84,oxidState:"4 6"},{name:"Rhenium",id:75,groups:["transition","metal"],boilPt:5596,calcAtomRad:188,condElectric:"5.6",condThermal:"48",density:21.02,electroneg:1.9,empAtomRad:135,heatFusion:"33",heatSpecific:"137",heatVapor:"705",ionFirst:"760",ionSecond:"1260",meltPt:3186,mwt:186.21,oxidState:"4"},{name:"Osmium",id:76,groups:["transition","metal"],boilPt:5012,calcAtomRad:185,condElectric:"12",condThermal:"88",density:22.59,electroneg:2.2,empAtomRad:130,heatFusion:"31",heatSpecific:"130",heatVapor:"630",ionFirst:"840",ionSecond:"1600",meltPt:3033,mwt:190.23,oxidState:"4"},{name:"Iridium",id:77,groups:["transition","metal"],boilPt:4130,calcAtomRad:180,condElectric:"21",condThermal:"150",density:22.56,electroneg:2.2,empAtomRad:135,heatFusion:"26",heatSpecific:"131",heatVapor:"560",ionFirst:"880",ionSecond:"1600",meltPt:2446,mwt:192.22,oxidState:"3 4"},{name:"Platinum",id:78,groups:["transition","metal"],boilPt:3825,calcAtomRad:177,condElectric:"9.4",condThermal:"72",density:21.46,electroneg:2.28,empAtomRad:135,heatFusion:"20",heatSpecific:"133",heatVapor:"490",ionFirst:"870",ionSecond:"1791",meltPt:1768.3,mwt:195.08,oxidState:"2 4"},{name:"Gold",id:79,groups:["transition","metal"],boilPt:2970,calcAtomRad:174,condElectric:"45",condThermal:"320",density:19.282,electroneg:2.54,empAtomRad:135,heatFusion:"12.5",heatSpecific:"129.1",heatVapor:"330",ionFirst:"890.1",ionSecond:"1980",meltPt:1064.18,mwt:196.97,oxidState:"3"},{name:"Mercury",id:80,groups:["transition","metal"],boilPt:356.73,calcAtomRad:171,condElectric:"1.0",condThermal:"8.3",density:13.5336,electroneg:2,empAtomRad:150,heatFusion:"2.29",heatSpecific:"139.5",heatVapor:"59.2",ionFirst:"1007.1",ionSecond:"1810",meltPt:-38.83,mwt:200.59,oxidState:"1 2"},{name:"Thallium",id:81,groups:["post_transition","metal"],boilPt:1473,calcAtomRad:156,condElectric:"6.7",condThermal:"46",density:11.85,electroneg:1.62,empAtomRad:190,heatFusion:"4.2",heatSpecific:"129",heatVapor:"165",ionFirst:"589.4",ionSecond:"1971",meltPt:304,mwt:204.38,oxidState:"1 3"},{name:"Lead",id:82,groups:["post_transition","metal"],boilPt:1749,calcAtomRad:154,condElectric:"4.8",condThermal:"35",density:11.342,electroneg:1.87,empAtomRad:180,heatFusion:"4.77",heatSpecific:"127",heatVapor:"178",ionFirst:"715.6",ionSecond:"1450.5",meltPt:327.46,mwt:207.2,oxidState:"2 4"},{name:"Bismuth",id:83,groups:["post_transition","metal"],boilPt:1564,calcAtomRad:143,condElectric:"0.77",condThermal:"-",density:9.807,electroneg:2.02,empAtomRad:160,heatFusion:"10.9",heatSpecific:"122",heatVapor:"160",ionFirst:"703",ionSecond:"1610",meltPt:271.5,mwt:208.98,oxidState:"3"},{name:"Polonium",id:84,groups:["post_transition","metal"],boilPt:962,calcAtomRad:135,condElectric:"2.3",condThermal:"-",density:9.32,electroneg:2,empAtomRad:190,heatFusion:"13",heatSpecific:"-",heatVapor:"100",ionFirst:"812.1",ionSecond:"-",meltPt:254,mwt:208.98,oxidState:"-2 2 4"},{name:"Astatine",id:85,groups:["metalloid"],boilPt:230,calcAtomRad:127,condElectric:"-",condThermal:"2",density:7,electroneg:2.2,empAtomRad:"-",heatFusion:"6",heatSpecific:"-",heatVapor:"40",ionFirst:"890",ionSecond:"-",meltPt:302,mwt:209.99,oxidState:"-1 1"},{name:"Radon",id:86,groups:["noble","nonmetal"],boilPt:-61.7,calcAtomRad:120,condElectric:"-",condThermal:"0.00361",density:0.00973,electroneg:2.2,empAtomRad:"-",heatFusion:"3",heatSpecific:"93,65",heatVapor:"17",ionFirst:"1037",ionSecond:"-",meltPt:-71,mwt:222.02,oxidState:"2"},{name:"Francium",id:87,groups:["alkali","metal"],boilPt:620,calcAtomRad:"-",condElectric:"-",condThermal:"-",density:1.87,electroneg:0.79,empAtomRad:"-",heatFusion:"2",heatSpecific:"-",heatVapor:"65",ionFirst:"380",ionSecond:"-",meltPt:8,mwt:223.02,oxidState:"1"},{name:"Radium",id:88,groups:["alkaline","metal"],boilPt:1737,calcAtomRad:"-",condElectric:"1.0",condThermal:"19",density:5.5,electroneg:0.9,empAtomRad:215,heatFusion:"8",heatSpecific:"92.0",heatVapor:"125",ionFirst:"509.3",ionSecond:"979.0",meltPt:700,mwt:226.03,oxidState:"2"},{name:"Actinium",id:89,groups:["actinoid","metal"],boilPt:3198,calcAtomRad:"-",condElectric:"-",condThermal:"12",density:10.07,electroneg:1.1,empAtomRad:195,heatFusion:"14",heatSpecific:"120",heatVapor:"400",ionFirst:"499",ionSecond:"1170",meltPt:1050,mwt:227.03,oxidState:"3"},{name:"Thorium",id:90,groups:["actinoid","metal"],boilPt:4788,calcAtomRad:"-",condElectric:"6.7",condThermal:"54",density:11.72,electroneg:1.3,empAtomRad:180,heatFusion:"16",heatSpecific:"118",heatVapor:"530",ionFirst:"587",ionSecond:"1110",meltPt:1842,mwt:232.04,oxidState:"4"},{name:"Protactinium",id:91,groups:["actinoid","metal"],boilPt:4027,calcAtomRad:"-",condElectric:"5.6",condThermal:"47",density:15.37,electroneg:1.5,empAtomRad:180,heatFusion:"15",heatSpecific:"99.1",heatVapor:"470",ionFirst:"568",ionSecond:"-",meltPt:1568,mwt:231.04,oxidState:"5"},{name:"Uranium",id:92,groups:["actinoid","metal"],boilPt:4131,calcAtomRad:"-",condElectric:"3.6",condThermal:"27",density:18.95,electroneg:1.38,empAtomRad:175,heatFusion:"14",heatSpecific:"116",heatVapor:"420",ionFirst:"597.6",ionSecond:"1420",meltPt:1132.2,mwt:238.03,oxidState:"6"},{name:"Neptunium",id:93,groups:["actinoid","metal"],boilPt:4000,calcAtomRad:"-",condElectric:"0.83",condThermal:"6",density:20.45,electroneg:1.38,empAtomRad:175,heatFusion:"10",heatSpecific:"-",heatVapor:"335",ionFirst:"604.5",ionSecond:"-",meltPt:644,mwt:237.05,oxidState:"5"},{name:"Plutonium",id:94,groups:["actinoid","metal"],boilPt:3228,calcAtomRad:"-",condElectric:"0.67",condThermal:"6",density:19.85,electroneg:1.28,empAtomRad:175,heatFusion:"-",heatSpecific:"-",heatVapor:"325",ionFirst:"584.7",ionSecond:"-",meltPt:639.4,mwt:244.06,oxidState:"4"},{name:"Americium",id:95,groups:["actinoid","metal"],boilPt:2607,calcAtomRad:"-",condElectric:"-",condThermal:"10",density:13.69,electroneg:1.13,empAtomRad:175,heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"578",ionSecond:"-",meltPt:1176,mwt:243.06,oxidState:"3"},{name:"Curium",id:96,groups:["actinoid","metal"],boilPt:3110,calcAtomRad:"-",condElectric:"-",condThermal:"-",density:13.51,electroneg:1.28,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"581",ionSecond:"-",meltPt:1340,mwt:247.07,oxidState:"3"},{name:"Berkelium",id:97,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"10",density:14.79,electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"601",ionSecond:"-",meltPt:1050,mwt:247.07,oxidState:"3"},{name:"Californium",id:98,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:15.1,electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"608",ionSecond:"-",meltPt:986,mwt:251.08,oxidState:"3"},{name:"Einsteinium",id:99,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"619",ionSecond:"-",meltPt:860,mwt:252.08,oxidState:"3"},{name:"Fermium",id:100,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"627",ionSecond:"-",meltPt:1527,mwt:257.1,oxidState:"3"},{name:"Mendelevium",id:101,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"635",ionSecond:"-",meltPt:827,mwt:258.1,oxidState:"3"},{name:"Nobelium",id:102,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"642",ionSecond:"-",meltPt:827,mwt:259.1,oxidState:"2"},{name:"Lawrencium",id:103,groups:["actinoid","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:1.3,empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"470",ionSecond:"-",meltPt:1627,mwt:262.11,oxidState:"3"},{name:"Rutherfordium",id:104,groups:["transition","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"580",ionSecond:"-",meltPt:"-",mwt:267.12,oxidState:"4"},{name:"Dubnium",id:105,groups:["transition","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:270.13,oxidState:"5"},{name:"Seaborgium",id:106,groups:["transition","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:269.13,oxidState:"6"},{name:"Bohrium",id:107,groups:["transition","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:279.13,oxidState:"7"},{name:"Hassium",id:108,groups:["transition","metal"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:269.13,oxidState:"8"},{name:"Meitnerium",id:109,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:278.16,oxidState:"-"},{name:"Darmstadtium",id:110,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:281.17,oxidState:"-"},{name:"Roentgenium",id:111,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:281.17,oxidState:"-"},{name:"Copernicium",id:112,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:285.18,oxidState:"-"},{name:"Nihonium",id:113,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:286.18,oxidState:"-"},{name:"Flerovium",id:114,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:289.19,oxidState:"-"},{name:"Moscovium",id:115,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:289.2,oxidState:"-"},{name:"Livermorium",id:116,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:293.2,oxidState:"-"},{name:"Tennessine",id:117,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",electroneg:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:293.21,oxidState:"-"},{name:"Oganesson",id:118,groups:["-"],boilPt:"-",calcAtomRad:"-",condElectric:"-",condThermal:"-",density:"-",empAtomRad:"-",heatFusion:"-",heatSpecific:"-",heatVapor:"-",ionFirst:"-",ionSecond:"-",meltPt:"-",mwt:294.21,oxidState:"-"},{name:"-",id:"57-71"},{name:"-",id:"89-103"}
  ]
  export default data;