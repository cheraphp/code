const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setAuthor(client.user.username, client.user.avatarURL)
.addField('Bot Gecikme Süresi',''+client.ping+'',false)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,//True => Komut açık, False => Komut kapalı 
  guildOnly: false, //True => Sadece Servere Özel, False => Heryerde kullanılabilir
  aliases: [],//Komutun farklı kullanımları ÖR: !ping, !p
  permLevel: 0 //kimlerin kullanabileceğini  (bot.js dosyasında perm leveller yazıyor)
};

exports.help = {
  name: 'ping',//Komutun adı (Komutu girerken lazım olucak)
}
//Coding by -Rhing#5860