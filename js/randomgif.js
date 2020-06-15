// randomgif.js
// with help from the Man
// credit to the gifs go to their creators
// carsuki '20

// gif list
const randomgifs = [ 
    { 
      name: "Omoide Poroporo",
      gif: "img/gif/1.gif",
      link: "https://myanimelist.net/anime/1029/Omoide_Poroporo"
    },
    { 
      name: "Unknown",
      gif: "img/gif/2.gif",
      link: ""
    },
    { 
      name: "Unknown",
      gif: "img/gif/3.gif",
      link: ""
    },
    { 
      name: "Yokohama Kaidashi Kikou",
      gif: "img/gif/4.gif",
      link: "https://myanimelist.net/anime/975/Yokohama_Kaidashi_Kikou"
    },
    { 
      name: "Megazone 23",
      gif: "img/gif/5.gif",
      link: "https://myanimelist.net/anime/1935/Megazone_23"
    },
    { 
      name: "Ghost in the Shell",
      gif: "img/gif/6.gif",
      link: "https://myanimelist.net/anime/43/Koukaku_Kidoutai"
    },
    { 
      name: "Pokémon",
      gif: "img/gif/7.gif",
      link: "https://myanimelist.net/anime/527/Pokemon"
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/8.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "Unknown",
      gif: "img/gif/9.gif",
      link: ""
    },
    { 
      name: "My Neighbour Totoro",
      gif: "img/gif/10.gif",
      link: "https://myanimelist.net/anime/523/Tonari_no_Totoro"
    },
    { 
      name: "Unknown",
      gif: "img/gif/11.gif",
      link: ""
    },
    { 
      name: "fitzfactor",
      gif: "img/gif/12.gif",
      link: "https://fitzfactor.com"
    },
    { 
      name: "Unknown",
      gif: "img/gif/13.gif",
      link: ""
    },
    { 
      name: "Unknown",
      gif: "img/gif/14.gif",
      link: ""
    },
    { 
      name: "grimciitys",
      gif: "img/gif/15.gif",
      link: "https://deviantart.com/grimciitys"
    },
    { 
      name: "Devilman: Tanjou-hen",
      gif: "img/gif/16.gif",
      link: "https://myanimelist.net/anime/2354/Devilman__Tanjou-hen"
    },
    { 
      name: "Megazone 23",
      gif: "img/gif/17.gif",
      link: "https://myanimelist.net/anime/1935/Megazone_23"
    },
    { 
      name: "BADCODEC",
      gif: "img/gif/18.gif",
      link: "https://giphy.com/badcodec"
    },
    { 
      name: "Unknown",
      gif: "img/gif/19.gif",
      link: ""
    },
    { 
      name: "Unknown",
      gif: "img/gif/20.gif",
      link: ""
    },
    { 
      name: "Gake no Ue no Ponyo",
      gif: "img/gif/21.gif",
      link: "https://myanimelist.net/anime/2890/Gake_no_Ue_no_Ponyo"
    },
    { 
      name: "Megazone 23",
      gif: "img/gif/22.gif",
      link: "https://myanimelist.net/anime/1935/Megazone_23"
    },
    { 
      name: "Unknown",
      gif: "img/gif/23.gif",
      link: ""
    },
    { 
      name: "Cyber City Oedo 808",
      gif: "img/gif/24.gif",
      link: "https://myanimelist.net/anime/1352/Cyber_City_Oedo_808"
    },
    { 
      name: "The End of Evangelion",
      gif: "img/gif/25.gif",
      link: "https://myanimelist.net/anime/32/Neon_Genesis_Evangelion__The_End_of_Evangelion"
    },
    { 
      name: "Fate/Zero",
      gif: "img/gif/26.gif",
      link: "https://myanimelist.net/anime/10087/Fate_Zero"
    },
    { 
      name: "Serial Experiments Lain",
      gif: "img/gif/27.gif",
      link: "https://myanimelist.net/anime/339/Serial_Experiments_Lain"
    },
    { 
      name: "Angel Cop",
      gif: "img/gif/28.gif",
      link: "https://myanimelist.net/anime/1351/Angel_Cop"
    },
    { 
      name: "supyrb",
      gif: "img/gif/29.gif",
      link: "https://twitter.com/supyrb"
    },
    { 
      name: "Unknown",
      gif: "img/gif/30.gif",
      link: ""
    },
    {
      name: "1041uuu",
      gif: "img/gif/31.gif",
      link: "https://1041uuu.tumblr.com/"
    },
    { 
      name: "Kimi ni Todoke",
      gif: "img/gif/32.gif",
      link: "https://myanimelist.net/anime/6045/Kimi_ni_Todoke"
    },
    { 
      name: "Unknown",
      gif: "img/gif/33.gif",
      link: ""
    },
    { 
      name: "Golden Boy",
      gif: "img/gif/34.gif",
      link: "https://myanimelist.net/anime/268/Golden_Boy"
    },
    { 
      name: "Unknown",
      gif: "img/gif/35.gif",
      link: ""
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/36.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "Yokohama Kaidashi Kikou",
      gif: "img/gif/37.gif",
      link: "https://myanimelist.net/anime/975/Yokohama_Kaidashi_Kikou"
    },
    { 
      name: "kirokaze",
      gif: "img/gif/38.gif",
      link: "https://deviantart.com/kirokaze/"
    },
    { 
      name: "Valenberg",
      gif: "img/gif/39.gif",
      link: "https://valenberg.tumblr.com"
    },
    { 
      name: "mienar",
      gif: "img/gif/40.gif",
      link: "https://mienar.tumblr.com"
    },
    { 
      name: "mienar",
      gif: "img/gif/41.gif",
      link: "https://mienar.tumblr.com"
    },
    { 
      name: "mienar",
      gif: "img/gif/42.gif",
      link: "https://mienar.tumblr.com"
    },
    { 
      name: "Unknown",
      gif: "img/gif/43.gif",
      link: ""
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/44.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/45.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "Motocross Saito",
      gif: "img/gif/47.gif",
      link: "https://motocross-arts.tumblr.com"
    },
    { 
      name: "Unknown",
      gif: "img/gif/48.gif",
      link: ""
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/49.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "1041uuu",
      gif: "img/gif/50.gif",
      link: "https://1041uuu.tumblr.com/"
    },
    { 
      name: "Anas Abdin",
      gif: "img/gif/51.gif",
      link: "https://anasabdin.tumblr.com/"
    },
    { 
      name: "Violet Evergarden",
      gif: "img/gif/52.gif",
      link: "https://myanimelist.net/anime/33352/Violet_Evergarden"
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/53.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    {
      name: "1041uuu",
      gif: "img/gif/54.gif",
      link: "https://1041uuu.tumblr.com/"
    },
    {
      name: "VA-11 HALL-A",
      gif: "img/gif/55.gif",
      link: "https://waifubartending.com"
    },
    { 
      name: "Unknown",
      gif: "img/gif/56.gif",
      link: ""
    },
    { 
      name: "Unknown",
      gif: "img/gif/57.gif",
      link: ""
    },
    { 
      name: "Mike Black",
      gif: "img/gif/58.gif",
      link: "https://twitter.com/kurtruslfanclub/"
    },
    { 
      name: "198X",
      gif: "img/gif/59.gif",
      link: "https://store.steampowered.com/app/1086010/198X/"
    },
    { 
      name: "Mark Ferrari",
      gif: "img/gif/60.gif",
      link: "https://markferrari.com"
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/61.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/62.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "The Garden of Words",
      gif: "img/gif/63.gif",
      link: "https://myanimelist.net/anime/16782/Kotonoha_no_Niwa"
    },
    { 
      name: "lennsan",
      gif: "img/gif/64.gif",
      link: "https://lennsan.tumblr.com"
    },
    { 
      name: "Kidmograph",
      gif: "img/gif/65.gif",
      link: "https://kidmograph.com"
    },
    { 
      name: "Cowboy Bebop",
      gif: "img/gif/66.gif",
      link: "https://myanimelist.net/anime/1/Cowboy_Bebop"
    },
    { 
      name: "Valenberg",
      gif: "img/gif/67.gif",
      link: "https://valenberg.tumblr.com"
    },
    { 
      name: "Karigurashi no Arietty",
      gif: "img/gif/68.gif",
      link: "https://myanimelist.net/anime/7711/Karigurashi_no_Arrietty"
    },
    { 
      name: "Unknown",
      gif: "img/gif/69.gif",
      link: ""
    },
    { 
      name: "einsbern",
      gif: "img/gif/70.gif",
      link: "https://einsbern.tumblr.com/"
    },
    { 
      name: "My Neighbour Totoro",
      gif: "img/gif/71.gif",
      link: "https://myanimelist.net/anime/523/Tonari_no_Totoro"
    },
    { 
      name: "KJD",
      gif: "img/gif/72.gif",
      link: "https://artifiziell.tumblr.com"
    },
    { 
      name: "Valenberg",
      gif: "img/gif/73.gif",
      link: "https://valenberg.tumblr.com"
    },
    { 
      name: "Peanuts",
      gif: "img/gif/74.gif",
      link: "https://www.youtube.com/watch?v=gvqmLCrrbZE"
    },
    { 
      name: "JAVITOZEEK",
      gif: "img/gif/75.gif",
      link: "https://giphy.com/channel/JAVITOZEEK"
    },
    { 
      name: "Omoide Poroporo",
      gif: "img/gif/76.gif",
      link: "https://myanimelist.net/anime/1029/Omoide_Poroporo"
    },
    { 
      name: "Dirty Pair",
      gif: "img/gif/77.gif",
      link: "https://myanimelist.net/anime/424/Dirty_Pair"
    },
    { 
      name: "Valenberg for VirtuaVerse",
      gif: "img/gif/78.gif",
      link: "https://valenberg.tumblr.com"
    },
]

// select random gif
var randomset = randomgifs[Math.floor(Math.random() * randomgifs.length)]; 

// assign the selected gif to the image element on the page
document.getElementById('random').src = randomset.gif;

// fill in the source text
document.getElementsByClassName("source-label")[0].innerHTML = randomset.name;
document.getElementsByClassName("source-label")[0].href=randomset.link
