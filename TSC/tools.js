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