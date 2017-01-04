import React, { Component, PropTypes } from 'react';
import { StyleSheet, View, Text, Image, Platform } from 'react-native';
import CustomTitleBarHeaderTabComp from './CustomTitleBarHeaderTabComp';
import CommonTouchableComp from './CommonTouchableComp';

const IMG_BACK_SRC = require('../images/ic_back.png');

class CustomTitleBarComp extends Component {

  static propTypes = {
    title: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.isMainPage = this.props.isMainPage;
    this.state = {
      opacity: typeof this.props.defBackgroundOpacity === 'undefined' ? 1 : this.props.defBackgroundOpacity,
    }
  }

  render() {
    let placeholderView;
    let leftView;
    let rightView;

    // console.log('bar', this);
    if (this.props.onLeftBtnClick) {
      leftView = (
          <CommonTouchableComp onPress={this.props.onLeftBtnClick}>
            <View style={styles.bothBtnContainer}>
              <Image source={IMG_BACK_SRC} />
            </View>
          </CommonTouchableComp>
      );
    } else {
      leftView = <View style={styles.placeholderView} />;
    }

    if (this.props.rightText) {
      rightView = (
          <CommonTouchableComp onPress={this.props.onRightBtnClick}>
            <View style={styles.bothBtnContainer}>
              <Text style={styles.titleBarRightText}>{this.props.rightText}</Text>
            </View>
          </CommonTouchableComp>
      );
    } else {
      rightView = <View style={styles.placeholderView} />;
    }


    let titleBarBackgoundRgba = `rgba(100,149,237, ${this.state.opacity})`;
    return (
      <View style={[{backgroundColor: titleBarBackgoundRgba}, {paddingTop:(Platform.OS === 'android' && Platform.Version < 19) ?
                0 : (Platform.OS === 'android' ? ((this.props.onLeftBtnClick|| this.props.hasTitle) ?0:24) : 20)}, this.props.titleBarStyle]}>
        <View style={[styles.titleBarContainer,{height:(this.props.onLeftBtnClick|| this.props.hasTitle)?60:0}]}>
          {leftView}
          <Text style={[styles.titleBarTitle, {paddingLeft: this.props.hasTitle? 30:0}]} numberOfLines={1}>{this.props.title}</Text>
          {rightView}
        </View>
        {this._renderHeaderTabContent()}
      </View>
    );
  }

  /**
   * 供其它地方调用来改动标题栏中的tab指示器位置
   */
  onPageScroll(offset) {
    this.refs.titleBarHeaderTab.onPageScroll(offset);
  }

  /**
   * 供其它地方调用来设置背景透明度
   */
  setBackgroundOpacity(opacity) {
    this.setState({opacity});
  }

  _renderHeaderTabContent() {
    if (typeof this.props.children === 'undefined') {
      return;
    }

    // console.log('Customer',this);
    return (
      <CustomTitleBarHeaderTabComp ref="titleBarHeaderTab">
        {this.props.children}
      </CustomTitleBarHeaderTabComp>
    )
  }

}
const TITLE_BAR_HEIGHT = 0;

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'android' && Platform.Version < 19) ? 0 : (Platform.OS === 'android' ? 24 : 20),
  },
  titleBarContainer: {
    flexDirection: 'row',
  },
  titleBarTitle: {
    flex: 1,
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: Platform.OS === 'android' ? 'left' : 'center',
  },
  bothBtnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  titleBarRightText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: 14,
  },
  placeholderView: {
    width: TITLE_BAR_HEIGHT,
  },
});

CustomTitleBarComp.HeaderTabItem = CustomTitleBarHeaderTabComp.HeaderTabItem;

export default CustomTitleBarComp;