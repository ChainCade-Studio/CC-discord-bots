const axios = require('axios')
const tokenAddress = '0x2ffee7b4df74f7c6508a4af4d6d91058da5420d0'
module.exports = async () => {
  try {
    const volUrl = `https://api.bogged.finance/v1/token_volume?hrs=24&token=${tokenAddress}&chain=bsc&api_key=${process.env.BOGGED_KEY}`
    var volRes = await axios.get(volUrl)
    return `Vol(24h) : $${volRes.data.data["vol_24h_usd"].toFixed(2).toString()}`
  }
  catch (err) {
    console.log(err)
    return "much wow"
  }
}