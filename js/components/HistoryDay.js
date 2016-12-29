import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    BackAndroid,
    Button,
    DatePickerAndroid,
    ScrollView
} from 'react-native';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
const HistoryDay = ({historyDay,dispatch}) => {
  const {isInit,data,month,day }= historyDay;
    const date = new Date();
    if (isInit){
        dispatch({type: "getHistory",data: {month:date.getMonth()+1,day:date.getDay()}})
    }
        return (
        <ScrollView style={styles.container} >
            <Button title={`${month}月${day}日`} onPress={()=>opneDatePicker(dispatch)}/>
            {
                data?data.result.map((item)=>{
                        return <Text  style={styles.itemViewContainer} key={item.e_id} onPress={()=>{
                               Actions.historyDe({});
                           return dispatch({type:"getHistoryDetail",data:{id:item.e_id}})
                        }}>{item.title}</Text>
                    }):null
            }
        </ScrollView>
    )
}
const  opneDatePicker=async(dispatch)=>{
    try {
        const {action, year, month, day} = await DatePickerAndroid.open({
            // 要设置默认值为今天的话，使用`new Date()`即可。
            // 下面显示的会是2020年5月25日。月份是从0开始算的。
            date: new Date()
        });
        if (action !== DatePickerAndroid.dismissedAction) {
            // 这里开始可以处理用户选好的年月日三个参数：year, month (0-11), day
            dispatch({type: "getHistory",data: {month:(month+1),day}})
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
        backgroundColor: '#f0f0f0',
        marginBottom:90,
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
    },
    itemViewContainer: {
        padding: 10,
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