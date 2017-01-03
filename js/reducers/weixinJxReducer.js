import {ListView} from 'react-native';

export const PUT_WEIXIN_DATE = "PUT_WEIXIN_DATE"; //获取历史list
export const PUT_WEIXIN_MORE = "PUT_WEIXIN_MORE"; //获取更多
const initialState = {
    isLodinMore: false,
    isInit: true,
    pno: 1, //页码
    ps: 20, //数目
    dataArray: [],
    weixinList: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    }),
};

export default function getWeixinJx(state = initialState, action = {}) {
    switch (action.type) {
        case PUT_WEIXIN_DATE:
            const {pno, ps, weixinList}=action;
            let data = state.dataArray.concat(weixinList);
            return {
                ...state,
                pno,
                ps,
                dataArray: data,
                weixinList: state.weixinList.cloneWithRows(data),
                isInit: false,
                isLodinMore: false
            }
        case PUT_WEIXIN_MORE:
            return {...state, isLodinMore: true, isInit: false}
        default :
            return state
    }

}