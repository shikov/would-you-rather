import { Grid, Paper, Tab, Tabs } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import QuestionCard from './QuestionCard'

class Home extends React.Component {
  state = { selectedTab: 0 }

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
      <div>
        <Paper square>
          <Tabs
            centered
            value={this.state.selectedTab}
            onChange={(event, selectedTab) => this.setState({ selectedTab })}
          >
            <Tab label="Unanswered questions" />
            <Tab label="Answered questions" />
          </Tabs>
        </Paper>
        <div hidden={this.state.selectedTab !== 0}>
          <Grid container>
            {Object.values(unAnsweredQuestions).sort((q1, q2) => q2.timestamp - q1.timestamp).map(q =>
              <QuestionCard
                key={q.id}
                question={q}
                author={users[q.author]}
                answered={false}
              />
            )}
          </Grid>
        </div>
        <div hidden={this.state.selectedTab !== 1}>
          <Grid container>
            {Object.values(answeredQuestions).sort((q1, q2) => q2.timestamp - q1.timestamp).map(q =>
              <QuestionCard
                key={q.id}
                question={q}
                author={users[q.author]}
                answered={true}
              />
            )}
          </Grid>
        </div>
      </div>
    )
  }
}

function mapStateToProps({ auth, users, questions }) {
  return { auth, users, questions }
}

export default connect(mapStateToProps)(Home)
