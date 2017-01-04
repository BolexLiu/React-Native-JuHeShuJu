import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    BackAndroid,
    DatePickerAndroid,
    ScrollView
} from 'react-native';
import Button from 'react-native-button';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
const HistoryDay = ({historyDay, dispatch}) => {
    const {isInit, data, month, day}= historyDay;
    const date = new Date();
    if (isInit) {
        dispatch({type: "getHistory", data: {month: date.getMonth() + 1, day: date.getDay() + 1}})
    }
    return (
        <View style={{flex: 1}}>
            <Button style={styles.timeButton} containerStyle={styles.timeButtonContainer}
                    onPress={()=>opneDatePicker(dispatch)}>
                {`${month}月${day}日`} </Button>
            <ScrollView style={styles.container}>
                {
                    data ? data.result.map((item)=> {
                        return <TouchableOpacity
                            style={{flex: 1}}
                            key={item.e_id}
                            activeOpacity={0.5}
                            onPress={ ()=> {
                                Actions.historyDe({});
                                return dispatch({type: "getHistoryDetail", data: {id: item.e_id}})
                            }}>
                            <Text style={styles.itemViewContainer}>{item.title}</Text>
                        </TouchableOpacity>
                    }) : null
                }
            </ScrollView>
        </View>
    )
}
const opneDatePicker = async(dispatch)=> {
    try {
        const {action, year, month, day} = await DatePickerAndroid.open({
            // 要设置默认值为今天的话，使用`new Date()`即可。
            // 下面显示的会是2020年5月25日。月份是从0开始算的。
            date: new Date()
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
            dispatch({type: "getHistory", data: {month: (month + 1), day}})
        }
    } catch ({code, message}) {
        console.warn('Cannot open date picker', message);
    }
}


const maptopr = (store) => {
    return {
        historyDay: store.historyDay,
    }
}

const styles = StyleSheet.create({
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
    itemViewContainer: {
        fontSize: 18,
        padding: 10,
        color:'#888888',
        borderBottomColor: '#b1b1b1',
        borderBottomWidth: 0.4,
    },
    line2ItemViewContainer: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 16,
        marginBottom: 8,
        color: '#000000',
    },
    timeButton: {
        fontSize: 20,
        color: '#ffffff',
    },
    timeButtonContainer: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6495ED'
    },
    author: {
        flex: 1,
        fontSize: 14,
        color: '#999999',
    },
    time: {
        fontSize: 14,
        color: '#999999',
        textAlign: 'right',
    },
    separator: {
        height: 1,
        // backgroundColor: '#cccccc',
        borderBottomWidth: 0.5,
        borderColor: '#cccccc',
    },
});


export default connect(maptopr)(HistoryDay)