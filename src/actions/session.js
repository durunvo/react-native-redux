import * as Constants from './constants'

export const setSession = (user) => ({
  type: Constants.SET_SESSION,
  user,
})
