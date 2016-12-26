import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    BackAndroid,
} from 'react-native';
import {connect} from 'react-redux';
const HistoryDay = ({historyDay,dispatch}) => {
  const {isInit,data }= historyDay;
    if (isInit){
        dispatch({type: "getHistory"})
    }
        return (
        <View>
            {
                data?data.result.map((item)=>{
                        return <Text key={item.e_id}>{item.title}</Text>
                    }):null
            }
        </View>
    )
}
const maptopr = (store) => {
    return {
        historyDay: store.historyDay,
    }
}

export default connect(maptopr)(HistoryDay)