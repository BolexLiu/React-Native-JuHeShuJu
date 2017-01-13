import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    ListView,
    BackAndroid,
    Button,
    DatePickerAndroid,
    ScrollView,
    Dimensions,
    Linking,
} from 'react-native';
import {connect} from 'react-redux';
/**
 * 微信列表页
 * @param weixinJx
 * @param dispatch
 * @returns {XML}
 * @constructor
 */
const Me = ({dispatch}) => {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
        }}>
            <Text style={{fontSize: 35,}}>我是谁?</Text>
            <View style={{
                marginTop: 10,
                flexDirection: 'Row',
            }}>
                <Text style={{fontSize: 20,}}>· 大家通常叫我脆的大鸡排||Bolex(伯乐兄)</Text>
                <Image style={itemStyles.image} source={require('../images/logo.jpg')}></Image>
            </View>
            <Text style={{fontSize: 20,}}>· Android普通程序员+1</Text>
            <Text style={{fontSize: 35, marginTop: 20,}}>主页</Text>
            <Text onPress={()=>openUrl("https://bolexliu.github.io/")}
                  style={{fontSize: 20, marginTop: 10, color: "#4f85a9"}}>·
                https://bolexliu.github.io/</Text>
            <Text style={{fontSize: 35, marginTop: 20,}}>简书</Text>
            <Text onPress={()=>openUrl("http://www.jianshu.com/u/abc8086489c7")}
                  style={{fontSize: 20, marginTop: 10, color: "#4f85a9"}}>·
                http://www.jianshu.com/u/abc8086489c7/</Text>
            <Text style={{fontSize: 35, marginTop: 20,}}>有BUG?不来个Github地址?</Text>
            <Text onPress={()=>openUrl("https://github.com/bolexliu")}
                  style={{fontSize: 20, marginTop: 10, color: "#4f85a9"}}>· https://github.com/bolexliu/</Text>
            <Text style={{fontSize: 35, marginTop: 20,}}>知识点</Text>
            <Text style={{fontSize: 20, marginTop: 10, }}>· react-native</Text>
            <Text style={{fontSize: 20, marginTop: 10,}}>· ES6</Text>

            <Text style={{fontSize: 35, marginTop: 20,}}>引用库</Text>
            <Text style={{fontSize: 20, marginTop: 10, }}>· react</Text>
            <Text style={{fontSize: 20, marginTop: 10,}}>· redux</Text>
            <Text style={{fontSize: 20, marginTop: 10, }}>· realm</Text>
            <Text style={{fontSize: 20, marginTop: 10,}}>· react-native-router-flux</Text>
            <Text style={{fontSize: 20, marginTop: 10, }}>· react-native-spinkit</Text>
            <Text style={{fontSize: 20, marginTop: 10, }}>·  redux-saga</Text>

        </View>

    )
}
openUrl = (url)=> {
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Linking.openURL(url);
        } else {
            console.log('无法打开该URI: ' + url);
        }
    })
}


const maptopr = (store) => {
    return {}
}
const itemStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginBottom: 90,
    },

    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    image: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 10,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 17,
    },
});

export default connect(maptopr)(Me)