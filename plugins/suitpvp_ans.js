let handler = m => m
handler.before = async function (m) {
  this.suit = this.suit ? this.suit : {}
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0
  let room = Object.values(this.suit).find(room => room.id && room.status && [room.p, room.p2].includes(m.sender))
  if (room) {
    let win = ''
    let tie = false
    if (m.sender == room.p2 && /^(acc(ept)?|accept|gas|okay?|reject|gamau|later|ga(k.)?can)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(deny|gamau|later|ga(k.)?can)/i.test(m.text)) {
        this.reply(m.chat, `@${room.p2.split`@`[0]} rejected suit, suit canceled`, m)
        delete this.suit[room.id]
        returns !0
      }
      room.status = 'play'
      room.origin = m.chat
      clearTimeout(room.time)
      //delete room[room.id].time
      m.reply(`Suit has been sent to chat
@${room.p.split`@`[0]} and
@${room.p2.split`@`[0]}

Please select a suit in the respective chat"
click wa.me/${conn.user.jid.split`@`[0]}`, m.chat, {
        contextInfo: {
          mentionedJid: [room.p, room.p2]
        }
      })

      if (!room.vote) this.send3Button(room.p, 'Please vote', `Win +${room.points}XP\nLose -${room.point_lose}XP`, 'Rock🗿', 'Stone' , 'Paper📄', 'Paper', 'Scissors✂️', 'Scissors', m)
      if (!room.pick2) this.send3Button(room.p2, 'Please vote', `Win +${room.points}XP\nLose -${room.point_lose}XP`, 'Rock🗿', 'Rock' , 'Paper📄', 'Paper', 'Scissors✂️', 'Scissors', m)
      room.time_select = setTimeout(() => {
        if (!room.select && !room.select2) this.reply(m.chat, `Both players don't want to play,\nSuit cancelled`)
        else if (!room.select || !room.select2) {
          win = !room.select ? room.p2 : room.p
          this.reply(m.chat, `@${(room.select ? room.p2 : room.p).split`@`[0]} no suit select, game over`, m)
          db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
          db.data.users[win == room.p ? room.p2 : room.p].exp -= room.poin_lose
        }
        delete this.suit[room.id]
        return !0
      }, room.timeout)
    }
    let jwb = m.sender == room.p
    let jwb2 = m.sender == room.p2
    let g = /scissors/i
    let b = /stone/i
    let k = /paper/i
    let reg = /^(scissors|rock|paper)/i
    if (jwb && reg.test(m.text) && !room.select && !m.isGroup) {
      room.select = reg.exec(m.text.toLowerCase())[0]
      room.text = m.text
      m.reply(`You have selected ${m.text} ${!room.choose2 ? `\n\nWaiting for opponent to vote` : ''}`)
      if (!room.select2) this.reply(room.p2, '_Your opponent has voted_\nNow it's your turn', 0)
    }
    if (jwb2 && reg.test(m.text) && !room.select2 && !m.isGroup) {
      room.select2 = reg.exec(m.text.toLowerCase())[0]
      room.text2 = m.text
      m.reply(`You have selected ${m.text} ${!room.select ? `\n\nWaiting for opponent to vote` : ''}`)
      if (!room.select) this.reply(room.p, '_Your opponent has voted_\nNow it's your turn', 0)
    }
    let stage = room.choose
    let stage2 = room.select2
    if (room.select && room.select2) {
      clearTimeout(room.time_select)
      if (b.test(stage) && g.test(stage2)) win = room.p
      else if (b.test(stage) && k.test(stage2)) win = room.p2
      else if (g.test(stage) && k.test(stage2)) win = room.p
      else if (g.test(stage) && b.test(stage2)) win = room.p2
      else if (k.test(stage) && b.test(stage2)) win = room.p
      else if (k.test(stage) && g.test(stage2)) win = room.p2
      else if (stage == stage2) tie = true
      this.reply(room.origin, `
_*Suit results*_${tie ? '\nSERIES' : ''}

@${room.p.split`@`[0]} (${room.text}) ${tie ? '' : room.p == win ? ` Win \n+${room.points}XP` : ` Lose \n-${room.points_lose}XP`}
@${room.p2.split`@`[0]} (${room.text2}) ${tie ? '' : room.p2 == win ? ` Win \n+${room.points}XP` : ` Lose \n-${room.points_lose}XP`}
`.trim(), m, { contextInfo: { mentionedJid: [room.p, room.p2] } })
      if (!tie) {
        db.data.users[win == room.p ? room.p : room.p2].exp += room.poin
        db.data.users[win == room.p ? room.p2 : room.p].exp += room.poin_lose

      }
      delete this.suit[room.id]
    }
  }
  return !0
}
handler.exp = 0
module.exports = handler

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}