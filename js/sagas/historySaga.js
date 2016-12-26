import {call, put, fork} from 'redux-saga/effects'
import {takeEvery, takeLatest} from 'redux-saga'
import {historyDay} from  '../service/historyDay'
import {HISTORY_KEY} from '../Constants'
import {GET_DATA} from '../reducers/historyReducer'
function* getHistory(action) {
    let date= {date: "1/2", key: HISTORY_KEY};
    const {data:history} = yield call(historyDay, date);
    yield put({type: GET_DATA, data: history});
}

function* mySaga() {
    yield takeLatest("getHistory", getHistory);
}
export default mySaga

