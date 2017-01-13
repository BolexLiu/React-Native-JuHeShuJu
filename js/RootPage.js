/**
 * 根页面
 *    1. 初始化导航器（Navigator）
 *    2. 处理Android返回键事件处理
 * Created by iWgang on 16/05/15.
 * https://github.com/iwgang/GankCamp-React-Native
 */
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    BackAndroid,
} from 'react-native';

import {
    Router,
    Scene,
    Actions,
    TabBar,
    Reducer
} from 'react-native-router-flux';
import {APP_TITLE} from './Constants';
import {showToast} from './components/Toast';
import HistoryDay from './pages/HistoryDay'
import WeixinJx from './pages/WeixinJx'
import WebViewDetail from './pages/WebViewDetail'
import Me from './pages/Me'
import HistoryDetali from './pages/HistoryDetali'
import styles from './style/SplashStyle';

const RootPage = () => {
    showToast("加载成功");
    return (
        <Router>

            <Scene key="historyDe" component={HistoryDetali} title="历史详情" hideNavBar="true"/>
            <Scene key="webView" component={WebViewDetail} title="查看详情" hideNavBar="true"/>
            <Scene key="tabBar" tabs={true} tabBarStyle={styles.tabBarStyle} hideNavBar="true"
                   tabTitleStyle={{backgroundColor: '#6495ED',}} initial={true}>
                <Scene key="home" component={HistoryDay} title={APP_TITLE.TITLE_HISTORY}
                       hideNavBar="true"
                       icon={TabIcon}/>
                <Scene key="recommend" component={WeixinJx}
                       hideNavBar="true"
                       title={APP_TITLE.TITLE_WEIXIN} icon={TabIcon}/>
                <Scene key="me" component={Me}
                       hideNavBar="true"
                       title={APP_TITLE.TITLE_ABOUT_ME} icon={TabIcon}/>
            </Scene>
        </Router>
    );
}

const TabIcon = ({title, selected}) => {
    let src;
    switch (title) {
        case APP_TITLE.TITLE_HISTORY:
            if (selected)
                src = require('./images/tabicon/ic_home_tab_gank_cur.png');
            else
                src = require('./images/tabicon/ic_home_tab_gank.png');
            break;
        case APP_TITLE.TITLE_WEIXIN:
            if (selected)
                src = require('./images/tabicon/ic_home_tab_rec_cur.png');
            else
                src = require('./images/tabicon/ic_home_tab_rec.png');
            break;
        case APP_TITLE.TITLE_ABOUT_ME:
            if (selected)
                src = require('./images/tabicon/ic_about_me_c_cur.png');
            else
                src = require('./images/tabicon/ic_about_me_c.png');
            break;
    }
    return (
        <View style={{flex: 1, alignItems: 'center',}}>
            <Image source={src}/>
            <Text style={{flex: 1, color: selected ? '#6495ED' : '#bfbfbf', fontSize: 18,}}>{title}</Text>
        </View>
    )
}

export default RootPage;