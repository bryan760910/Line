const request = require('request');
const hero = {};

hero.infoList = (name) => {
    let heroData;
    switch (name) {
        case "冰璃" : 
            heroData = {
                status : true,
                level : "(絕) T0",
                stone : "幽魉",
                talent : "下路點到【定魂】後全走上,之後全開",
                skill : "一般帶法:【幽劍冥引】+【避實就虛】+【追擊or定魂】，可替換技能【冰華飛刺】往前突進之後還有一招連擊可以用,PVP或PVE跑圖好用",
                suggest : "最值得升上6星的角色"
            }
            break;
        case "封寒月" : 
            heroData = {
                status : true,
                level : "(絕) T0.5",
                stone : "妖術師",
                talent : "下路點到【魂凍冰塊】後全走上",
                skill : "一般帶法:【天霜雪舞】+【魂凍冰塊】+【神念】，可替換技能【冰華之陣】0.5範圍AOE配上-移速風箏一群怪的感覺很好",
                suggest : "及身滿兵刃滿,五內不需給石,跑碎片到四星"
            }
            break;
        case "太淵隱逸" : 
            heroData = {
                status : true,
                level : "(極) T1",
                stone : "屍魔術士",
                talent : "下路點到【神氛化法】後全走上",
                skill : "一般帶法:【氣愈之術】+【神氛化法】+【聖樺祝福】",
                suggest : "兵刃最高55,及身至少+9,五內不需給石不用跑碎片"
            }
            break;
        case "陰歙" : 
            heroData = {
                status : true,
                level : "(絕) T3",
                stone : "咒石兵",
                talent : "下路點到【反震】後全走上",
                skill : "一般帶法:【寒意附身】+【貫甲奇謀】+【反震】",
                suggest : "完全不要給資源"
            }
            break;
        case "秦惟剛" : 
            heroData = {
                status : true,
                level : "(絕) T2",
                stone : "羅鬼",
                talent : "上路點到【天瑤寒光】後隨意",
                skill : "一般帶法:【天瑤寒光】+【神力】+【地域符印】",
                suggest : "兵刃30,五內不需給石,及身+9,不跑碎片"
            }
            break;
        case "殷無邪" : 
            heroData = {
                status : true,
                level : "(絕) T0.5",
                stone : "頭狼",
                talent : "上路點到【無方劍制】後點下拿寒仞",
                skill : "一般帶法:【霜天劍匣】+【無方劍制】+【寒仞】",
                suggest : "資源全給五內能開就開,盡力跑碎片"
            }
            break;
        case "殷劍平" : 
            heroData = {
                status : true,
                level : "(絕) T0.5",
                stone : "荒蜇",
                talent : "下路點一拿【吹角】後全走上",
                skill : "boss帶法:【飛星神劍】+【融會貫通】+【吹角or移行】",
                suggest : "及身滿兵刃滿,五內不需給石,跑碎片到四星"
            }
            break;
        case "鹿昭依" : 
            heroData = {
                status : true,
                level : "(絕) T1",
                stone : "咒石兵",
                talent : "全走上就可以了",
                skill : "一般帶法:【誓死捍衛】+【傅力咒】+【流火縐甲】",
                suggest : "及身滿兵刃滿,不需給五內石"
            }
            break;
        case "夏侯儀" : 
            heroData = {
                status : true,
                level : "(絕) T1",
                stone : "妖術師",
                talent : "下點一拿【焚火真炎】後全走上,真喜歡這角色再走下拿裂袍",
                skill : "一般帶法:【血刃之咒or裂袍咒】+【璃火神決】+【連錦焚炎】，boss戰帶法可以換成【焚火真炎】去抗雷創的機制",
                suggest : "及身滿兵刃滿,五內不需給石,跑碎片到四星"
            }
            break;
        case "曹沁" : 
            heroData = {
                status : true,
                level : "(絕) T0",
                stone : "赤練鬼，boss可以換羅鬼",
                talent : "基本也是全開的角色走上走下都差不多其實boss戰下面兩招有奇效",
                skill : "一般帶法:【劫焰勢殺】+【追心影刃】+【踏血行】",
                suggest : "全部資源都給他五內能開就開,全力跑六"
            }
            break;
        case "慕蓉箏" : 
            heroData = {
                status : true,
                level : "(極) T1.5",
                stone : "妖術師，放補師的也行",
                talent : "全走上",
                skill : "一般帶法:【焚炎之陣】+【盟主號令】+【召炎】",
                suggest : "及身最少+9兵刃30,五內不需給石"
            }
            break;
        case "古倫德" : 
            heroData = {
                status : true,
                level : "(絕) T1",
                stone : "咒石兵",
                talent : "下路點到【無畏】後可以考慮花石走上拿【穿胃脅迫】",
                skill : "一般帶法:【轟雷斬】+【回光槍技】+【無畏】",
                suggest : "及身滿兵刃滿,五內看情況給石,跑碎片到四星"
            }
            break;
        case "葛云衣" : 
            heroData = {
                status : true,
                level : "(絕) T2，55等後T1",
                stone : "師魔術士",
                talent : "下路點到【氣愈之術】後全上",
                skill : "一般帶法:【諸星神耀】+【神氣流轉】+【血咒之仞OR氣愈之術】",
                suggest : "及身滿兵刃55,五內不需給石,最高跑四星"
            }
            break;
        case "尉遲良" : 
            heroData = {
                status : true,
                level : "T0.5",
                stone : "羅鬼",
                talent : "下路點到【機巧製造】後全上",
                skill : "一般帶法:【避實就虛】+【神力】+【蓄勢化形】",
                suggest : "及身滿兵刃滿,五內可給石"
            }
            break;
        case "皇埔申" : 
            heroData = {
                status : true,
                level : "(絕) T1.5",
                stone : "羅鬼",
                talent : "全走上拿【號令群雄】,如果真的想用他輸出再把下路開一開",
                skill : "一般帶法:【號令群雄】+【協心驚雷】+【克敵先機】",
                suggest : "及身+9兵刃30,五內不需給石,不用跑碎片"
            }
            break;
        case "燕明蓉" : 
            heroData = {
                status : true,
                level : "(絕) T1.5",
                stone : "赤練鬼",
                talent : "全走上拿即可",
                skill : "一般帶法:【靈狐穿刺】+【吟狐獵聲】+【趁虛而入】",
                suggest : "看需求練,及身最少+9兵刃30"
            }
            break;
        case "慕容璇玑" : 
        case "慕容璇璣" : 
            heroData = {
                status : true,
                level : "(絕) T0.5",
                stone : "朱燄魔火",
                talent : "先走上拿【雷引之術】,有多的石頭可以去開下面的【神念】",
                skill : "AOE流帶法:【紫殫飛煌】+【千煌雷烈】+【神念】，單點流:【引雷真決】:1.5倍單點加上爆擊20%後開啟協力空間10%的增傷加上冰再10%,超強技能，【雷引之術】:1.5倍個人極其討厭這招很常被他的隨機傳送隊員搞到死",
                suggest : "及身滿兵刃滿,五內可給石,碎片可跑"
            }
            break;
        case "白菀" : 
            heroData = {
                status : true,
                level : "(極) T2",
                stone : "屍魔術士",
                talent : "全走上",
                skill : "一般帶法:【氣愈之術】+【神氛化法】+【血咒之仞OR氣愈之術】",
                suggest : "及身+9兵刃30即可"
            }
            break;
        case "紫楓" : 
            heroData = {
                status : true,
                level : "(絕) T1",
                stone : "朱燄魔火，BOSS換妖術師",
                talent : "輸出流走上拿【神念】後覺得這角色不錯可以走下拿【天瑞仙舞】",
                skill : "一般帶法:【九天神雷】+【引雷召返】+【神念】，替補招:【天瑞仙舞】:全體-1CD+爆擊率30%偶有奇效可考慮",
                suggest : "及身滿兵刃滿,五內可給石,碎片可跑"
            }
            break;
        case "李盈鳳" : 
            heroData = {
                status : true,
                level : "(極) T2",
                stone : "荒蜇，也可以換成羅鬼或赤練鬼",
                talent : "下走一拿【疾風捲塵】後全走上",
                skill : "一般帶法:【馬踏飛燕】+【疾風捲塵】+【橫力】，【穿雲箭】:1.1倍傷害越遠傷害越痛,四格射埕非常霸道,缺點是他是氣力技",
                suggest : "看需求給資源"
            }
            break;
        case "封鈴笙" : 
            heroData = {
                status : true,
                level : "(絕) T0+",
                stone : "屍魔術士",
                talent : "下路點一拿【生聚靈陣】後全走上",
                skill : "一般帶法:【氣愈之術】+【瞬霎神儀】+【神華天舞】",
                suggest : "及身兵刃點滿五內不需多給石頭,跑到四星夠用"
            }
            break;
        case "解臾" : 
            heroData = {
                status : true,
                level : "(絕) T3",
                stone : "咒石兵",
                talent : "這傢伙只有全開的選項要練的話",
                skill : "一般帶法:【龍絕捍衛】+【破陣威壓】+【龍焰化鱗】",
                suggest : "PVP大佬可全給資源"
            }
            break;
        case "鄲陰" : 
            heroData = {
                status : true,
                level : "(絕) T1",
                stone : "鬼面花蛛",
                talent : "走上拿【九怨化戾】後隨意",
                skill : "一般帶法:【冥幻之陣】+【九怨化戾】+【血肉強化】",
                suggest : "及身至少+9兵刃30,不需要跑碎片"
            }
            break;
        case "黎幽" : 
            heroData = {
                status : true,
                level : "(絕) T0",
                stone : "妖術師",
                talent : "走下拿【荊刺連華】後隨意",
                skill : "一般帶法:【幽根幻生】+【牽影追行】+【荊刺連華】",
                suggest : "資源全給,五內可全開,全力跑六"
            }
            break;
        case "韓無砂" : 
            heroData = {
                status : true,
                level : "(極) T1",
                stone : "九環朱蝮",
                talent : "全走上就好了",
                skill : "一般帶法:【佈畏斷生】+【巫蛊蔓延】+【暗之力】",
                suggest : "及身+11兵刃最高55,五內不需給石,不用跑碎片"
            }
            break;
        case "劍邪" : 
            heroData = {
                status : true,
                level : "(絕) T0.5+",
                stone : "羅鬼",
                talent : "下路點到【諸天劍陣】後走上",
                skill : "一般帶法:【万邪天滅】+【諸天劍陣】+【魔威or暗浊】",
                suggest : "兵刃及身全開,石頭可給,可跑碎片"
            }
            break;
        case "宇韶容" : 
            heroData = {
                status : true,
                level : "(絕) T2",
                stone : "咒石兵",
                talent : "下路點到【生烨】後走上",
                skill : "一般帶法:【靈元命護】+【長生斬】+【生烨】",
                suggest : "兵刃及身全開,石頭不用給,看情況跑碎片"
            }
            break;
        case "諸葛艾" : 
            heroData = {
                status : true,
                level : "(絕) T1",
                stone : "朱燄魔火",
                talent : "下路點到【靈智真法】後隨意",
                skill : "一般帶法:【靈智真法】+【司音辦曲】+【琴心】",
                suggest : "兵刃及身全開,石頭可給,可跑碎片"
            }
            break;
        case "韓千秀" : 
            heroData = {
                status : true,
                level : "(絕) T2",
                stone : "羅鬼",
                talent : "下路點一【流火】全上",
                skill : "一般帶法:【走馬飛燕】+【逐風破】+【流火】，替補招【雙環映月】:範圍0.4倍傷害加上飛行特攻還有打到兩個人CD-2,怪很多可以配合陣跟點燃給他們爽一波配上大招【旋刃卷嵐】燒得很爽",
                suggest : "及身最少+9兵刃最少30,五內不需給石,看需求跑星"
            }
            break;
        case "李逍遙" : 
            heroData = {
                status : true,
                level : "T0.5",
                stone : "羅鬼",
                talent : "下路點一【天罡戰氣】全上,有閒石頭開下的【吹角】",
                skill : "一般帶法:【御劍飛刺】+【天罡戰氣】+【吹角】，替補招【天劍】: 0.5倍AOE上極意增傷配上第二招工具人屬性拉滿",
                suggest : "及身兵刃全開,五內可給石,看需求跑碎片"
            }
            break;
        case "林月如" : 
            heroData = {
                status : true,
                level : "T1",
                stone : "赤練鬼，拚傷害或是帶羅鬼都可以",
                talent : "下路到【靈鸞行】後走上",
                skill : "一般帶法:【斬龍訣】+【乾坤一指】+【靈鸞行】",
                suggest : "及身兵刃全開,五內可給石,加減跑六"
            }
            break;
        case "趙靈兒" : 
            heroData = {
                status : true,
                level : "T1",
                stone : "妖術師",
                talent : "下路點一【五氣朝元】全上",
                skill : "一般帶法:【冰咒】+【玄冰咒】+【五氣朝元】",
                suggest : "及身兵刃全開,五內可給石,看需求跑碎片"
            }
            break;
        default :
            heroData= {
                status : false,
                msg : "查無此英靈"
            }
            break;
    }
    return heroData
}

hero.getHeroInfo = (name) => {
    const data = hero.infoList(name);
    const msgText = hero.infoToMsg(data);
    return msgText;
};

hero.getTotalList = () => {
    msg = "冰璃 封寒月 太淵隱逸 陰歙 秦惟剛 殷無邪 殷劍平 鹿昭依 夏侯儀 曹沁 慕蓉箏 古倫德 葛云衣 尉遲良 皇埔申 燕明蓉 慕容璇玑 慕容璇璣 白菀 紫楓 李盈鳳 封鈴笙 解臾 鄲陰 黎幽 韓無砂 劍邪 宇韶容 諸葛艾 韓千秀 李逍遙 林月如 趙靈兒"
    return msg;
}

hero.infoToMsg = (data) => {
    let msg;
    if (data.status) {
        msg = 
        `排名 : ${data.level} \n\n` +
        `魂石 : ${data.stone} \n\n` + 
        `五內 : ${data.talent} \n\n` +
        `技能 : ${data.skill} \n\n` + 
        `建議 : ${data.suggest}`
    } else {
        msg = data.msg;
    }
    return msg
}

module.exports = {
    getHeroInfo: hero.getHeroInfo,
    getTotalList: hero.getTotalList,
};