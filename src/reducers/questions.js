import { RECEIVE_QUESTIONS } from '../actions/questions'
import { LOG_OUT } from '../actions/auth'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions }
    case LOG_OUT:
      return {}
    default: return state
  }
}