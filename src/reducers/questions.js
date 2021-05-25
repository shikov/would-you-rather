import { RECEIVE_ANSWER, RECEIVE_QUESTIONS } from '../actions/questions'
import { LOG_OUT } from '../actions/auth'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return { ...state, ...action.questions }
    case RECEIVE_ANSWER:
      return {
        ...state,
        [action.question.qid]: {
          ...state[action.question.qid],
          [action.question.answer]: {
            ...state[action.question.qid][action.question.answer],
            votes: state[action.question.qid][action.question.answer].votes.concat([action.question.authedUser])
          }
        }
      }
    case LOG_OUT:
      return {}
    default: return state
  }
}