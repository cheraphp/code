const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Bu komutu kullanabilmek için Yönetici Yetkinin Olmalı.')
    const mesaj = args.slice(0).join(' ');
    if(mesaj.length < 1) return message.reply(" Duyuru içeriğini belirtmelisin.")
      try {
        message.guild.members.forEach(m=> {
         
        m.send(mesaj)
        console.log(`🔧 Duyuru ${m.user.tag} İsimli Kullanıcıya Gönderildi!`)
         
          }) 
        
        const erisxsad = new Discord.RichEmbed()
       .addField(`📣 Mesajınız sunucudaki üyelere iletildi!`, `Mesajını \`${message.guild.memberCount}\` kişiye başarılı bir şekilde gönderdim.`)
        .setThumbnail('https://cdn.dribbble.com/users/1344238/screenshots/4014144/button.gif')
        .setColor('#562b90')
                message.channel.send(erisxsad)
          }
        catch(e) {
        return console.log(`⚠ Eksik Mesaj Gönderildi!`)
       
      } 
    
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'dm-duyuru',
};