import Expo from 'expo';
import React, { Component } from 'react';
import AppRoot from './src/AppRoot'

class App extends Component {
  render() {
    return (
      <AppRoot />
    );
  }
}

Expo.registerRootComponent(App);
