import { ListView } from 'react-native';

export const PUT_WEIXIN_DATE = "PUT_WEIXIN_DATE"; //获取历史list
const initialState = {
    isInit: true,
    pno: 1, //页码
    ps: 20, //数目
    weixinList: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
    }),
};

export default function getWeixinJx(state = initialState, action = {}) {
    switch (action.type) {
        case PUT_WEIXIN_DATE:
            const {pno, ps, weixinList}=action;
            return {...state, pno, ps, weixinList:state.weixinList.cloneWithRows(weixinList),isInit: false,}
        default :
            return state
    }

}