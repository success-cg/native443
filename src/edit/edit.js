import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export class Edit extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text style={ styles.welcome }>编辑页面</Text>
      </View>
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
