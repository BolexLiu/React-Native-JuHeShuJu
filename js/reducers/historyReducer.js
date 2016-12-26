export const GET_DATA="GET_DATA";
const initialState = {
    isInit:true,
    data: null,
};

export default function getHistory(state = initialState, action = {}) {
    switch (action.type){
        case GET_DATA:
            return {...state,data:{...action.data},isInit:false}

        default :
            return state;
    }

}