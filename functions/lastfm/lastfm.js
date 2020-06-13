exports.handler = async (event, context) => {
  try {
    const subject = event.queryStringParameters.name || 'World'
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Hello ${subject}` }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}

var cache = new LastFMCache();

var lastfm = new LastFM({
  apiKey    : key,
  apiSecret : secret,
  cache     : cache
});

lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
}, error: function(code, message){
}});