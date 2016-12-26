import { combineReducers } from 'redux';
import getHistory from './historyReducer'

// ... other reducers

export default combineReducers({
    historyDay: getHistory,
    // ... other reducers
});