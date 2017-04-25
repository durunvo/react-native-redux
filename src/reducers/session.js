import * as Constants from '../actions/constants'

const initialState = {
  user: null,
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.SET_SESSION:
      return {
        ...state,
        user: action.user,
      }
    default:
      return state
  }
}
