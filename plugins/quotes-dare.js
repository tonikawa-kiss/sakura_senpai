let handler = async (m, { conn, usedPrefix }) => {
  await conn.sendButton(m.chat, `“${pickRandom(global.bucin)}”`, author, 'Dare', `${usedPrefix}quote`, m)
}
handler.help = ['dare']
handler.tags = ['fun']
handler.command = /^(dare)$/i
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
"Read out the last dirty text you sent?", 
"Eat five spoonfuls of a condiment of your choice?", 
"Try to juggle 3 things of the group's choice? ", 
"Pretend to be a food item of your choice? ", 
"Show the most embarrassing photo on your phone?", 
"Show the last five people you texted and what the messages said?", 
"Let the rest of the group DM someone from your?", "Instagram account?", 
"Eat a raw piece of garlic? ", 
"Do 100 squats? ", 
"Let the group look in your Instagram DMs? ", 
"Show us your screen time report? ", 
"Keep three ice cubes in your mouth until they melt?", 
"Say something dirty to the person on your left? ", 
"Give a foot massage to the person on your right? ", 
"Put 10 different available liquids into a cup and drink it?", 
"Yell out the first word that comes to your mind? ", 
"Give a lap dance to someone of your choice?", 
"Repeat everything the person on your right is saying until it's your turn again? ", 
"Remove four items of clothing? ", 
"Like the first 15 posts on your Facebook newsfeed? ", 
"Eat a spoonful of mustard? ", 
"Keep your eyes closed until it's your go again? ", 
"Try and get all the the toes on one foot in your mouth? ", 
"Send a sext to the last? person in your phonebook? ", 
"Show your orgasm face", 
"Seductively eat a banana?", 
"Empty out your wallet/purse and show everyone what's inside? ", 
"Do your best sexy crawl? ", 
"Pretend to be the person to your right for 10 minutes? ", 
"Eat a snack without using your hands? ", 
"Whisper a secret to the person on your left?", 
"Say two honest things about everyone else in the group? ", 
"Twerk for a minute? ", 
"Try and make the group laugh as quickly as possible?", 
"Try to put your whole fist in your mouth? ", 
"Let another person in the group touch up your makeup? ", 
"Tell everyone an embarrassing story about yourself? ", 
"Try to lick your elbow?", 
"Peel a banana with your toes?", 
"Say everything in a whisper for the next 10 minutes? ", 
"Smell another player's armpit? ", 
"Talk in an American accent for the rest of the evening? ", 
"Do your best celebrity impression? ", 
"Play air guitar for 2 minutes straight? ", 
"Post the oldest selfie on your phone on Instagram Stories? ", 
"Tell the saddest story you know? ", 
"Howl like a wolf for two minutes? ", 
"Dance without music for two minutes? ", 
"Pole dance with an imaginary pole?", 
"Belt out the chorus of a cheesy ballad at full volume? ", 
"Let someone else tickle you and try not to laugh? ", 
"Put as many snacks into your mouth at once as you can? ", 
"Scroll through your phone book until someone says stop. You either have to call or delete that person.? ", 
"Put your clothing on backwards for the rest of the evening? ", 
"Down your drink (responsibly)? ", 
"Try and make yourself cry in front of the group? ", 
"Give a celebrity lookalike for every person in the room? ", 
"Tell the group two truths and a lie, and they have to guess which one the lie is? ", 
"Attempt to impersonate everyone in the room? ", 
"Reply to the first five Instagram Stories on your timeline? ", 
"Share the first celebrity on your timeline's Instagram to your Story? ", 
"Put on as many layers as possible in 60 seconds? ", 
"Fill your mouth with drink and gargle your answer to the next Truth? ", 
"Make another player jump in the next 10 minutes? ", 
"Smile as widely as you can and hold it for two minutes? ", 
"Hold your drink with two hands for the rest of the evening? ", 
"Attempt the first TikTok dance on your for you page? ", 
"Sit on the floor for the rest of the evening? ", 
"Put on make-up without a mirror and leave it like that for the rest of the game? ", 
"Give a personalised insult to everyone in the room?."

]