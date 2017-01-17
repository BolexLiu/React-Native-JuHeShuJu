'use strict';

/**
 * This exposes the native ToastAndroid module as a JS module. This has a function 'show'
 * which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastAndroid.SHORT or ToastAndroid.LONG
 */
import { NativeModules } from 'react-native';

// 下一句中的ToastAndroid即对应上文
// public String getName()中返回的字符串
// 练习时请务必选择另外的名字！

export default NativeModules.MyToast;