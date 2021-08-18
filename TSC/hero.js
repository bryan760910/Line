const request = require('request');
const hero = {};

hero.infoList = (name) => {
    let heroData;
    switch (name) {
        case "冰璃" :
            heroData = {
                status : true,
                level : "T0",
                stone : "天。幽魉",
                talent : "下路點到【定魂】後全走上,之後全開",
                skill : "【幽劍冥引】+【避實就虛】+【追擊or定魂】，可替換技能【冰華飛刺】往前突進之後還有一招連擊可以用,PVP或PVE跑圖好用"
            }
        default :
            heroData= {
                status : false,
                msg : "英靈查詢錯誤"
            }
    }
    return heroData
}

hero.getHeroInfo = (name) => {
    const data = hero.infoList(name);
    const msgText = hero.infoToMsg(data);
    return msgText;
};

hero.infoToMsg = (data) => {
    let msg;
    if (data.status) {
        msg = 
        `排名 : ${data.level} \n` +
        `魂石 : ${data.stone} \n` + 
        `五內 : ${data.talent} \n` +
        `技能 : ${data.skill} \n`
    } else {
        msg = data.msg;
    }
    return msg
}

module.exports = {
    getHeroInfo: hero.getHeroInfo,
};