import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import UnAnsweredQuestion from './UnAnsweredQuestion'

class Question extends React.Component {

  render() {
    const { auth, users, questions } = this.props
    const qID = this.props.match.params.question_id
    const question = questions[qID]
    if (!question) {
      return <div>Not Found!</div>
    }
    // const qAuthor = users[question.author]
    const answered = users[auth.userID].answers[qID] !== undefined
    if (answered) {
      return (
        <div>

        </div>
      )
    }
    else {
      return (
        <UnAnsweredQuestion question={question} />
      )
    }
  }
}

function mapStateToProps({ auth, users, questions }) {
  return { auth, users, questions }
}

export default connect(mapStateToProps)(Question)

