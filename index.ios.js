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

export default class native443 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      times: 0
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
      <TabBarIOS tintColor={'#ee735c'}>
        <TabBarIOS.Item title={ '你好' } systemIcon={ 'contacts' } badge={ 123 }>

        </TabBarIOS.Item>
        <TabBarIOS.Item title={ '我的' } systemIcon={ 'contacts' } badge={ 33 }>

        </TabBarIOS.Item>
        <TabBarIOS.Item title={ '大侠' } systemIcon={ 'downloads' } >

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
