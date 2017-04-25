import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createRoute from './createRoute'
import createStore from './store/createStore'
import MainScreen from './containers/MainScreen'
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';


export default class AppRoot extends Component {

  render() {
    return (
      <Provider store={createStore()}>
        <NavigationProvider router={createRoute}>
          <StackNavigation initialRoute="home" />
        </NavigationProvider>
      </Provider>
    )
  }
}
