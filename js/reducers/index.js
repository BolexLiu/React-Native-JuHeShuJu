import {combineReducers} from 'redux';
import getHistory from './historyReducer'
import getWeixinJx from './weixinJxReducer'

// ... other reducers

export default combineReducers({
    historyDay: getHistory,
    weixinJx: getWeixinJx,
    // ... other reducers
});