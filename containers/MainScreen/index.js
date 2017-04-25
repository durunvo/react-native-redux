import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: 'http://www.reactnativeexpress.com/logo.png'}} />
        <Text>Open up main.js to start working on your app! ฟหก</Text>
        <Text>Open up main.js to start working on your app! ฟหก</Text>
      </View>
    );
  }
}
