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
import {Actions} from 'react-native-router-flux';
import CustomTitleBarComp from '../components/CustomTitleBarComp'
const HistoryDetali = ({historyDay, dispatch}) => {
    if (!historyDay.Detail || !historyDay.Detail.result) {
        return <Text>暂无数据</Text>
    }
    const {Detail} = historyDay;
    const content = Detail.result[0];
    let contentArray = content.content.split('。');
    let picNum = -1;
    let contents;
    let splitLength = contentArray.length / content.picUrl.length;
    if (content.picUrl.length === 0) {  //todo:没有图片
        contents = <Text>{content.content}</Text>
    } else if (content.picUrl.length === 1) { //todo:如果只有一张图片
        contents = <View>
            <Image style={{height: 600}} source={{uri: content.picUrl[0].url}}/>
            <Text>{content.content}</Text>
        </View>
    } else {  //todo:多个图片
        contents = contentArray.map((item, i)=> {
            if (i % splitLength === 0) {
                picNum++;
                return <View key={i}>
                    <Image style={{height: 600}} source={{uri: content.picUrl[picNum].url}}/>
                    <Text>{`${item}。`}</Text>
                </View>
            }
            return <Text key={i}>{`${item}。`}</Text>
        })
    }
    return <View style={{flex: 1}}>
        <CustomTitleBarComp
            title={content.title}
            onLeftBtnClick={_onBack}
        />
        <ScrollView style={styles.container}>
            {contents}
        </ScrollView>
    </View>
}
_onBack = ()=> {
    Actions.pop();
    return true;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
});
const maptopr = (store) => {
    return {
        historyDay: store.historyDay,
    }
}


export default connect(maptopr)(HistoryDetali)