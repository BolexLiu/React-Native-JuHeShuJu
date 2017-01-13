import React, {Component} from 'react';
import {View, Text, Image, Animated} from 'react-native';

import styles from './style/SplashStyle';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);

        this.state = {
            fadeAnim: new Animated.Value(0),
            fadeAnimOther: new Animated.Value(0),
            fadeAnimContainer: new Animated.Value(1),
        };
    }
    componentDidMount() {
        this._inAnim(() => {
            setTimeout(() => {
                this._outAnim(() => this.props.onAnimEnd && this.props.onAnimEnd());
            }, 1000);
        });
    }

    render() {

        let transformTitle2 = [
            {
                translateX: this.state.fadeAnimOther.interpolate({inputRange: [0, 1], outputRange: [50, 0]}),
            }
        ];

        let transformTitle3 = [
            {
                translateY: this.state.fadeAnimOther.interpolate({inputRange: [0, 1], outputRange: [150, 0]}),
            }
        ];
        return (
            <Animated.View style={[styles.container, this.props.style, {opacity: this.state.fadeAnimContainer}]}>
                <Animated.View style={[styles.content, {
                    transform: [   // Array order matters
                        {scale: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [1, 2],
                        })},
                        {translateX: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 800],
                        })},
                        {translateY: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 500],
                        })},
                        {rotate: this.state.fadeAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [
                                '0deg', '360deg' // 'deg' or 'rad'
                            ],
                        })},
                    ]}
                ]}>
                    <Image style={styles.image} source={require('./images/logo.jpg')}></Image>
                </Animated.View>
                <Animated.View style={{opacity: this.state.fadeAnim}}>
                    <Text style={styles.text1}>聚合数据</Text>
                </Animated.View>

                <Animated.View style={{opacity: this.state.fadeAnimOther, transform: transformTitle3}}>
                    <Text style={styles.text3}>提供今日历史,微信热点文章</Text>
                </Animated.View>
            </Animated.View>
        );
    }

    _inAnim(callback) {
        Animated.sequence([
            Animated.timing(this.state.fadeAnim,  {
                toValue: 1,
                duration: 1000,
            }),
            Animated.timing(this.state.fadeAnimOther,  {
                toValue: 1,
                duration: 500,
            }),
        ]).start(() => callback && callback());
    }

    _outAnim(callback) {
        Animated.sequence([
            Animated.timing(this.state.fadeAnim,  {
                toValue: 0,
                duration: 1000,
            }),
            Animated.timing(this.state.fadeAnimOther,  {
                toValue: 0,
                duration: 500,
            }),
            Animated.timing(this.state.fadeAnimContainer,  {
                toValue: 0,
                duration: 500,
            }),
        ]).start(() => callback && callback());
    }
}