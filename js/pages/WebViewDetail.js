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
    WebView
} from 'react-native';
import {connect} from 'react-redux';
import CustomTitleBarComp from '../components/CustomTitleBarComp'
import {Actions} from 'react-native-router-flux';
/**
 * 微信详情webview页面
 * @param url
 * @param title
 * @returns {XML}
 * @constructor
 */
const WebViewDetail = ({url,title}) => {
  if(!url){
      return<Text>正在加载中</Text>
  }
    return (
   <View style={{flex:1}}>
       <CustomTitleBarComp
       title={title}
       onLeftBtnClick={_onBack}
         />
        <WebView
            source={{uri:url}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate='normal'
        />
   </View>

    )

}
_onBack=()=>{
    Actions.pop();
    return true;
}


export default connect()(WebViewDetail)