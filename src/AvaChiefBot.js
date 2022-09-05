const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents:       
              [GatewayIntentBits.Guilds,
              GatewayIntentBits.GuildMessages,
              GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`${client.user.tag} is online!`)
})

client.on('messageCreate', async msg => {
  if(msg.author.bot){
    return;
  } 
  if (msg.content === "hey") {
    await msg.channel.send(`hello ${msg.author.username}`)
  }
})


client.login(process.env.AVAC_TOKEN)

module.exports = {client}