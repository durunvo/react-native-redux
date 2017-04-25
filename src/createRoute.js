import MainScreen from './containers/MainScreen'

import {
  createRouter,
} from '@expo/ex-navigation';

export default createRouter(() => ({
  home: () => MainScreen,
}))
