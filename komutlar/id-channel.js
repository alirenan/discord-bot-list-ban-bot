const Discord = require('discord.js');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
const ayarlar = require('../ayarlar.json');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
exports.run = function(client, message, args){//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
if(message.author.id === ayarlar.sahip){//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  message.delete();//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
 const id = args[0]//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  const doc = args.slice(1).join(' ');//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  message.author.send('**`'+id+'` idsine sahip kanala  `'+doc+'` mesajını gönderdim**').then//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  client.channels.get(id).send(doc);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
}//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
}//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
exports.conf = {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
 enabled:true,//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  guildOnly:false,//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  aliases:['chdm','ch-msg'],//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  permLevel:0//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  }//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
exports.help = {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  name:'idmesaj',//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  description:'İD\'sini girdiğiniz kanala mesaj atar',//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  usage:'idmesaj [Mesaj] [id]'//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
}
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
