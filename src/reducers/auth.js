import { SET_AUTHED_USER, LOG_OUT } from '../actions/auth'

export default function authedUser(state = { loggedIn: false }, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return { loggedIn: true, userID: action.id }
    case LOG_OUT:
      return { loggedIn: false }
    default:
      return state
  }
}