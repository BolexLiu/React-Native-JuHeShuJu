import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    View,
    BackAndroid,
    Button,
    DatePickerAndroid
    , ScrollView
} from 'react-native';
import {connect} from 'react-redux';
const HistoryDetali = ({historyDay, dispatch}) => {
    if (!historyDay.Detail || !historyDay.Detail.result) {
        return <Text>暂无数据</Text>
    }
    const {Detail} = historyDay;
    return (
        <ScrollView>
            <Text>{Detail.result[0].title}</Text>
            <Text>{Detail.result[0].content}</Text>
        </ScrollView>
    )
}


const maptopr = (store) => {
    return {
        historyDay: store.historyDay,
    }
}


export default connect(maptopr)(HistoryDetali)