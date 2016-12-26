import {invokeByPost, serviceNames} from './base'

/**
 * 请求今日历史
 * @param
 */
export function historyDay(date) {
    return invokeByPost(serviceNames.historyDay, date)
}
/**
 * 查询详情
 * @param date
 * @returns {*}
 */
export function historyDetail(date) {
    return invokeByPost(serviceNames.historyDetail, date)
}

