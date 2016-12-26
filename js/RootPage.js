/**
 * 根页面
 *    1. 初始化导航器（Navigator）
 *    2. 处理Android返回键事件处理
 * Created by iWgang on 16/05/15.
 * https://github.com/iwgang/GankCamp-React-Native
 */
import React, {Component} from 'react';

import {connect} from 'react-redux';
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
import HistoryDay from './components/HistoryDay'
import styles from './style/SplashStyle';

const RootPage = () => {
    showToast("加载成功");
    return (
        <Router>
            <Scene key="tabBar" tabs={true} tabBarStyle={styles.tabBarStyle} initial={true}>
                <Scene key="home" component={HistoryDay} hideNavBar="true" title={APP_TITLE.TITLE_HOME}
                       icon={TabIcon}/>
                <Scene key="recommend" component={HistoryDay} hideNavBar="true"
                       title={APP_TITLE.TITLE_RECOMMEND} icon={TabIcon}/>
                <Scene key="girl" component={HistoryDay} title={APP_TITLE.TITLE_GIRL} hideNavBar="true"
                       icon={TabIcon}/>
                <Scene key="collect" component={HistoryDay} hideNavBar="true" title={APP_TITLE.TITLE_COLLECT}
                       icon={TabIcon}/>
            </Scene>
        </Router>
    );
}

const TabIcon = ({title, selected}) => {
    let src;
    switch (title) {
        case APP_TITLE.TITLE_HOME:
            if (selected)
                src = require('./images/tabicon/ic_home_tab_gank_cur.png');
            else
                src = require('./images/tabicon/ic_home_tab_gank.png');
            break;
        case APP_TITLE.TITLE_RECOMMEND:
            if (selected)
                src = require('./images/tabicon/ic_home_tab_rec_cur.png');
            else
                src = require('./images/tabicon/ic_home_tab_rec.png');
            break;
        case APP_TITLE.TITLE_GIRL:
            if (selected)
                src = require('./images/tabicon/ic_home_tab_girl_cur.png');
            else
                src = require('./images/tabicon/ic_home_tab_girl.png');
            break;
        case APP_TITLE.TITLE_COLLECT:
            if (selected)
                src = require('./images/tabicon/ic_home_tab_collect_cur.png');
            else
                src = require('./images/tabicon/ic_home_tab_collect.png');
            break;
    }
    return (
        <View style={{flex:1, alignItems:'center', }}>
            <Image source={src}/>
            <Text style={{flex:1, color:selected?'green':'black',fontSize:20,}}>{title}</Text>
        </View>
    )
}

export default RootPage;