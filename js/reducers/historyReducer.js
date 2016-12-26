export const GET_HISTORY_LIST = "GET_HISTORY_LIST"; //获取历史list
export const GET_HISTORY_DETALI = "GET_HISTORY_DETALI"; //获取历史list

const initialState = {
    isInit: true,
    data: null,
    month: 1,
    day: 1,
    Detail:null,
};

export default function getHistory(state = initialState, action = {}) {
    switch (action.type) {
        case GET_HISTORY_LIST:
            const {data, month, day}=action;
            return {...state,  data, isInit: false,  month,  day}
        case GET_HISTORY_DETALI:
            const {Detail}=action;
            return {...state,  Detail}
        default :
            return state;
    }

}