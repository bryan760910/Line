const { LineBot } = require('bottender');
const { createServer } = require('bottender/express');

const config = require('./bottender.config.js').line;

const bot = new LineBot({
  accessToken: config.accessToken,
  channelSecret: config.channelSecret,
  sendMethod: 'reply', // Default: 'push'
});

bot.onEvent(async context => {

  async function fun1(req, res){
    let response = await request.get('https://servicerd.sinotrade.com.tw/api/v1/codeList/stock_code');
      if (response.err) { console.log('error');}
      else { console.log(response); }
  }

  await context.sendText('我是LINE機器人阿!!!!! 試試看 !!!');
});




const server = createServer(bot);

server.listen((process.env.PORT || 5000), () => {
  console.log('server is running on 5000 port...');
});
