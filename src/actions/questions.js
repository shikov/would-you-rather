import { _getQuestions, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'

function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

export function getQuestions() {
  return dispatch => {
    dispatch(showLoading())
    return _getQuestions().then(questions => {
      dispatch(receiveQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

function receiveAnswer(question) {
  return { type: RECEIVE_ANSWER, question }
}

export function saveQuestionAnswer(question) {
  return dispatch => {
    dispatch(showLoading())
    return _saveQuestionAnswer(question)
      .then(() => {
        dispatch(receiveAnswer(question))
        dispatch(hideLoading())
      })
  }
}
