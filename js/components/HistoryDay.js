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
        <ScrollView>
            <Button title={`${month}月${day}日`} onPress={()=>opneDatePicker(dispatch)}/>
            {
                data?data.result.map((item)=>{
                        return <Text key={item.e_id} onPress={()=>{
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



export default connect(maptopr)(HistoryDay)