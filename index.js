const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');
const config = require('./bottender.config.js').line;
const stock = require('././stock/stock.js');


const bot = new LineBot({
    accessToken: config.accessToken,
    channelSecret: config.channelSecret,
    sendMethod: 'reply', // Default: 'push'
});

bot.onEvent(async context => {

    try {
		let stockInfoDict = await stock.stockInfo(context.event.message.text);
		let stockInfoMsg = stock.stockInfoMsg(context.event.message.text, stockInfoDict);
		await context.sendText(stockInfoMsg);
	} catch (error) {
		let stockInfoMsg = stock.stockInfoMsg(context.event.message.text, error);
		await context.sendText(stockInfoMsg);
	}
    // console.log(context)
    // await context.sendText('我是LINE機器人阿!!!!! 試試看 !!!');
});

const server = createServer(bot);

server.listen((process.env.PORT || 5000), () => {
    console.log('server is running on 5000 port...');
});
