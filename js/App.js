import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {DEBUG, RDEBUG} from './Constants';
import RootPage from './RootPage'

global.LOG = (msg) => {
    if (DEBUG) console.log(msg);
}

global.RLOG = (msg) => {
    if (DEBUG && RDEBUG) console.log(msg);
}
const App = () => {
    return (
        <Provider store={store}>
            <RootPage />
        </Provider>
    )
}

export default App;