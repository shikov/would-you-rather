import React from 'react'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    const { auth, users, questions } = this.props
    const user = users[auth.userID]
    const answeredQuestions = {}
    const unAnsweredQuestions = { ...questions }
    Object.keys(user.answers).forEach(qID => {
      delete unAnsweredQuestions[qID]
      answeredQuestions[qID] = questions[qID]
    })
    return (
      <div>Home</div>
    )
  }
}

function mapStateToProps({ auth, users, questions }) {
  return { auth, users, questions }
}

export default connect(mapStateToProps)(Home)
