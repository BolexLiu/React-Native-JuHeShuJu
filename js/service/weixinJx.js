import {invokeByPost, serviceNames} from './base'

/**
 * 请求今日历史
 * @param
 */
export function weixinJxList(date) {
    return invokeByPost(serviceNames.weixinJxList, date)
}
