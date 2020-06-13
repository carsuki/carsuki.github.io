exports.handler = async (event, context) => {
  try {
    const { API_KEY, API_SECRET } = process.env
    const key = `${API_KEY}`
    const secret = `${API_SECRET}`
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

var cache = new LastFMCache();

var lastfm = new LastFM({
  apiKey    : key,
  apiSecret : key,
  cache     : cache
});

lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
}, error: function(code, message){
}});