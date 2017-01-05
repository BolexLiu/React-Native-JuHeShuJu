import request from '../utils/request'

const baseURL = 'http://v.juhe.cn';


export const serviceNames = {
    historyDay:'/todayOnhistory/queryEvent.php',
    historyDetail:'/todayOnhistory/queryDetail.php',
    weixinJxList:'/weixin/query',
    news:'/toutiao/index'
}

export async function invokeByPost(serviceName,data){
    const apiURL = `${baseURL}${serviceName}?${jsonToget(data)}`
    return request(apiURL)
}


/**
 * json转换get参数
 * @param val
 * @returns {string|XML}
 */
jsonToget=(val)=>{
      val= JSON.stringify(val)
    val = val.replace(/\t/g, "");
    val = val.replace(/\"/g, "").replace("{", "").replace("}", "").replace(",", "&").replace(":", "=");
    return val.replace(/\"/g, "").replace(/{/g, "").replace(/}/g, "").replace(/,/g, "&").replace(/:/g, "=");
}
