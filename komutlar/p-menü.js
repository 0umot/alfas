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
${message.author}, senin puanın: **0**
`)
 .addField("..market | ..menu", `
Puanınızı ve market menüsünü gösterir.

Etkinlikleri tamamlayarak
bedava \`Gold Üye ve Ürünler\` alabilirsiniz!
`)
 .addField("Sohbet Etmek", `
sizlere 5 dakikada rastgele 5-75 arası puan verir.
`)
 
 .addField(".günlükhediyem", `
Her gün alınabilir.
1 oy karşılığında \`500-2.000\` arasında rastgele hediye puan alabilirsin.
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
`)
 .addField("!p-..market | ..menu", `
Puanınızı ve market menüsünü gösterir.

Etkinlikleri tamamlayarak
bedava \`Gold Üye ve Ürünler\` alabilirsiniz!
`)
 .addField("Sohbet Etmek", `
sizlere 5 dakikada rastgele 5-75 arası puan verir.
`)
 
 .addField("..günlükhediyem", `
Her gün alınabilir.
1 oy karşılığında \`500-2.000\` arasında rastgele hediye puan alabilirsin.
`)
 
 .setFooter("trbilisim.org", client.user.avatarURL)
 
 return message.channel.send(Embed)
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pmenu","p-menu", "p-menü"],
  permLevel: 0
};

module.exports.help = {
  name: "pmenü",
  description: 'Yardım Menüsünü Gösterir.',
  usage: 'yardım'
};
