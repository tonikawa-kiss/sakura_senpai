let handler = async (m, { conn, usedPrefix }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, author, 'Truth', `${usedPrefix}quote`, m)
}
handler.help = ['truth']
handler.tags = ['fun']
handler.command = /^(truth)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"When was the last time you lied?", 
"What's the worst thing you've ever done at work?", 
"When was the last time you cried?", 
"What's your biggest fear?", 
"What's your biggest fantasy?", 
"Do you have any fetishes?", 
"Who's the last person you searched on Instagram?", 
"What's something you're glad your family doesn't know about you?", 
"Have you ever cheated on someone?", 
"Where's the weirdest place you peed?", 
"What's the worst thing you've ever done?", 
"What's the strangest thing you've ever eaten?", 
"What's your relationship dealbreaker?", 
"What's a secret you've never told anyone?", 
"Do you have a hidden talent?", 
"Who was your first celebrity crush?", 
"What are your thoughts on ppolyamory",
"What's the worst intimate experience you've ever had?", 
"What's the best intimate experience you've ever had?", 
"Have you ever cheated in an exam?", 
"If you were going to be on a reality TV show, which would it be?", 
"What's the drunkest you've ever been?", 
"Have you ever broken the law?", 
"What's the most embarrassing thing you've ever done?", 
"What's your biggest insecurity?", 
"Have you ever stayed friends with someone because it benefitted you beyond just the friendship?", 
"What's the biggest mistake you've ever made?", 
"What's the most disgusting thing you've ever done?", 
"Who would you like to kiss in this room?", 
"What's one thing you hate people knowing about you?", 
"What's the worst thing anyone's ever done to you?", 
"What's the best thing anyone's ever done for you?", 
"Have you ever had a run in with the law?", 
"What's your worst habit?", 
"What's the most embarrassing thing you've done in a taxi?", 
"What's the worst thing you've ever said to anyone?", 
"Have you ever peed in the shower?", 
"What's the strangest dream you've had?", 
"Have you ever been caught doing something you shouldn't have?", 
"What's the worst date you've been on?", 
"What's the best date you've been on?", 
"What happened on the latest night out you've ever had?", 
"What's your biggest regret?", 
"What's the biggest misconception about you?", 
"Have you ever said something you regret about someone in this room?", 
"What's one thing you wish people knew about you?", 
"Where's the weirdest place you've had sex?", 
"Why did your last relationship break down?", 
"Have you ever lied to get out of a bad date?", 
"What's the most trouble you've been in?", 
"When did you last have sex outside?", 
"What's the worst thing you've lied about?", 
"What's one thing you wish you'd lied about?", 
"What's the best piece of advice you've been given?", 
"What's the most you've spent on a night out?", 
"Have you ever returned or re-gifted a present?", 
"Name a time you think you were a bad partner? ", 
"What's your guilty pleasure?", 
"What's one thing you only do when you're alone?", 
"If you had to get back with an ex, who would you choose?", 
"If you had to cut one friend out of your life, who would it be?", 
"Do you have a favourite friend?", 
"Do you have a favourite sibling?", 
"What's the strangest rumour you've heard about yourself?", 
"What's your biggest turn on?", 
"What's your favourite gross food combination?", 
"What's the silliest reason you've left a club early?", 
"What have you purchased that's been the biggest waste of money?", 
"If you could swap lives with someone in this room, who would it be?", 
"Tell me about your first kiss", 
"What was the most inappropriate time you farted?", 
"What's something you really hope your family never finds out about?", 
"What's the weirdest lie you've ever told?", 
"Do you have any fake social media accounts?"

]