const Discord = require('discord.js');
const db = require('quick.db')
const Jimp = require('jimp')

exports.run = (client, message, args) => { 

 var user = message.mentions.users.first() || message.author; 
  
const embed = new Discord.RichEmbed()
.setAuthor("MB-PROTECT", client.user.avatarURL)
.setTitle("MB-PROTECT BOT")
.setURL("hhttps://discordapp.com/oauth2/authorize?client_id=685511707380023297&scope=bot&permissions=8")
.setDescription("Botu kendi sunucuna davet edebilirsin :)")
.setColor("BLUE")
.setTimestamp()
.addField("Davet Linki", "https://discordapp.com/oauth2/authorize?client_id=685511707380023297&scope=bot&permissions=8")
message.channel.send(embed)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['invite'], 
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'taslak', 
  usage: 'sayac-hg-msg'
};