let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Gpay [+919515658404]
│ • Ppay[+919515658404]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
