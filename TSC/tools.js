const request = require('request');
const tools = {};

tools.infoList = (category, name) => {
    let toolsData= {
        status : false,
        msg : "錯誤的搜尋"
    };

    // 飾品
    if (category == "ado") {
        switch (name) {
            case "hand" :  
                toolsData= {
                    status : true,
                    msg : `【手部飾品】共53，沒有卓，14極，39絕： \n\n https://upload.cc/i1/2021/07/21/vfKB8b.jpg`
                }
                break;
            case "body" :  
                toolsData= {
                    status : true,
                    msg : `【衣裝飾品】共28，3卓，6極，19絕： \n\n https://upload.cc/i1/2021/07/21/byNpvH.jpg`
                }
                break;
            case "waist" :  
                toolsData= {
                    status : true,
                    msg : `【腰部飾品】共26，3卓，6極，以及17絕： \n\n https://upload.cc/i1/2021/07/21/17PBO4.jpg`
                }
                break;
            case "head" :  
                toolsData= {
                    status : true,
                    msg : `【頭部飾品】共44，3卓，8極，33絕： \n\n https://upload.cc/i1/2021/07/21/eIrXio.jpg`
                }
                break;
            default :
                toolsData= {
                    status : false,
                    msg : "錯誤的搜尋"
                }
                break;
        }
    }

    // 入夢符相關
    if (category == "dream") {
        switch (name) {
            case "all" : 
                toolsData= {
                    status : true,
                    msg : `【剛破鬼、夜魑、羽魅、化蛇、蝎子、死靈術士、咒石兵、噬魂鬼、鬼面花蛛、兇骸兵、羅鬼、冥葵】`
                }
                break;
            case "剛破鬼" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：織羅齋四象門委託一分為二 \n\n https://www.youtube.com/watch?v=bleA3mb7VFE  \n\n中：蝕之隙 普通5-2 寶箱 \n\n https://www.youtube.com/watch?v=roZZl9ITw2A  \n\n高：主線20-7 寶箱 \n\n https://www.youtube.com/watch?v=1fqblcZV73w  \n\n`
                }
                break;
            case "夜魑" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：(缺) \n\n https://www.youtube.com/watch?v=g_bRzdjwpL0&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=1  \n\n中：織羅齋四象門委託少陰謀策 \n\n https://www.youtube.com/watch?v=liE548SXiCk&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=2  \n\n高：主線17-6 鬼方 寶箱 \n\n https://www.youtube.com/watch?v=3BXJ3dEa-bM&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=3  \n\n`
                }
            case "羽魅" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線10-8 寶箱 \n\n https://www.youtube.com/watch?v=UZtHj8cIya0&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=16  \n\n中：山河志指定委託當我入夢·其四(陰歙) \n\n https://www.youtube.com/watch?v=ePHXOkvMtaQ&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=17  \n\n高：織羅齋四象門委託少陰探查，50級光屬性靈脈光淵委託 \n\n https://www.youtube.com/watch?v=aqILlTps6O8&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=18  \n\n`
                }
                break;
            case "化蛇" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線3-3寶箱 \n\n https://www.youtube.com/watch?v=eDtAsT4hGxo&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=4  \n\n中：蝕之隙 普通3-5 寶箱 \n\n https://www.youtube.com/watch?v=9aBLWqDUe8s&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=5  \n\n高：山河志指定委託當我入夢·其一(尉遲良) 觸發等級49 \n\n https://www.youtube.com/watch?v=g9m_vQNT0ks&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=6  \n\n`
                }
                break;
            case "蝎子" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線4-3 寶箱 \n\n https://www.youtube.com/watch?v=H0YXgQWP_7g&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=10  \n\n中：山河志指定委託當我入夢·其二(鹿昭依) \n\n https://www.youtube.com/watch?v=fe4WZJuOyBE&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=11  \n\n高：蝕之隙 普通5-5 寶箱 \n\n https://www.youtube.com/watch?v=1OwXmr00KY4&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=12  \n\n`
                }
                break;
            case "死靈術士" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線8-5 寶箱 \n\n https://www.youtube.com/watch?v=oQf9zP9n4UA&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=13  \n\n中：山河志指定委託當我入夢·其三(虞兮) \n\n https://www.youtube.com/watch?v=H8Zb9tWwUxg&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=14  \n\n高：60級光脈委託(倒序書裡領取，等級60解鎖) \n\n https://www.youtube.com/watch?v=7g3yR_v38mU&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=15  \n\n`
                }
                break;
            case "咒石兵" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線11-2 寶箱 \n\n https://www.youtube.com/watch?v=m4oGAZ8iagk&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=19  \n\n中：主線15-6 行刑者 寶箱 \n\n https://www.youtube.com/watch?v=8oImnZjVWwk&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=20  \n\n高：主線19-2 寶箱 \n\n https://www.youtube.com/watch?v=x2JypwHV7C8&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=21  \n\n`
                }
                break;
            case "噬魂鬼" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：(缺) \n\n https://www.youtube.com/watch?v=bleA3mb7VFE&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=22  \n\n中：織羅齋四象門委託光淵密藏(未確定觸發等級45-46？ 40級光之靈脈) \n\n (暫無) \n\n高：55級山河志指定委託當我入夢·其五(三星韓無砂) \n\n https://www.youtube.com/watch?v=1fqblcZV73w&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=24  \n\n`
                }
                break;
            case "鬼面花蛛" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線22章 織羅齋任務 支線 患難 \n\n https://www.youtube.com/watch?v=ntz-T46y6qM&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=25  \n\n中：主線23-3之後前往23-4路上的寶箱 \n\n https://www.youtube.com/watch?v=lgr-ElHozFA&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=26 \n\n高：蝕之隙9-5 寶箱 \n\n https://www.youtube.com/watch?v=09kDrDsBlAY&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=27  \n\n`
                }
                break;
            case "兇骸兵" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：主線22-3之後的支線地圖外寶箱 \n\n https://www.youtube.com/watch?v=J0qk8NrbthM&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=28  \n\n中：營地對話-疑心重重 織羅齋領取(兇骸兵中級的疑心重重對話在 倒敘書-尉遲良的回憶-第十四幕 最後一個對話就是疑心重重) \n\n https://www.youtube.com/watch?v=q-qdx3rzzDE&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=29 \n\n高：蝕之隙10-4 寶箱 \n\n https://www.youtube.com/watch?v=kbMmjvGt73k&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=30  \n\n`
                }
                break;
            case "羅鬼" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：(缺) \n\n https://www.youtube.com/watch?v=9hIz3VBnR8s&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=31  \n\n中：(缺) \n\n https://www.youtube.com/watch?v=waQFC-Rry9Q&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=32 \n\n高：幻林 焰靈族的支線“雙面” 寶箱 \n\n https://www.youtube.com/watch?v=kL-LRt3o5QE&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=33  \n\n`
                }
                break;
            case "冥葵" : 
                toolsData= {
                    status : true,
                    msg : 
                    `初：(缺) \n\n https://www.youtube.com/watch?v=pVuZbiq_Re8&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=34  \n\n中：(缺) \n\n https://www.youtube.com/watch?v=YY4ijt_VaWA&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=35 \n\n高：(缺) \n\n https://www.youtube.com/watch?v=n4M1b7MM53w&list=PLTyfBFNJiY4LH7nb5yuPB9QOAHsc3nH3s&index=36  \n\n`
                }
                break;
            default :
                toolsData= {
                    status : false,
                    msg : "錯誤的搜尋"
                }
                break;
        }
    }
    
    return toolsData;
}

tools.getToolsInfo = (category, name) => {
    const data = tools.infoList(category, name);
    const msgText = tools.infoToMsg(data);
    return msgText;
};

tools.infoToMsg = (data) => {
    let msg = "錯誤的搜尋";
    if (data.status) {
        msg = data.msg;
    }
    return msg
}

module.exports = {
    getToolsInfo: tools.getToolsInfo,
};