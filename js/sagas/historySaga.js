import {call, put, fork} from 'redux-saga/effects'
import {takeEvery, takeLatest} from 'redux-saga'
import {historyDay,historyDetail} from  '../service/historyDay'
import {HISTORY_KEY} from '../Constants'
import {GET_HISTORY_LIST,GET_HISTORY_DETALI} from '../reducers/historyReducer'
function* getHistory(action) {
    const{month,day}=action.data;
    const {data:history} = yield call(historyDay, {date: `${month}/${day}`, key: HISTORY_KEY});
    yield put({type: GET_HISTORY_LIST, data: history, month:month, day:day});
}
function* getHistoryDetail(action) {
    const{id}=action.data;
    const {data:Detail} = yield call(historyDetail, {e_id: id, key: HISTORY_KEY});
    yield put({type: GET_HISTORY_DETALI,  Detail});
}

function* historySaga() {
    yield takeLatest("getHistory", getHistory);
    yield takeLatest("getHistoryDetail", getHistoryDetail);

}
export default historySaga

