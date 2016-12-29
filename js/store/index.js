import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';
import { DEBUG, RDEBUG } from '../Constants';
import historySaga from '../sagas/historySaga'
import weixinSaga from '../sagas/weixinJxSaga'

const logger = store => next => action => {
    if (!DEBUG || !RDEBUG) return next(action);

    if (typeof action === 'function') {
        console.log('>>>> logger => dispatching a function');
    } else {
        console.log('>>>> logger => dispatching', action);
    }

    let result = next(action);
    console.log('next state', store.getState());
    return result;
}

const sagaMiddleware = createSagaMiddleware()

const middle=[logger,sagaMiddleware];
export const store= createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(...middle),
    )
);
sagaMiddleware.run(weixinSaga)
sagaMiddleware.run(historySaga)

