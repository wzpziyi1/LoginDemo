import React, {Component, PropTypes} from 'react'

import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import {Provider} from 'react-redux';
import ConfigureStore from '../store/ConfigureStore'

const store = ConfigureStore();

import {Navigator} from 'react-native-deprecated-custom-components';
import LoginPage from "./LoginPage"

export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('---------');
    return (
        <Provider store={store}>
          <Navigator initialRoute={{component: LoginPage}}
                     renderScene={this._renderScene.bind(this)}
          />
        </Provider>
    )
  }

  _renderScene(route, navigator) {
    return (
        <route.component navigator={navigator} {...route}/>
    )
  }
}