import request from '../utils/request'

const baseURL = 'http://v.juhe.cn';

export const serviceNames = {
    historyDay:'/todayOnhistory/queryEvent.php',
}

export async function invokeByPost(serviceName,data){
    // console.log(methodName,data)
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
