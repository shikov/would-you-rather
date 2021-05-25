import React from 'react'
import { connect } from 'react-redux'
import AnsweredQuestion from './AnsweredQuestion'
import NotFound from './NotFound'
import UnAnsweredQuestion from './UnAnsweredQuestion'

class Question extends React.Component {

  render() {
    const { auth, users, questions } = this.props
    const qID = this.props.match.params.question_id
    const question = questions[qID]
    if (!question) {
      return <NotFound />
    }
    // const qAuthor = users[question.author]
    const answered = users[auth.userID].answers[qID] !== undefined
    return (
      <div>
        {answered
          ? <AnsweredQuestion question={question} />
          : <UnAnsweredQuestion question={question} />
        }
      </div>
    )
  }
}

function mapStateToProps({ auth, users, questions }) {
  return { auth, users, questions }
}

export default connect(mapStateToProps)(Question)

