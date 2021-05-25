import { Avatar, Card, CardContent, CardHeader, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteCard from './VoteCard'

class AnsweredQuestion extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  render() {
    const { auth, users, question } = this.props
    const qAuthor = users[question.author]
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    const optionOneRatio = Math.round(optionOneVotes * 100 / totalVotes,)
    const optionTwoRatio = 100 - optionOneRatio

    return (
      <Grid container justify="center" style={{ margin: "20px auto" }}>
        <Card elevation={10}>
          <CardHeader
            avatar={
              <Avatar alt={qAuthor.name} src={qAuthor.avatarURL} />
            }
            title={'Asked by: ' + qAuthor.name}
          />
          <CardContent>
            <VoteCard
              text={question.optionOne.text}
              votes={optionOneVotes}
              totalVotes={totalVotes}
              ratio={optionOneRatio}
              selected={question.optionOne.votes.includes(auth.userID)}
            />
            <VoteCard
              text={question.optionTwo.text}
              votes={optionTwoVotes}
              totalVotes={totalVotes}
              ratio={optionTwoRatio}
              selected={question.optionTwo.votes.includes(auth.userID)}
            />
          </CardContent>
        </Card>

      </Grid>
    )
  }
}

function mapStateToProps({ auth, users }, { question }) {
  return { auth, users, question }
}

export default connect(mapStateToProps)(AnsweredQuestion)
