const reqEvent = (event) => require(`../events/${event}`);//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
module.exports = client => {//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  client.on('ready', () => reqEvent('ready')(client));//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
  client.on('message', reqEvent('message'));//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
};//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
//Bu Proje The Discord Bots | Kod Paylaşım** Sunucusuna Aittir GELMEK İÇİN : https://discord.gg/qYn4zA4
