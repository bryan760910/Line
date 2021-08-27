const request = require('request');
const tools = {};

tools.infoList = (name) => {
    let toolsData;
    switch (name) {
        case "ado" :  // 飾品
            toolsData= {
                status : true,
                msg : "https://upload.cc/i1/2021/07/21/eIrXio.jpg"
            }
            break;
        default :
            toolsData= {
                status : false,
                msg : "錯誤的搜尋"
            }
            break;
    }
    return toolsData;
}

tools.getToolsInfo = (name) => {
    const data = tools.infoList(name);
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