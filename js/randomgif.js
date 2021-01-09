// randomgif.js
// with help from the Man
// credit to the gifs go to their creators
// carsuki '20

// gif list
const randomgifs = [
  {
    name: "Omoide Poroporo",
    gif: "img/gif/1.gif",
    link: "https://myanimelist.net/anime/1029/Omoide_Poroporo",
  },
  {
    name: "Unknown",
    gif: "img/gif/2.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/3.gif",
    link: "",
  },
  {
    name: "Yokohama Kaidashi Kikou",
    gif: "img/gif/4.gif",
    link: "https://myanimelist.net/anime/975/Yokohama_Kaidashi_Kikou",
  },
  {
    name: "Megazone 23",
    gif: "img/gif/5.gif",
    link: "https://myanimelist.net/anime/1935/Megazone_23",
  },
  {
    name: "Ghost in the Shell",
    gif: "img/gif/6.gif",
    link: "https://myanimelist.net/anime/43/Koukaku_Kidoutai",
  },
  {
    name: "Pokemon",
    gif: "img/gif/7.gif",
    link: "https://myanimelist.net/anime/527/Pokemon",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/8.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "Unknown",
    gif: "img/gif/9.gif",
    link: "",
  },
  {
    name: "My Neighbour Totoro",
    gif: "img/gif/10.gif",
    link: "https://myanimelist.net/anime/523/Tonari_no_Totoro",
  },
  {
    name: "Unknown",
    gif: "img/gif/11.gif",
    link: "",
  },
  {
    name: "fitzfactor",
    gif: "img/gif/12.gif",
    link: "https://fitzfactor.com",
  },
  {
    name: "Unknown",
    gif: "img/gif/13.gif",
    link: "",
  },
  {
    name: "Omoide Poroporo",
    gif: "img/gif/14.gif",
    link: "https://myanimelist.net/anime/1029/Omoide_Poroporo",
  },
  {
    name: "grimciitys",
    gif: "img/gif/15.gif",
    link: "https://deviantart.com/grimciitys",
  },
  {
    name: "Devilman: Tanjou-hen",
    gif: "img/gif/16.gif",
    link: "https://myanimelist.net/anime/2354/Devilman__Tanjou-hen",
  },
  {
    name: "Megazone 23",
    gif: "img/gif/17.gif",
    link: "https://myanimelist.net/anime/1935/Megazone_23",
  },
  {
    name: "BADCODEC",
    gif: "img/gif/18.gif",
    link: "https://giphy.com/badcodec",
  },
  {
    name: "Unknown",
    gif: "img/gif/19.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/20.gif",
    link: "",
  },
  {
    name: "Gake no Ue no Ponyo",
    gif: "img/gif/21.gif",
    link: "https://myanimelist.net/anime/2890/Gake_no_Ue_no_Ponyo",
  },
  {
    name: "Megazone 23",
    gif: "img/gif/22.gif",
    link: "https://myanimelist.net/anime/1935/Megazone_23",
  },
  {
    name: "Unknown",
    gif: "img/gif/23.gif",
    link: "",
  },
  {
    name: "Cyber City Oedo 808",
    gif: "img/gif/24.gif",
    link: "https://myanimelist.net/anime/1352/Cyber_City_Oedo_808",
  },
  {
    name: "The End of Evangelion",
    gif: "img/gif/25.gif",
    link:
      "https://myanimelist.net/anime/32/Neon_Genesis_Evangelion__The_End_of_Evangelion",
  },
  {
    name: "Fate/Zero",
    gif: "img/gif/26.gif",
    link: "https://myanimelist.net/anime/10087/Fate_Zero",
  },
  {
    name: "Serial Experiments Lain",
    gif: "img/gif/27.gif",
    link: "https://myanimelist.net/anime/339/Serial_Experiments_Lain",
  },
  {
    name: "Angel Cop",
    gif: "img/gif/28.gif",
    link: "https://myanimelist.net/anime/1351/Angel_Cop",
  },
  {
    name: "supyrb",
    gif: "img/gif/29.gif",
    link: "https://twitter.com/supyrb",
  },
  {
    name: "Unknown",
    gif: "img/gif/30.gif",
    link: "",
  },
  {
    name: "1041uuu",
    gif: "img/gif/31.gif",
    link: "https://1041uuu.tumblr.com/",
  },
  {
    name: "Kimi ni Todoke",
    gif: "img/gif/32.gif",
    link: "https://myanimelist.net/anime/6045/Kimi_ni_Todoke",
  },
  {
    name: "Unknown",
    gif: "img/gif/33.gif",
    link: "",
  },
  {
    name: "Golden Boy",
    gif: "img/gif/34.gif",
    link: "https://myanimelist.net/anime/268/Golden_Boy",
  },
  {
    name: "Unknown",
    gif: "img/gif/35.gif",
    link: "",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/36.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "Yokohama Kaidashi Kikou",
    gif: "img/gif/37.gif",
    link: "https://myanimelist.net/anime/975/Yokohama_Kaidashi_Kikou",
  },
  {
    name: "kirokaze",
    gif: "img/gif/38.gif",
    link: "https://deviantart.com/kirokaze/",
  },
  {
    name: "Valenberg",
    gif: "img/gif/39.gif",
    link: "https://valenberg.tumblr.com",
  },
  {
    name: "mienar",
    gif: "img/gif/40.gif",
    link: "https://mienar.tumblr.com",
  },
  {
    name: "mienar",
    gif: "img/gif/41.gif",
    link: "https://mienar.tumblr.com",
  },
  {
    name: "mienar",
    gif: "img/gif/42.gif",
    link: "https://mienar.tumblr.com",
  },
  {
    name: "Unknown",
    gif: "img/gif/43.gif",
    link: "",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/44.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "Dirty Pair",
    gif: "img/gif/45.gif",
    link: "https://myanimelist.net/anime/424/Dirty_Pair",
  },
  {
    name: "Unknown",
    gif: "img/gif/46.gif",
    link: "",
  },
  {
    name: "Motocross Saito",
    gif: "img/gif/47.gif",
    link: "https://motocross-arts.tumblr.com",
  },
  {
    name: "Unknown",
    gif: "img/gif/48.gif",
    link: "",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/49.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "1041uuu",
    gif: "img/gif/50.gif",
    link: "https://1041uuu.tumblr.com/",
  },
  {
    name: "Anas Abdin",
    gif: "img/gif/51.gif",
    link: "https://anasabdin.tumblr.com/",
  },
  {
    name: "Violet Evergarden",
    gif: "img/gif/52.gif",
    link: "https://myanimelist.net/anime/33352/Violet_Evergarden",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/53.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "1041uuu",
    gif: "img/gif/54.gif",
    link: "https://1041uuu.tumblr.com/",
  },
  {
    name: "VA-11 HALL-A",
    gif: "img/gif/55.gif",
    link: "https://waifubartending.com",
  },
  {
    name: "Unknown",
    gif: "img/gif/56.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/57.gif",
    link: "",
  },
  {
    name: "Mike Black",
    gif: "img/gif/58.gif",
    link: "https://twitter.com/kurtruslfanclub/",
  },
  {
    name: "198X",
    gif: "img/gif/59.gif",
    link: "https://store.steampowered.com/app/1086010/198X/",
  },
  {
    name: "Mark Ferrari",
    gif: "img/gif/60.gif",
    link: "https://markferrari.com",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/61.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/62.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "The Garden of Words",
    gif: "img/gif/63.gif",
    link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa",
  },
  {
    name: "lennsan",
    gif: "img/gif/64.gif",
    link: "https://lennsan.tumblr.com",
  },
  {
    name: "Valenberg for VirtuaVerse",
    gif: "img/gif/65.gif",
    link: "https://valenberg.tumblr.com",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/gif/66.gif",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
  },
  {
    name: "Valenberg",
    gif: "img/gif/67.gif",
    link: "https://valenberg.tumblr.com",
  },
  {
    name: "Karigurashi no Arietty",
    gif: "img/gif/68.gif",
    link: "https://myanimelist.net/anime/7711/Karigurashi_no_Arrietty",
  },
  {
    name: "snatti",
    gif: "img/gif/69.gif",
    link: "https://www.deviantart.com/snatti89/",
  },
  {
    name: "einsbern",
    gif: "img/gif/70.gif",
    link: "https://einsbern.tumblr.com/",
  },
  {
    name: "My Neighbour Totoro",
    gif: "img/gif/71.gif",
    link: "https://myanimelist.net/anime/523/Tonari_no_Totoro",
  },
  {
    name: "KJD",
    gif: "img/gif/72.gif",
    link: "https://artifiziell.tumblr.com",
  },
  {
    name: "Valenberg",
    gif: "img/gif/73.gif",
    link: "https://valenberg.tumblr.com",
  },
  {
    name: "Peanuts",
    gif: "img/gif/74.gif",
    link: "https://www.youtube.com/watch?v=gvqmLCrrbZE",
  },
  {
    name: "JAVITOZEEK",
    gif: "img/gif/75.gif",
    link: "https://giphy.com/channel/JAVITOZEEK",
  },
  {
    name: "Valenberg",
    gif: "img/gif/76.gif",
    link: "https://valenberg.tumblr.com",
  },
  {
    name: "yaspes",
    gif: "img/gif/77.gif",
    link: "https://yaspes.tumblr.com",
  },
  {
    name: "yaspes",
    gif: "img/gif/77.gif",
    link: "https://yaspes.tumblr.com",
  },
  {
    name: "Sorapoi",
    gif: "img/gif/78.gif",
    link: "https://www.pixiv.net/en/users/25185071",
  },
  {
    name: "Unknown",
    gif: "img/gif/79.gif",
    link: "",
  },
  {
    name: "arkhai2",
    gif: "img/gif/80.gif",
    link: "https://reddit.com/u/arkhai2",
  },
  {
    name: "zealotlee",
    gif: "img/gif/81.gif",
    link: "https://reddit.com/u/zealotlee",
  },
  {
    name: "Patlabor: The Movie",
    gif: "img/gif/82.gif",
    link:
      "https://myanimelist.net/anime/1095/Kidou_Keisatsu_Patlabor_the_Movie",
  },
  {
    name: "Sonic the Hedgehog: The Movie",
    gif: "img/gif/83.gif",
    link:
      "https://myanimelist.net/anime/2263/Sonic%E2%98%85the%E2%98%85Hedgehog",
  },
  {
    name: "Unknown",
    gif: "img/gif/84.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/85.gif",
    link: "",
  },
  {
    name: "7onsa",
    gif: "img/gif/86.gif",
    link:
      "https://7onsa.tumblr.com/post/622259490462613504/%E5%B9%B4%E4%B8%AD%E7%84%A1%E4%BC%91",
  },
  {
    name: "mienar",
    gif: "img/gif/87.gif",
    link: "https://mienar.tumblr.com",
  },
  {
    name: "BenAdrift",
    gif: "img/gif/88.gif",
    link: "https://benadrift.tumblr.com/post/188618748668/rainy-arcade",
  },
  {
    name: "Cowboy Bebop",
    gif: "img/gif/89.gif",
    link: "https://myanimelist.net/anime/1/Cowboy_Bebop",
  },
  {
    name: "Akira",
    gif: "img/gif/90.gif",
    link: "https://myanimelist.net/anime/47/Akira",
  },
  {
    name: "flooko",
    gif: "img/gif/91.gif",
    link: "https://www.instagram.com/flooko/",
  },
  {
    name: "Unknown",
    gif: "img/gif/92.gif",
    link: "",
  },
  {
    name: "Blade Runner",
    gif: "img/gif/93.gif",
    link: "https://www.imdb.com/title/tt0083658/",
  },
  {
    name: "Unknown",
    gif: "img/gif/94.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/95.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/96.gif",
    link: "",
  },
  {
    name: "Lemon Angel",
    gif: "img/gif/97.gif",
    link: "https://myanimelist.net/anime/3259/Lemon_Angel_1988",
  },
  {
    name: "Shounan Bakosouzoku",
    gif: "img/gif/98.gif",
    link: "https://myanimelist.net/anime/2463/Shounan_Bakusouzoku",
  },
  {
    name: "Unknown",
    gif: "img/gif/99.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/99.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/100.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/101.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/102.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/103.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/104.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/105.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/106.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/107.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/108.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/109.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/110.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/111.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/112.gif",
    link: "",
  },
  {
    name: "Unknown",
    gif: "img/gif/113.gif",
    link: "",
  },
  {
    name: "A-Girl",
    gif: "img/gif/114.gif",
    link: "https://myanimelist.net/anime/5447/A-Girl",
  },
  {
    name: "Nineteen 19",
    gif: "img/gif/115.gif",
    link: "https://myanimelist.net/anime/2468/Nineteen_19",
  },
  {
    name: "Download: Devil's Circuit",
    gif: "img/gif/116.gif",
    link: "https://myanimelist.net/anime/3152/Down_Load__Namu_Amida_Butsu_wa_Ai_no_Uta",
  },
  {
    name: "The Kabocha Wine",
    gif: "img/gif/117.gif",
    link: "https://myanimelist.net/anime/3159/The_Kabocha_Wine",
  },
  {
    name: "Download: Devil's Circuit",
    gif: "img/gif/118.gif",
    link: "https://myanimelist.net/anime/3152/Down_Load__Namu_Amida_Butsu_wa_Ai_no_Uta",
  },
  {
    name: "Be-Boy Kidnapp'n Idol",
    gif: "img/gif/119.gif",
    link: "https://myanimelist.net/anime/2220/Be-Boy_Kidnappn_Idol",
  },
  {
    name: "The Irresponsible Captain Tylor",
    gif: "img/gif/120.gif",
    link: "https://myanimelist.net/anime/569/Musekinin_Kanchou_Tylor",
  },
  {
    name: "The Irresponsible Captain Tylor",
    gif: "img/gif/121.gif",
    link: "https://myanimelist.net/anime/569/Musekinin_Kanchou_Tylor",
  },
  {
    name: "Purple Eyes in the Dark",
    gif: "img/gif/122.gif",
    link: "https://myanimelist.net/anime/9509/Yami_no_Purple_Eye",
  },
  {
    name: "Shounan Bakosouzoku",
    gif: "img/gif/123.gif",
    link: "https://myanimelist.net/anime/2463/Shounan_Bakusouzoku",
  },
  {
    name: "Shounan Bakosouzoku",
    gif: "img/gif/124.gif",
    link: "https://myanimelist.net/anime/2463/Shounan_Bakusouzoku",
  },
  {
    name: "Tokimeki Tonight",
    gif: "img/gif/125.gif",
    link: "https://myanimelist.net/anime/3125/Tokimeki_Tonight",
  },
  {
    name: "r-i-v-e-r",
    gif: "img/gif/126.gif",
    link: "https://r-i-v-e-r.tumblr.com/post/167529417812/i-want-you-to-love-winter-as-i-do-because-between",
  }
];

// count number of gifs
var gifCount = (randomgifs, Object.keys(randomgifs).length);
