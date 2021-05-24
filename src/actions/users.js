import { _getUsers } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export function getUsers() {
  return dispatch => {
    dispatch(showLoading())
    return _getUsers().then(users => {
      dispatch(receiveUsers(users))
      dispatch(hideLoading())
    })
  }
}