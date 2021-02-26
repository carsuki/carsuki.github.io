// spotifyAPI.js
// spotify API functions for album of the week
// carsuki '20

// get aotw information
getJSON = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'json';
  xhr.onload = function() {
      var status = xhr.status;
      if (status == 200) {
          callback(null, xhr.response);
      } else {
          callback(status);
      }
  };
  xhr.send();
};

var spotifyApi = new SpotifyWebApi();
var restOfAlbums = document.querySelector('.rest-of-albums');

var albumCell = `
<div class="album-display-cell">
<figure class="cover-container">
  <img class="player-cover" src="../img/cover-generic.png" alt="album cover" id="coverid">
</figure>
<div class="player-info">
  <div class="album-label player-label" id="albumid">Album Name</div>
  <div class=" artist-label player-label" id="artistid">Artist Name</div>
</div>
</div>
`

var viewMore = `
  <div class="view-more">
    <span>view more</span>
  </div>
`

var globalCounter = 1;

// grab token from spotify
var reqBody = {
  grant_type: 'client_credentials'
}

$.ajax({
  url: 'https://accounts.spotify.com/api/token',
  type: 'POST',
  dataType: 'json',
  contentType: 'application/x-www-form-urlencoded',
  headers: {
    'Authorization': 'Basic OWFiYjlkNjAzZTc2NDhmZTg4MDZkMmYwZWU2OWZhZmM6YWZmNmNmNGQ0YTgzNGFiNzhlMzRkYzI2ODdmM2Q0ZDY'
  },
  data: reqBody,
  complete: function(result) {
      var token = result.responseJSON.access_token;
      spotifyApi.setAccessToken(token);
      fillData();
  },
});

function fillData() {
getJSON('https://api.carsuki.moe/aotw.json',  function(err, jsonData) {
  jsonData.reverse();

  // fill large 'header' cell
  spotifyApi.getAlbum(jsonData[0], function (err, data) {
    if (err) console.error(err);
    
    // fill in the info
    document.querySelector('#album0').innerText = data["name"];
    document.querySelector('#artist0').innerText = data["artists"][0]["name"];
    document.querySelector('#cover0').src = data["images"][1]["url"];
    
    // truncate text beyond 3 lines
    document.addEventListener( "DOMContentLoaded", () => {
       let wrapper = document.querySelector( '#album0' );
       let options = {
          truncate: "word"
       };
       new Dotdotdot( wrapper, options );
    });
  });

  // remove old data if album count is above 20
  if (jsonData.length > 20) {
    jsonData.reverse();
    jsonData = jsonData.slice(jsonData.length - 20);
    jsonData.reverse();
  }
  
  // create and fill in remaining album cells (loops for each cell created)
  for (let i = 1; i < jsonData.length; i++) {
    spotifyApi.getAlbums(jsonData, function (err, data) {
      if (err) console.error(err);
      
      // define currently selected cell
      var pc = albumCell.replace('albumid', 'albumid' + globalCounter);
      var pc2 = pc.replace('artistid', 'artistid' + globalCounter);
      var currentCell = pc2.replace('coverid', 'coverid' + globalCounter);
      
      // add it
      restOfAlbums.innerHTML += currentCell;
      var currentAlbum = '#albumid' + globalCounter;
      var currentArtist = '#artistid' + globalCounter;
      var currentCover = '#coverid' + globalCounter;
      
      // fill site data
      document.querySelector(currentAlbum).innerText = data["albums"][globalCounter]["name"];
      document.querySelector(currentArtist).innerText = data["albums"][globalCounter]["artists"][0]["name"];
      document.querySelector(currentCover).src = data["albums"][globalCounter]["images"][1]["url"];
      
      // move on to next cell
      globalCounter++;
    });
  }
});
}