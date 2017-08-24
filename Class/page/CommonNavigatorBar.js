
import React,{Component, PropTypes} from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Platform
} from 'react-native'

var screenW = Dimensions.get('window').width;

export default class CommonNavigatorBar extends Component {

  static propTypes = {
    title: PropTypes.string,
    titleView: PropTypes.object,
    leftBarItem: PropTypes.object,
    rightBarItem: PropTypes.object,

    // 样式
    titleStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number]),

    barStyle:PropTypes.oneOfType([PropTypes.object,PropTypes.number])
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={[styles.barStyle1, this.props.barStyle]}>
          <View style={styles.containViewStyle}>
            {/*左边item*/}
            <View style={styles.leftItemStyle}>
              {this.props.leftBarItem}
            </View>

            {/*中间view*/}
            <View style={styles.titleViewStyle}>
              {this.props.title ? <Text style={this.props.titleStyle}>{this.props.title}</Text> : this.props.titleView}
            </View>

            {/*右边item*/}
            <View style={styles.rightItemStyle}>
              {this.props.rightBarItem}
            </View>
          </View>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  barStyle1: {
    width: screenW,
    height: Platform.OS == 'ios'? 64 : 44,
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: '#e8e8e8',
  },

  containViewStyle: {
    marginTop: Platform.OS == 'ios'? 20 : 0,
    flexDirection: 'row',
    height: 44,
    width: screenW,
    backgroundColor:'transparent'
  },

  leftItemStyle: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    marginLeft: -12,
  },

  titleViewStyle: {
    flex: 3,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },

  rightItemStyle: {
    flex: 1,
    height: 44,
    alignItems: 'center',
    marginRight: -10
  }
});