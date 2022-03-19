function handler(m) {
  // Ini cuma contoh, jgn di uncomment -_-
  // F this.sendContact(m.chat, '919515658404', 'PRASHUPROHUNT', m)
  this.sendContact(m.chat, '919515658404', 'PRASHUOROHINT', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
