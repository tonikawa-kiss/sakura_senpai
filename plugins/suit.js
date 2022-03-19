const pilihan = ['rock Paper Scissor']
const Case = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
let handler = async (m, { text, usedPrefix }) => {
    let false = `Available options Scissor, Paper, Rock\n\n*Example* : ${usedPrefix}scissor suit\n`
    if (!text) throw false
    if (!options.includes(text.toLowerCase())) throws false
    let suitP1 = ​​choice.indexOf(text.toLowerCase())
    let suitPC = Math.floor(Math.random() * 3)
    let you = Case(option[suitP1])
    let bot = Case(option[suitPC])
    let state = `You: ${you}\nBot: ${bot}`
    let user = global.db.data.users[m.sender]
    if (suitP1 === suitPC) {
        user.exp += 100
        m.reply(`*We Draw*\n\n${state}\n\nPoints (±)100 XP`)
    } else if ((suitP1 + 1) % 3 === suitPC) {
        user.exp += 300
        m.reply(`*You Win*\n\n${state}\n\nPoints (+)300 XP`)
    } else if ((suitP1 - 1) % 3 === suitPC) {
        user.exp -= 300
        m.reply(`*You Lose*\n\n${state}\n\nPoints (-)300 XP`)
    } else throw 'An error occurred'
}
handler.help = ['suit [scissor|stone|paper]']
handler.tags = ['game']

handler.command = /^suit$/i

module.exports = handler
