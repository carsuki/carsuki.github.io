var cache = new LastFMCache();

/* Create a LastFM object */
var lastfm = new LastFM({
  apiKey    : key,
  apiSecret : secret,
  cache     : cache
});

/* Load some artist info. */
lastfm.artist.getInfo({artist: 'Kanye West'}, {success: function(data){
  /* Use data. */
}, error: function(code, message){
  /* Show error message. */
}});