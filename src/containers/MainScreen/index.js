import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Text, View, Image } from 'react-native';
import styles from './style';
import { setSession } from '../../actions/session'

@connect(state => state, { setSession })
export default class MainScreen extends Component {
  render() {
    const { session } = this.props
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'http://www.reactnativeexpress.com/logo.png'}} />
        <Text>Open up main.js to start working on your app! ฟหก</Text>
        <Text onPress={() => this.props.setSession('this is session')}>Press</Text>
        {
          session.user && (
            <Text>{session.user}</Text>
          )
        }
      </View>
    );
  }
}
