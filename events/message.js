const ayarlar = require('../ayarlar.json');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
module.exports = message => {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  let client = message.client;//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  if (message.author.bot) return;//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  if (!message.content.startsWith(ayarlar.prefix)) return;//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  let params = message.content.split(' ').slice(1);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  let perms = client.elevation(message);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  let cmd;//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  if (client.commands.has(command)) {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    cmd = client.commands.get(command);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  } else if (client.aliases.has(command)) {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    cmd = client.commands.get(client.aliases.get(command));//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  }//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  if (cmd) {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    if (perms < cmd.conf.permLevel) return;//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
    cmd.run(client, message, params, perms);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  }//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
};//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
