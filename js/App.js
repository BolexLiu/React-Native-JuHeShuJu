import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {DEBUG, RDEBUG} from './Constants';
import RootPage from './RootPage'
import SplashScreen from './SplashScreen';
global.LOG = (msg) => {
    if (DEBUG) console.log(msg);
}

global.RLOG = (msg) => {
    if (DEBUG && RDEBUG) console.log(msg);
}
class App extends Component {
    constructor(props) {
        super(props);

        this._unmount = false;
        this.state = {
            isShowSplash: true,
        }
    }

    componentWillUnmount() {
        this._unmount = true;
    }

    render() {
        if (this.state.isShowSplash) {
            return <SplashScreen onAnimEnd={() => !this._unmount && this.setState({isShowSplash: false})}/>
        } else {
            return (
                <Provider store={store}>
                    <RootPage />
                </Provider>
            )
        }
    }
}

export default App;