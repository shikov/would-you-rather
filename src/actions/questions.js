import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'

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

function receiveQuestion(question) {
  return { type: RECEIVE_QUESTION, question }
}

export function saveQuestion(question) {
  return dispatch => {
    dispatch(showLoading())
    return _saveQuestion(question)
      .then(formattedQuestion => {
        dispatch(receiveQuestion(formattedQuestion))
        dispatch(hideLoading())
      })
  }
}