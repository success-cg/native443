/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import List from './src/list/list.js';
import { Edit } from './src/edit/edit.js';
import { Account as MyAccount } from './src/account/account.js';
import { more } from './src/_assets/icon/icon.js';

/* 去除remote debugger时候出现的waring */
console.ignoredYellowBox = ['Remote debugger'];

export default class native443 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'video',
      more
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate', nextProps, nextState);
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate(preProps, preState) {
    console.log('componentDidUpdate', preProps, preState);
  }

  render() {
    console.log('render');
    return (
      <TabBarIOS tintColor={ '#ee735c' } unselectedItemTintColor={ '#bbb596' }>
        { /* Icon.TabBarItem是react-native-vector-icons/Ionicons模块对TabBarIOS.Item的封装 */ }
        <Icon.TabBarItem
          title="视频"
          iconName="ios-videocam"
          selected={ this.state.selectedTab === 'video' }
          onPress={ () => { this.setState({ selectedTab: 'video' }); } }
        >
          <List/>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="录制"
          iconName='ios-recording'
          selected={ this.state.selectedTab === 'recording' }
          onPress={ () => { this.setState({ selectedTab: 'recording' }); } }
        >
          <Edit/>
        </Icon.TabBarItem>
        <TabBarIOS.Item
          title="我的"
          icon={ { uri: this.state.more, scale: 7 } }
          selected={ this.state.selectedTab === 'more' }
          onPress={ () => { this.setState({ selectedTab: 'more' }); } }
        >
          <MyAccount/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

AppRegistry.registerComponent('native443', () => native443);
