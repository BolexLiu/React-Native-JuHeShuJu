import {call, put, fork} from 'redux-saga/effects'
import {takeEvery, takeLatest} from 'redux-saga'
import {weixinJxList} from  '../service/weixinJx'
import {JX_WEIXIN_KEY} from '../Constants'
import {PUT_WEIXIN_DATE, PUT_WEIXIN_MORE} from '../reducers/weixinJxReducer'
function* getweixinJxList(action) {
    const {pno, ps} = action.data;
    yield put({type: PUT_WEIXIN_MORE});
    const {data:weixinList} = yield call(weixinJxList, {pno: pno, ps: ps, key: JX_WEIXIN_KEY});
    yield put({type: PUT_WEIXIN_DATE, pno: pno + 1, ps: ps, weixinList: weixinList.result.list});
}

function* weixinSaga() {
    yield takeLatest("getweixinJxList", getweixinJxList);
}
export default weixinSaga

