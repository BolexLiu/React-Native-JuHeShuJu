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
const WebViewDetail = ({url}) => {

    return (
        <WebView
            source={{uri:url}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate='normal'
        />

    )

}


export default connect()(WebViewDetail)