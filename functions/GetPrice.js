const axios = require('axios')
const tokenAddress = '0x2ffee7b4df74f7c6508a4af4d6d91058da5420d0'
module.exports = async () => {
  try {
    const priceUrl = `https://api.bogged.finance/v1/spot_prices?` +
      `tokens=${tokenAddress}&chain=bsc&api_key=${process.env.BOGGED_KEY}`
    var priceRes = await axios.get(priceUrl)
    return `Price : $0.0...${priceRes.data.data[tokenAddress].toFixed(12).toString().substr(9)}`
  }
  catch (err) {
    console.log(err)
    return "moon"
  }
}