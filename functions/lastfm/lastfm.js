exports.handler = async (event, context) => {
  try {
    const key = process.env.API_KEY
    const secret = process.env.API_SECRET
    return {
      statusCode: 200
    }
  } catch (err) {
    return { statusCode: 500, body: err.toString() }
  }
}