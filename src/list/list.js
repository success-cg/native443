import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image,
  Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { http } from '../common/tools.js';

// 获取视频的宽度
const { width } = Dimensions.get('window');

export default class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([])
    };
  }

  componentDidMount() {
    this._fetchData();
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerTitle }>视频列表页面</Text>
        </View>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this._renderRow.bind(this) }
          automaticallyAdjustContentInsets={ false } // 自动调整内容，ListView顶部有空隙，设为false可去除
          enableEmptySections={ true } // 允许列表为空
        />
      </View>
    );
  }

  _renderRow(rowData) {
    return (
      <TouchableHighlight>
        <View style={ styles.item }>
          <Text style={ styles.title }>{ rowData.title }</Text>
          <Image style={ styles.thumb } source={ { uri: rowData.thumb } }>
            <Icon style={ styles.play } name='ios-play' size={ 28 }/>
          </Image>
          <View style={ styles.itemFooter }>
            <View style={ styles.handleBox }>
              <Icon style={ styles.up } name='ios-heart-empty' size={ 22 }/>
              <Text style={ styles.handleText }>喜欢</Text>
            </View>
            <View style={ styles.handleBox }>
              <Icon style={ styles.commentIcon } name='ios-chatboxes' size={ 22 }/>
              <Text style={ styles.handleText }>评论</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _fetchData() {
    const url = 'http://rap2api.taobao.org/app/mock/24515/api/creation/videoList';
    http.get(url, { a: 1, b: 2 }).then(({ data: { code, message, data } }) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      });
    }).catch((err) => {
      console.log(err);
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    paddingTop: 25,
    paddingBottom: 12,
    backgroundColor: '#ee735c'
  },
  headerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center'
  },
  item: {
    width: width,
    marginBottom: 10,
    backgroundColor: '#fff'
  },
  thumb: {
    width: width,
    height: width * 0.5,
    resizeMode: 'cover'
  },
  title: {
    padding: 10,
    fontSize: 18,
    color: '#333'
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#eee'
  },
  handleBox: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: width / 2 - 0.5,
    backgroundColor: '#fff'
  },
  play: {
    position: 'absolute',
    bottom: 14,
    right: 14,
    width: 46,
    height: 46,
    padding: 9,
    paddingLeft: 18,
    backgroundColor: 'transparent',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 23,
    color: '#ed7b66'
  },
  handleText: {
    paddingLeft: 12,
    fontSize: 18,
    color: '#333'
  },
  up: {
    color: '#333'
  },
  commentIcon: {
    color: '#333'
  }
});
