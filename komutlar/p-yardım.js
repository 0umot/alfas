const Discord = require('discord.js'); 
const db = require("quick.db")
exports.run = async(client, message, args) => {

  if (!db.fetch(`goldpuan_${message.author.id}`)) {
    const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("AIFA", client.user.avatarURL)
.setColor("BLUE")
.setTitle("AIFA")
 .setURL("https://discord.com/oauth2/authorize?client_id=761850452777631754&scope=bot&permissions=8")

 .setDescription(`
${message.author}, senin puanın **0**
daha fazla puan kazanmak için !p-menü yazabilirsin.
`)
 .addField("..market | ..menu", `
Puanınızı ve market menüsünü gösterir.

`)
 .addField("..topaz", `
5.000 puan karşılığında topaz kasa açarsınız.
İçinden rastgele 1-3 gün arası gold üye çıkar.
`)
 
 .addField("..yakut", `
10.000 puan karşılığı yakut kasa açarsınız.
İçinden rastgele 1-10 gün arası gold üye çıkar.
`)
 
 .addField("..garnet", `
45.000 puan karşılığı garnet kasa açarsınız.
İçinden rastgele (10-45) gün arası gold üye çıkar.
`)
 .setFooter("trbilisim.org", client.user.avatarURL)
 
 return message.channel.send(Embed)
  }
 const Embed = new Discord.RichEmbed()
 .setTimestamp()
 .setAuthor("AIFA", client.user.avatarURL)
.setColor("BLUE")
.setTitle("AIFA")
 .setURL("https://discord.com/oauth2/authorize?client_id=761850452777631754&scope=bot&permissions=8")

 .setDescription(`
${message.author}, senin puanın **${db.fetch(`goldpuan_${message.author.id}`)}**
daha fazla puan kazanmak için !p-menü yazabilirsin.
`)
 .addField("..market | ..menu", `
Puanınızı ve market menüsünü gösterir.

`)
 .addField("..topaz", `
5.000 puan karşılığında topaz kasa açarsınız.
İçinden rastgele 1-3 gün arası gold üye çıkar.
`)
 
 .addField("..yakut", `
10.000 puan karşılığı yakut kasa açarsınız.
İçinden rastgele 1-10 gün arası gold üye çıkar.
`)
 
 .addField("..garnet", `
45.000 puan karşılığı garnet kasa açarsınız.
İçinden rastgele (10-45) gün arası gold üye çıkar.
`)
 .setFooter("trbilisim.org", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pmarket","pmenü","pmenu","p-menu", "p-menü"],
  permLevel: 0
};

module.exports.help = {
  name: 'p-market',
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};