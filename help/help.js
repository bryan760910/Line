const request = require('request');
const help = {};

help.getlist = () => {
    return [
        { category : "help", desc : "ask help", descCHZN: "語法說明"},
        { category : "hero", desc : "ask hero 英靈名稱", descCHZN: "查詢英靈"},
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