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

/* 去除remote debugger时候出现的waring */
console.ignoredYellowBox = ['Remote debugger'];

export default class native443 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0,
      selectedTab: 'video'
    };
  }

  timePlus() {
    let { times } = this.state;
    times++;
    this.setState({
      times: times
    });
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
        <Icon.TabBarItem
          title="视频"
          iconName="ios-videocam"
          selected={ this.state.selectedTab === 'video' }
          onPress={ () => { this.setState({ selectedTab: 'video' }); } }
        >
          <View style={ styles.container }><Text>视频</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="录制"
          iconName="ios-recording"
          selected={ this.state.selectedTab === 'recording' }
          onPress={ () => { this.setState({ selectedTab: 'recording' }); } }
        >
          <View style={ styles.container }><Text>录制</Text></View>
        </Icon.TabBarItem>
        <Icon.TabBarItem
          title="我的"
          iconName="ios-more"
          selected={ this.state.selectedTab === 'more' }
          onPress={ () => { this.setState({ selectedTab: 'more' }); } }
        >
          <View style={ styles.container }><Text>我的</Text></View>
        </Icon.TabBarItem>
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
