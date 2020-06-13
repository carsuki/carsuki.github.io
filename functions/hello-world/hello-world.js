<<<<<<< HEAD
// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
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
=======
version https://git-lfs.github.com/spec/v1
oid sha256:66bb9976ab4628d3eea68130f9822da8e553c255c1821fdc4dfa6dc96513d27b
size 512
>>>>>>> c078206504691b8a8082a3b7d78fafad9162463e
