import {ToastAndroid, AlertIOS, Platform} from 'react-native';

export function showToast(msg) {
    if(Platform.OS === 'android'){
        ToastAndroid.show(msg, ToastAndroid.SHORT);
    }else{
        //AlertIOS.prompt("", msg);
    }
}