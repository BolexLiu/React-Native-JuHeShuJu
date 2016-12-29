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
    const content = Detail.result[0];
    return (
        <ScrollView>
            <Text>{content.title}</Text>
            <Text>{content.content}</Text>
            {content.picUrl?content.picUrl.map((item)=>{
                console.log(item)
                return  <Image style={{height:500}} key={item.id} source={{uri: item.url}} />
            }):null}
        </ScrollView>
    )
}


const maptopr = (store) => {
    return {
        historyDay: store.historyDay,
    }
}


export default connect(maptopr)(HistoryDetali)