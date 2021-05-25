import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { saveQuestionAnswer } from '../actions/questions'

class UnAnsweredQuestion extends Component {
  state = {
    selectedOption: 'optionOne'
  }
  render() {
    const { auth, users, question, dispatch } = this.props
    const qAuthor = users[question.author]

    return (
      <Grid container justify="center" style={{ margin: "20px auto" }}>
        <Card elevation={10}>
          <CardHeader
            avatar={
              <Avatar alt={qAuthor.name} src={qAuthor.avatarURL} />
            }
            title={qAuthor.name + ' asks:'}
          />
          <CardContent>
            <h2>Would you rather..</h2>
            <div>
              <label>
                <input type="radio" name="vote"
                  checked={this.state.selectedOption === 'optionOne'}
                  onChange={() => this.setState({ selectedOption: 'optionOne' })}
                />
                {question.optionOne.text}
              </label>
            </div>
            <div>
              <label>
                <input type="radio" name="vote"
                  checked={this.state.selectedOption === 'optionTwo'}
                  onChange={() => this.setState({ selectedOption: 'optionTwo' })}
                />
                {question.optionTwo.text}
              </label>
            </div>
            <CardActions>
              <Button variant="contained" color="primary"
                onClick={() => dispatch(saveQuestionAnswer({
                  authedUser: auth.userID, qid: question.id, answer: this.state.selectedOption
                }))}
              >Vote</Button>
            </CardActions>
          </CardContent>
        </Card>

      </Grid>
    )
  }
}

function mapStateToProps({ auth, users }, { question }) {
  return { auth, users, question }
}

export default connect(mapStateToProps)(UnAnsweredQuestion)
