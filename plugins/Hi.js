let handler = async m => m.reply(`
Hi Darling, I am ready to be with you 🥰😍
`.trim()) // Add yourself if you want

handler.help = ['Hi','hello']
handler.tags = ['info']
handler.customPrefix= /^(Hi|Hello)$/i

handler.command = new RegExp

module.exports = handler