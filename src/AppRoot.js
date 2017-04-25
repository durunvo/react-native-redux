import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createRoute from './createRoute'
import createStore from './store/createStore'
import MainScreen from './containers/MainScreen'
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';


const Router = createRouter(createRoute);

export default class AppRoot extends Component {

  render() {
    return (
      <Provider store={createStore()}>
        <NavigationProvider router={Router}>
          <StackNavigation initialRoute="home" />
        </NavigationProvider>
      </Provider>
    )
  }
}
