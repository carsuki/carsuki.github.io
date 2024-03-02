// randomgif.js
// with help from the Man
// credit to the gifs go to their creators
// carsuki '20

// gif list
const randomgifs = [
  {
    name: "Omoide Poroporo",
    gif: "img/mp4/1.mp4",
    link: "https://myanimelist.net/anime/1029/Omoide_Poroporo",
    number: "1",
  },
  {
    name: "Unknown",
    gif: "img/mp4/2.mp4",
    link: "",
    number: "2",
  },
  {
    name: "Unknown",
    gif: "img/mp4/3.mp4",
    link: "",
    number: "3",
  },
  {
    name: "Yokohama Kaidashi Kikou",
    gif: "img/mp4/4.mp4",
    link: "https://myanimelist.net/anime/975/Yokohama_Kaidashi_Kikou",
    number: "4",
  },
  {
    name: "Megazone 23",
    gif: "img/mp4/5.mp4",
    link: "https://myanimelist.net/anime/1935/Megazone_23",
    number: "5",
  },
  {
    name: "Ghost in the Shell",
    gif: "img/mp4/6.mp4",
    link: "https://myanimelist.net/anime/43/Koukaku_Kidoutai",
    number: "6",
  },
  {
    name: "Pokemon",
    gif: "img/mp4/7.mp4",
    link: "https://myanimelist.net/anime/527/Pokemon",
    number: "7",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/8.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "8",
  },
  {
    name: "Unknown",
    gif: "img/mp4/9.mp4",
    link: "",
    number: "9",
  },
  {
    name: "My Neighbour Totoro",
    gif: "img/mp4/10.mp4",
    link: "https://myanimelist.net/anime/523/Tonari_no_Totoro",
    number: "10",
  },
  {
    name: "Unknown",
    gif: "img/mp4/11.mp4",
    link: "",
    number: "11",
  },
  
  {
    name: "Unknown",
    gif: "img/mp4/13.mp4",
    link: "",
    number: "13",
  },
  {
    name: "Omoide Poroporo",
    gif: "img/mp4/14.mp4",
    link: "https://myanimelist.net/anime/1029/Omoide_Poroporo",
    number: "14",
  },
  {
    name: "Devilman: Tanjou-hen",
    gif: "img/mp4/16.mp4",
    link: "https://myanimelist.net/anime/2354/Devilman__Tanjou-hen",
    number: "16",
  },
  {
    name: "Megazone 23",
    gif: "img/mp4/17.mp4",
    link: "https://myanimelist.net/anime/1935/Megazone_23",
    number: "17",
  },
  {
    name: "BADCODEC",
    gif: "img/mp4/18.mp4",
    link: "https://giphy.com/badcodec",
    number: "18",
  },
  {
    name: "Unknown",
    gif: "img/mp4/19.mp4",
    link: "",
    number: "19",
  },
  {
    name: "Gake no Ue no Ponyo",
    gif: "img/mp4/21.mp4",
    link: "https://myanimelist.net/anime/2890/Gake_no_Ue_no_Ponyo",
    number: "21",
  },
  {
    name: "Megazone 23",
    gif: "img/mp4/22.mp4",
    link: "https://myanimelist.net/anime/1935/Megazone_23",
    number: "22",
  },
  {
    name: "Unknown",
    gif: "img/mp4/23.mp4",
    link: "",
    number: "23",
  },
  {
    name: "Cyber City Oedo 808",
    gif: "img/mp4/24.mp4",
    link: "https://myanimelist.net/anime/1352/Cyber_City_Oedo_808",
    number: "24",
  },
  {
    name: "The End of Evangelion",
    gif: "img/mp4/25.mp4",
    link: "https://myanimelist.net/anime/32/Neon_Genesis_Evangelion__The_End_of_Evangelion",
    number: "25",
  },
  {
    name: "Fate/Zero",
    gif: "img/mp4/26.mp4",
    link: "https://myanimelist.net/anime/10087/Fate_Zero",
    number: "26",
  },
  {
    name: "Serial Experiments Lain",
    gif: "img/mp4/27.mp4",
    link: "https://myanimelist.net/anime/339/Serial_Experiments_Lain",
    number: "27",
  },
  {
    name: "Angel Cop",
    gif: "img/mp4/28.mp4",
    link: "https://myanimelist.net/anime/1351/Angel_Cop",
    number: "28",
  },
  {
    name: "Patlabor 2: The Movie",
    gif: "img/mp4/30.mp4",
    link: "https://myanimelist.net/anime/1096/Kidou_Keisatsu_Patlabor_2_the_Movie",
    number: "30",
  },
  {
    name: "1041uuu",
    gif: "img/mp4/31.mp4",
    link: "https://1041uuu.tumblr.com/",
    number: "31",
  },
  {
    name: "Kimi ni Todoke",
    gif: "img/mp4/32.mp4",
    link: "https://myanimelist.net/anime/6045/Kimi_ni_Todoke",
    number: "32",
  },
  {
    name: "Evangelion 1.0: You Are (Not) Alone",
    gif: "img/mp4/33.mp4",
    link: "https://myanimelist.net/anime/2759/Evangelion__10_You_Are_Not_Alone",
    number: "33",
  },
  {
    name: "Golden Boy",
    gif: "img/mp4/34.mp4",
    link: "https://myanimelist.net/anime/268/Golden_Boy",
    number: "34",
  },
  {
    name: "Unknown",
    gif: "img/mp4/35.mp4",
    link: "",
    number: "35",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/36.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "36",
  },
  {
    name: "Yokohama Kaidashi Kikou",
    gif: "img/mp4/37.mp4",
    link: "https://myanimelist.net/anime/975/Yokohama_Kaidashi_Kikou",
    number: "37",
  },
  {
    name: "kirokaze",
    gif: "img/mp4/38.mp4",
    link: "https://deviantart.com/kirokaze/",
    number: "38",
  },
  {
    name: "Valenberg",
    gif: "img/mp4/39.mp4",
    link: "https://valenberg.tumblr.com/post/110835321839/musicvideo-computer-corner-by-valenberg-art-and",
    number: "39",
  },
  {
    name: "mienar",
    gif: "img/mp4/40.mp4",
    link: "https://mienar.tumblr.com",
    number: "40",
  },
  {
    name: "mienar",
    gif: "img/mp4/41.mp4",
    link: "https://mienar.tumblr.com",
    number: "41",
  },
  {
    name: "mienar",
    gif: "img/mp4/42.mp4",
    link: "https://mienar.tumblr.com",
    number: "42",
  },
  {
    name: "Unknown",
    gif: "img/mp4/43.mp4",
    link: "",
    number: "43",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/44.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "44",
  },
  {
    name: "Dirty Pair",
    gif: "img/mp4/45.mp4",
    link: "https://myanimelist.net/anime/424/Dirty_Pair",
    number: "45",
  },
  {
    name: "Unknown",
    gif: "img/mp4/46.mp4",
    link: "",
    number: "46",
  },
  {
    name: "Motocross Saito",
    gif: "img/mp4/47.mp4",
    link: "https://motocross-arts.tumblr.com",
    number: "47",
  },
  {
    name: "Unknown",
    gif: "img/mp4/48.mp4",
    link: "",
    number: "48",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/49.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "49",
  },
  {
    name: "1041uuu",
    gif: "img/mp4/50.mp4",
    link: "https://1041uuu.tumblr.com/",
    number: "50",
  },
  {
    name: "Anas Abdin",
    gif: "img/mp4/51.mp4",
    link: "https://anasabdin.tumblr.com/",
    number: "51",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/53.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "53",
  },
  {
    name: "1041uuu",
    gif: "img/mp4/54.mp4",
    link: "https://1041uuu.tumblr.com/",
    number: "54",
  },
  {
    name: "VA-11 HALL-A",
    gif: "img/mp4/55.mp4",
    link: "https://waifubartending.com",
    number: "55",
  },
  {
    name: "Unknown",
    gif: "img/mp4/56.mp4",
    link: "",
    number: "56",
  },
  {
    name: "198X",
    gif: "img/mp4/59.mp4",
    link: "https://store.steampowered.com/app/1086010/198X/",
    number: "59",
  },
  {
    name: "Mark Ferrari",
    gif: "img/mp4/60.mp4",
    link: "https://markferrari.com",
    number: "60",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/61.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "61",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/62.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "62",
  },
  {
    name: "The Garden of Words",
    gif: "img/mp4/63.mp4",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
    number: "63",
  },
  {
    name: "Valenberg",
    gif: "img/mp4/65.mp4",
    link: "https://valenberg.tumblr.com",
    number: "65",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/mp4/66.mp4",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    number: "66",
  },
  {
    name: "Valenberg",
    gif: "img/mp4/67.mp4",
    link: "https://valenberg.tumblr.com",
    number: "67",
  },
  {
    name: "Karigurashi no Arietty",
    gif: "img/mp4/68.mp4",
    link: "https://myanimelist.net/anime/7711/Karigurashi_no_Arrietty",
    number: "68",
  },
  {
    name: "einsbern",
    gif: "img/mp4/70.mp4",
    link: "https://einsbern.tumblr.com/",
    number: "70",
  },
  {
    name: "My Neighbour Totoro",
    gif: "img/mp4/71.mp4",
    link: "https://myanimelist.net/anime/523/Tonari_no_Totoro",
    number: "71",
  },
  {
    name: "KJD",
    gif: "img/mp4/72.mp4",
    link: "https://artifiziell.tumblr.com",
    number: "72",
  },
  {
    name: "Peanuts",
    gif: "img/mp4/74.mp4",
    link: "https://www.youtube.com/watch?v=gvqmLCrrbZE",
    number: "74",
  },


  {
    name: "Unknown",
    gif: "img/mp4/79.mp4",
    link: "",
    number: "79",
  },
  
  {
    name: "zealotlee",
    gif: "img/mp4/81.mp4",
    link: "https://reddit.com/u/zealotlee",
    number: "81",
  },
  {
    name: "Patlabor: The Movie",
    gif: "img/mp4/82.mp4",
    link: "https://myanimelist.net/anime/1095/Kidou_Keisatsu_Patlabor_the_Movie",
    number: "82",
  },
  {
    name: "Sonic the Hedgehog: The Movie",
    gif: "img/mp4/83.mp4",
    link: "https://myanimelist.net/anime/2263/Sonic%E2%98%85the%E2%98%85Hedgehog",
    number: "83",
  },
  {
    name: "Unknown",
    gif: "img/mp4/84.mp4",
    link: "",
    number: "84",
  },
  {
    name: "mienar",
    gif: "img/mp4/87.mp4",
    link: "https://mienar.tumblr.com",
    number: "87",
  },
  {
    name: "BenAdrift",
    gif: "img/mp4/88.mp4",
    link: "https://benadrift.tumblr.com/post/188618748668/rainy-arcade",
    number: "88",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/mp4/89.mp4",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    number: "89",
  },
  {
    name: "Akira",
    gif: "img/mp4/90.mp4",
    link: "https://myanimelist.net/anime/47/Akira",
    number: "90",
  },
  {
    name: "Unknown",
    gif: "img/mp4/92.mp4",
    link: "",
    number: "92",
  },
  {
    name: "Blade Runner",
    gif: "img/mp4/93.mp4",
    link: "https://www.imdb.com/title/tt0083658/",
    number: "93",
  },

  {
    name: "Lemon Angel",
    gif: "img/mp4/97.mp4",
    link: "https://myanimelist.net/anime/3259/Lemon_Angel_1988",
    number: "97",
  },
  {
    name: "Shounan Bakosouzoku",
    gif: "img/mp4/98.mp4",
    link: "https://myanimelist.net/anime/2463/Shounan_Bakusouzoku",
    number: "98",
  },
  {
    name: "Unknown",
    gif: "img/mp4/99.mp4",
    link: "",
    number: "99",
  },
  {
    name: "Unknown",
    gif: "img/mp4/100.mp4",
    link: "",
    number: "100",
  },
  {
    name: "Unknown",
    gif: "img/mp4/101.mp4",
    link: "",
    number: "101",
  },
  {
    name: "Unknown",
    gif: "img/mp4/102.mp4",
    link: "",
    number: "102",
  },
  {
    name: "Unknown",
    gif: "img/mp4/103.mp4",
    link: "",
    number: "103",
  },
  {
    name: "Unknown",
    gif: "img/mp4/104.mp4",
    link: "",
    number: "104",
  },
  
  {
    name: "Patlabor",
    gif: "img/mp4/106.mp4",
    link: "https://myanimelist.net/anime/1288/Kidou_Keisatsu_Patlabor",
    number: "106",
  },
  {
    name: "Akira",
    gif: "img/mp4/107.mp4",
    link: "https://myanimelist.net/anime/47/Akira",
    number: "107",
  },
  {
    name: "Unknown",
    gif: "img/mp4/108.mp4",
    link: "",
    number: "108",
  },
  {
    name: "Unknown",
    gif: "img/mp4/109.mp4",
    link: "",
    number: "109",
  },
  {
    name: "Unknown",
    gif: "img/mp4/110.mp4",
    link: "",
    number: "110",
  },
  {
    name: "Unknown",
    gif: "img/mp4/111.mp4",
    link: "",
    number: "111",
  },
  {
    name: "Unknown",
    gif: "img/mp4/112.mp4",
    link: "",
    number: "112",
  },
  {
    name: "Unknown",
    gif: "img/mp4/113.mp4",
    link: "",
    number: "113",
  },
  {
    name: "A-Girl",
    gif: "img/mp4/114.mp4",
    link: "https://myanimelist.net/anime/5447/A-Girl",
    number: "114",
  },
  {
    name: "Nineteen 19",
    gif: "img/mp4/115.mp4",
    link: "https://myanimelist.net/anime/2468/Nineteen_19",
    number: "115",
  },
  {
    name: "Download: Devil's Circuit",
    gif: "img/mp4/116.mp4",
    link: "https://myanimelist.net/anime/3152/Down_Load__Namu_Amida_Butsu_wa_Ai_no_Uta",
    number: "116",
  },
  {
    name: "The Kabocha Wine",
    gif: "img/mp4/117.mp4",
    link: "https://myanimelist.net/anime/3159/The_Kabocha_Wine",
    number: "117",
  },
  {
    name: "Download: Devil's Circuit",
    gif: "img/mp4/118.mp4",
    link: "https://myanimelist.net/anime/3152/Down_Load__Namu_Amida_Butsu_wa_Ai_no_Uta",
    number: "118",
  },
  {
    name: "Be-Boy Kidnapp'n Idol",
    gif: "img/mp4/119.mp4",
    link: "https://myanimelist.net/anime/2220/Be-Boy_Kidnappn_Idol",
    number: "119",
  },
  {
    name: "The Irresponsible Captain Tylor",
    gif: "img/mp4/120.mp4",
    link: "https://myanimelist.net/anime/569/Musekinin_Kanchou_Tylor",
    number: "120",
  },
  {
    name: "The Irresponsible Captain Tylor",
    gif: "img/mp4/121.mp4",
    link: "https://myanimelist.net/anime/569/Musekinin_Kanchou_Tylor",
    number: "121",
  },
  {
    name: "Purple Eyes in the Dark",
    gif: "img/mp4/122.mp4",
    link: "https://myanimelist.net/anime/9509/Yami_no_Purple_Eye",
    number: "122",
  },
  {
    name: "Shounan Bakosouzoku",
    gif: "img/mp4/123.mp4",
    link: "https://myanimelist.net/anime/2463/Shounan_Bakusouzoku",
    number: "123",
  },
  {
    name: "Shounan Bakosouzoku",
    gif: "img/mp4/124.mp4",
    link: "https://myanimelist.net/anime/2463/Shounan_Bakusouzoku",
    number: "124",
  },
  {
    name: "Tokimeki Tonight",
    gif: "img/mp4/125.mp4",
    link: "https://myanimelist.net/anime/3125/Tokimeki_Tonight",
    number: "125",
  },
  {
    name: "r-i-v-e-r",
    gif: "img/mp4/126.mp4",
    link: "https://r-i-v-e-r.tumblr.com/post/167529417812/i-want-you-to-love-winter-as-i-do-because-between",
    number: "126",
  },
  {
    name: "Mark Ferrari",
    gif: "img/mp4/127.mp4",
    link: "https://markferrari.com",
    number: "127",
  },
  {
    name: "Unknown",
    gif: "img/mp4/129.mp4",
    link: "",
    number: "129",
  },
  {
    name: "InuYasha",
    gif: "img/mp4/130.mp4",
    link: "https://myanimelist.net/anime/249/InuYasha",
    number: "130",
  },
  {
    name: "Unknown",
    gif: "img/mp4/131.mp4",
    link: "",
    number: "131",
  },
  {
    name: "InuYasha",
    gif: "img/mp4/132.mp4",
    link: "https://myanimelist.net/anime/249/InuYasha",
    number: "132",
  },
  {
    name: "Unknown",
    gif: "img/mp4/133.mp4",
    link: "",
    number: "133",
  },
  {
    name: "Unknown",
    gif: "img/mp4/135.mp4",
    link: "",
    number: "135",
  },
  {
    name: "Unknown",
    gif: "img/mp4/136.mp4",
    link: "",
    number: "136",
  },
  {
    name: "FLCL",
    gif: "img/mp4/137.mp4",
    link: "https://myanimelist.net/anime/227/FLCL",
    number: "137",
  },
  {
    name: "Ghost in the Shell",
    gif: "img/mp4/138.mp4",
    link: "https://myanimelist.net/anime/43/Koukaku_Kidoutai",
    number: "138",
  },
  {
    name: "Weathering with You",
    gif: "img/mp4/139.mp4",
    link: "https://myanimelist.net/anime/38826/Tenki_no_Ko",
    number: "139",
  },
  {
    name: "Neon Genesis Evangelion",
    gif: "img/mp4/140.mp4",
    link: "https://myanimelist.net/anime/30/Neon_Genesis_Evangelion",
    number: "140",
  },
  {
    name: "Flavours of Youth",
    gif: "img/mp4/141.mp4",
    link: "https://myanimelist.net/anime/37396/Shikioriori",
    number: "141",
  },
  {
    name: "Unknown",
    gif: "img/mp4/142.mp4",
    link: "",
    number: "142",
  },
  {
    name: "Unknown",
    gif: "img/mp4/143.mp4",
    link: "",
    number: "143",
  },
  {
    name: "Unknown",
    gif: "img/mp4/144.mp4",
    link: "",
    number: "144",
  },
  {
    name: "Unknown",
    gif: "img/mp4/145.mp4",
    link: "",
    number: "145",
  },
  {
    name: "Serial Experiments Lain",
    gif: "img/mp4/146.mp4",
    link: "https://myanimelist.net/anime/339/Serial_Experiments_Lain",
    number: "146",
  },
  {
    name: "Sol Bianca",
    gif: "img/mp4/147.mp4",
    link: "https://myanimelist.net/anime/1443/Sol_Bianca",
    number: "147",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/mp4/148.mp4",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    number: "148",
  },
  {
    name: "Unknown",
    gif: "img/mp4/149.mp4",
    link: "",
    number: "149",
  },
  {
    name: "Unknown",
    gif: "img/mp4/150.mp4",
    link: "",
    number: "150",
  },
  {
    name: "Sailor Moon S",
    gif: "img/mp4/151.mp4",
    link: "https://myanimelist.net/anime/532/Bishoujo_Senshi_Sailor_Moon_S",
    number: "151",
  },
  {
    name: "Unknown",
    gif: "img/mp4/152.mp4",
    link: "",
    number: "152",
  },
  {
    name: "Unknown",
    gif: "img/mp4/153.mp4",
    link: "",
    number: "153",
  },
  {
    name: "Unknown",
    gif: "img/mp4/154.mp4",
    link: "",
    number: "154",
  },
  {
    name: "Unknown?",
    gif: "img/mp4/155.mp4",
    link: "http://web.archive.org/web/20130606083014/http://www.kanyewest.com:80/",
    number: "155",
  },
  {
    name: "Unknown",
    gif: "img/mp4/156.mp4",
    link: "",
    number: "156",
  },
  {
    name: "I Dream of Mimi",
    gif: "img/mp4/157.mp4",
    link: "https://myanimelist.net/anime/458/Buttobi_CPU",
    number: "157",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/mp4/158.mp4",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    number: "158",
  },
  {
    name: "Unknown",
    gif: "img/mp4/159.mp4",
    link: "",
    number: "159",
  },
  {
    name: "Rurouni Kenshin",
    gif: "img/mp4/160.mp4",
    link: "https://myanimelist.net/anime/45/Rurouni_Kenshin__Meiji_Kenkaku_Romantan",
    number: "160",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/mp4/161.mp4",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
    number: "161",
  },
  {
    name: "Burn Up! W",
    gif: "img/mp4/162.mp4",
    link: "https://myanimelist.net/anime/769/Burn_Up_W",
    number: "162",
  },
  {
    name: "Sailor Moon",
    gif: "img/mp4/163.mp4",
    link: "https://myanimelist.net/anime/530/Bishoujo_Senshi_Sailor_Moon",
    number: "163",
  },
  {
    name: "Roujin Z",
    gif: "img/mp4/164.mp4",
    link: "https://myanimelist.net/anime/2000/Roujin_Z",
    number: "164",
  },
  {
    name: "5 Centimetres per Second",
    gif: "img/mp4/165.mp4",
    link: "https://myanimelist.net/anime/1689/Byousoku_5_Centimeter",
    number: "165",
  },
  {
    name: "Cat's Eye",
    gif: "img/mp4/166.mp4",
    link: "https://myanimelist.net/anime/2043/Cats_Eye",
    number: "166",
  },
  {
    name: "Battle Angel Alita",
    gif: "img/mp4/167.mp4",
    link: "https://myanimelist.net/anime/1016/Gunnm",
    number: "167",
  },
  {
    name: "Omoide no Marnie",
    gif: "img/mp4/168.mp4",
    link: "https://myanimelist.net/anime/21557/Omoide_no_Marnie",
    number: "168",
  },
  {
    name: "Yu Yu Hakusho",
    gif: "img/mp4/169.mp4",
    link: "https://myanimelist.net/anime/392/Yuu$B!y(BYuu$B!y(BHakusho",
    number: "169",
  },
  {
    name: "AD Police",
    gif: "img/mp4/170.mp4",
    link: "https://myanimelist.net/anime/1346/AD_Police",
    number: "170",
  },
  {
    name: "Outlaw Star",
    gif: "img/mp4/171.mp4",
    link: "https://myanimelist.net/anime/400/Seihou_Bukyou_Outlaw_Star",
    number: "171",
  },
  {
    name: "Omoide Poroporo",
    gif: "img/mp4/172.mp4",
    link: "https://myanimelist.net/anime/1029/Omoide_Poroporo",
    number: "172",
  },
  {
    name: "Maison Ikkoku",
    gif: "img/mp4/173.mp4",
    link: "https://myanimelist.net/anime/1453/Maison_Ikkoku",
    number: "173",
  },
  {
    name: "Hajime no Ippo",
    gif: "img/mp4/174.mp4",
    link: "https://myanimelist.net/anime/263/Hajime_no_Ippo",
    number: "174",
  },
  {
    name: "Unknown",
    gif: "img/mp4/175.mp4",
    link: "",
    number: "175",
  },
  {
    name: "Unknown",
    gif: "img/mp4/176.mp4",
    link: "",
    number: "176",
  },
  {
    name: "Neon Genesis Evangelion",
    gif: "img/mp4/177.mp4",
    link: "https://myanimelist.net/anime/30/Neon_Genesis_Evangelion",
    number: "177",
  },
  {
    name: "Gunsmith Cats",
    gif: "img/mp4/178.mp4",
    link: "https://myanimelist.net/anime/650/Gunsmith_Cats",
    number: "178",
  },
  {
    name: "Perfect Blue",
    gif: "img/mp4/179.mp4",
    link: "https://myanimelist.net/anime/437/Perfect_Blue",
    number: "179",
  },
  {
    name: "Urusei Yatsura",
    gif: "img/mp4/180.mp4",
    link: "https://myanimelist.net/anime/1293/Urusei_Yatsura",
    number: "180",
  },
  {
    name: "Key The Metal Idol",
    gif: "img/mp4/181.mp4",
    link: "https://myanimelist.net/anime/1457/Key_the_Metal_Idol",
    number: "181",
  },
  {
    name: "The Vision of Escaflowne",
    gif: "img/mp4/182.mp4",
    link: "https://myanimelist.net/anime/182/Tenkuu_no_Escaflowne",
    number: "182",
  }
];

// count number of gifs
var gifCount = (randomgifs, Object.keys(randomgifs).length);
