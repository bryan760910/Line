const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');
const config = require('./bottender.config.js').line;

const TSCHero = require('././TSC/hero.js');
const TSCTools = require('././TSC/tools.js');
const help = require('././help/help.js');

const bot = new LineBot({
    accessToken: config.accessToken,
    channelSecret: config.channelSecret,
    sendMethod: 'reply', // Default: 'push'
});

bot.onEvent(async context => {
    
    let userSays = context.event.message.text.trim();
	let sentence = userSays.split(' ');
	let caller = sentence.shift().trim().toLowerCase();
	let secondSentence = sentence.join(' ').trim();
	let msg = secondSentence.split(' ');
	let category = msg.shift().trim().toLowerCase();
	let question = msg.join().trim();

	console.log("caller", caller);
	console.log("category", category);
	console.log("question", question);

	// caller + category + question
	// caller ask ()
	if (caller === "ask") {
		switch (category) {
			case "help": 
				let helpMsg = help.helpInfo();
				await context.sendText(helpMsg);
				break;
			case "hero" : 
				try {
					let heroInfo
					if (question === "all") {
						heroInfo = TSCHero.getTotalList();
					} else {
						heroInfo = TSCHero.getHeroInfo(question);
					}
					
					context.sendText(heroInfo); 
				} catch (error) {
					context.sendText("查詢錯誤 !! "); 
				}
				break;
			case "ado" : 
				try {
					const adoInfo = TSCTools.getToolsInfo("ado");
					context.sendText(adoInfo); 
				} catch (ex) {
					// context.sendText(ex.message); 
					context.sendText("查詢錯誤 !! "); 
				}
				break;
			default:
				context.sendText("類別錯誤，請輸入 ca help 查看所有類別");
				break;
		}		
	}
});

const server = createServer(bot);

server.listen((process.env.PORT || 5000), () => {
    console.log('server is running on 5000 port...');
});
