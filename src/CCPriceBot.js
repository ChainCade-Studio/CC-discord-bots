const { Client, GatewayIntentBits } = require('discord.js');

//functions 
const GetPrice = require('../functions/GetPrice.js')

const client = new Client({
  intents:
    [GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers]
});

let guild;
let botMember;

//vars
const serverId = process.env.CC_SERVER_ID

const UpdatePriceInterval = () => {
  setInterval(UpdatePrice, 1800000)
}

const UpdatePrice = async () => {
  var price = await GetPrice();
  botMember.setNickname(price)
}

client.on('ready', async () => {
  console.log(`${client.user.tag} is here!`)

  guild = await client.guilds.fetch(serverId)
  botMember = await guild.members.fetchMe(client)

  UpdatePrice();

  UpdatePriceInterval()
})


client.login(process.env.CCPRICE_TOKEN)

module.exports = { client }