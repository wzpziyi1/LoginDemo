import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Button
} from 'react-native'

var screenW = Dimensions.get('window').width;
var screenH = Dimensions.get('window').height;

import CommonNavigatorBar from './CommonNavigatorBar'
import {doLogin} from "../actions/LoginAction";
import * as types from '../types/Types';
import MainPage from './MainPage';

export class LoginPage extends Component {

  shouldComponentUpdate(nextProps, nextState) {


    if (nextProps.status == types.LOGIN_ED && nextProps.isSuccess == true) {

      console.log('----------------------');
      this.props.navigator.push({
        component: MainPage,
        passProps: {
          user: nextProps.user
        }
      });
      return false;
    }
    return true;
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor:'red'}}>
          <CommonNavigatorBar title="登陆"
                              titlestyle={{fontSize: 20, color: 'black'}}
          />

          <View style={styles.mainStyle}>
            <Image source={{uri:'chaolan'}}
                   style={styles.iconStyle}
            />
            <TextInput style={styles.inputStyle}
                       placeholder="请输入账号"
                       autoFocus={true}
                       clearButtonMode="always"
                       ref="account"
            />
            <TextInput style={styles.inputStyle}
                       placeholder="请输入密码"
                       secureTextEntry={true}
                       clearButtonMode="always"
                       ref="password"
            />

            <TouchableOpacity activeOpacity={0.85}
                              onPress={this._clickLoginBtn.bind(this)}
            >
              <View style={styles.loginStyle}>
                <Text style={{fontSize: 15, color: 'white'}}>登陆</Text>
              </View>
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:screenW,marginTop:10}}>
              <Button title='无法登录'
                      onPress={()=>{}}
              />
              <Button title='新用户'
                      onPress={()=>{}}
              />
            </View>

            {/*其他登录方式*/}
            <View style={styles.otherLoginStyle}>
              <Text style={{lineHeight:30,marginLeft: 5}}>其他登录方式</Text>
              <Image source={{uri:'qq'}} style={{width: 30,height: 30,borderRadius:15,marginLeft: 5}}/>
              <Image source={{uri:'wx'}} style={{width: 30,height: 30,borderRadius:15,marginLeft: 5}}/>
              <Image source={{uri:'sina'}} style={{width: 30,height: 30,borderRadius:15,marginLeft: 5}}/>
            </View>
          </View>

        </View>
    )
  }

  _clickLoginBtn() {
    let account = this.refs['account'].value;
    let password = this.refs['password'].value;


    this.props.dispatch(doLogin({
      account: account,
      password: password
    }));
  }


}
function select(store) {
  return {
    status: store.loginIn.status,
    isSuccess: store.loginIn.isSuccess,
    user: store.loginIn.user
  }
}

export default connect(select)(LoginPage);


var styles=StyleSheet.create({
  mainStyle:{
    flex: 1,
    backgroundColor: 'rgb(230,230,230)',
    alignItems: 'center',
  },
  iconStyle:{
    marginTop: 80,
    width: 100,
    height: 100,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 50,
  },

  inputStyle:{
    width: screenW,
    height: 45,
    backgroundColor: 'white',
    marginTop: 15,
    paddingLeft:10,
    paddingRight:10,
    textAlign: 'center',
  },

  loginStyle:{
    width:250,
    height:35,
    backgroundColor:'rgb(73,151,220)',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
    borderRadius:6
  },

  otherLoginStyle:{
    flexDirection:'row',
    position:'absolute',
    bottom:5,
    left:0
  }
});

