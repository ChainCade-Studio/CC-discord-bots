const { Client, GatewayIntentBits } = require('discord.js');

//functions 
const GetVolume = require('../functions/GetVolume.js')

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

const UpdateVolumeInterval = () => {
  setInterval(UpdateVolume, 1800000)
}

const UpdateVolume = async () => {
  var vol = await GetVolume();
  botMember.setNickname(vol)
}

client.on('ready', async () => {
  console.log(`${client.user.tag} is here!`)

  guild = await client.guilds.fetch(serverId)
  botMember = await guild.members.fetchMe(client)

  UpdateVolume();

  UpdateVolumeInterval()
})

client.login(process.env.CCVOL_TOKEN)

module.exports = { client }