const request = require('request');
const help = {};

help.getlist = () => {
    return [
        { category : "help", desc : "ask help", descCHZN: "語法說明"},
        { category : "hero", desc : "ask hero [all | 英靈名稱] ", descCHZN: "[可查詢的英靈 | 查詢英靈]"},
        { category : "ado", desc : "ask ado [hand | waist | head | body]", descCHZN: "可查詢全部飾品"},
        { category : "dream", desc : "ask dream [all | ]", descCHZN: "[可查詢的入夢符 | 查詢入夢符]"},
    ];
};

help.InfoToMsg = () => {
    
    let helpLists =  help.getlist();
    let msg = "";
    
    helpLists.forEach(function(element) {
        msg = msg + `${element.descCHZN} : ${element.desc} \n`;
    }, this);
    return msg;
};

module.exports = {
    helpInfo : help.InfoToMsg
};