const Discord = require('discord.js');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
const ayarlar = require('../ayarlar.json');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
var prefix = ayarlar.prefix;//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
exports.run = (client, message, params) => {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  if (!params[0]) {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    const commandNames = Array.from(client.commands.keys());//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    message.author.sendCode('asciidoc', `= Komut Listesi =\n\n[Komut hakkında bilgi için ${ayarlar.prefix}yardım <komut adı>]\n\n${client.commands.map(c => `${ayarlar.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  if (message.channel.type !== 'dm') {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    const ozelmesajkontrol = new Discord.RichEmbed()//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    .setColor(0x00AE86)//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    .setTimestamp()//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    .setAuthor(message.author.username, message.author.avatarURL)//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    .setDescription('Özel mesajlarını kontrol et. :postbox:');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    message.channel.sendEmbed(ozelmesajkontrol) }//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  } else {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    let command = params[0];//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    if (client.commands.has(command)) {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
      command = client.commands.get(command);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    }//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  }//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
};//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
exports.conf = {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  enabled: true,//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  guildOnly: false,//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  aliases: ['h', 'halp', 'help', 'y'],//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  permLevel: 0//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
};//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
exports.help = {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  name: 'yardım',//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  description: 'Tüm komutları gösterir.',//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  usage: 'yardım [komut]'//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
};//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
