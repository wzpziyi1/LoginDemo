import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
          <Text>{'账号:' + this.props.user.account + '\n密码:' + this.props.user.password}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});