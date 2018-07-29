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

// 获取视频的宽度
const { width } = Dimensions.get('window');

export default class List extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([
        {
          '_id': '2dab88bF-E9b9-F224-5A27-e8ABE99Ce7A8',
          'thumb': 'http://dummyimage.com/600x300/f279ec',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '之等头。'
        },
        {
          '_id': 'Eb4C4A66-Dc5E-EEA4-0812-B88dF7AE9e27',
          'thumb': 'http://dummyimage.com/600x300/79f2d4',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '证设想用。'
        },
        {
          '_id': '5D1e24AC-169F-DbB8-9dd7-c4cbd92A7ED7',
          'thumb': 'http://dummyimage.com/600x300/f2b179',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '表反外商来着除。'
        },
        {
          '_id': '5C8C70ef-0D2F-3DCB-eA38-8e8F47d1cd2d',
          'thumb': 'http://dummyimage.com/600x300/8e79f2',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '等位程根快。'
        },
        {
          '_id': 'df45BBC2-BA75-2Ed1-CA2a-318B5Fb46Fb1',
          'thumb': 'http://dummyimage.com/600x300/87f279',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '须意值温上心号转。'
        },
        {
          '_id': '2F3c10Fd-5278-4910-e6bc-f3eECc5fcdce',
          'thumb': 'http://dummyimage.com/600x300/f279aa',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '把求也展规转年。'
        },
        {
          '_id': '68BF7774-fB96-64B7-E11B-ddeDbd126FDd',
          'thumb': 'http://dummyimage.com/600x300/79cef2',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '来立物精较受。'
        },
        {
          '_id': '62bc2e2A-CADC-55C4-Bfcd-ca6378CdEbfB',
          'thumb': 'http://dummyimage.com/600x300/f1f279',
          'video': 'http://pclyas52z.bkt.clouddn.com/%E5%AF%84%E6%98%8E%E6%9C%88-%E5%BC%B1%E9%9F%B3&%E5%A4%A9%E4%BE%9D-%E9%BB%91%E7%99%BDH.mp4',
          'title': '史容难多收段上须感。'
        }
      ])
    };
  }

  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text style={ styles.headerTitle }>视频列表页面</Text>
        </View>
        <ListView
          dataSource={ this.state.dataSource }
          renderRow={ this.renderRow.bind(this) }
          automaticallyAdjustContentInsets={ false } // 自动调整内容，ListView顶部有空隙，设为false可去除
        />
      </View>
    );
  }

  renderRow(rowData) {
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
