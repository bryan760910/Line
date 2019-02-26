const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').line;

const bot = new LineBot({
  accessToken: config.accessToken,
  channelSecret: config.channelSecret,
  sendMethod: 'reply', // Default: 'push'
});

bot.onEvent(async context => {
  console.log(context.LineContext.rawBody.events[0].message.text)
  await context.sendText('我是LINE機器人阿!!!!! 試試看 !!!');
});




const server = createServer(bot);

server.listen((process.env.PORT || 5000), () => {
  console.log('server is running on 5000 port...');
});
