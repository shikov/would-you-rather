import { Button, Card, CardContent, CardHeader } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import { saveQuestion } from '../actions/questions'

class AddQuestion extends React.Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }
  render() {
    return (
      <div>
        <Card style={{ margin: '20px auto' }} className="question-card" elevation={10}>
          <CardHeader title='Add new question' />
          <CardContent>
            <h5>Would you rather...</h5>
            <input style={{ width: '100%' }} type='text' placeholder='Option one' value={this.state.optionOne}
              onChange={e => this.setState({ optionOne: e.target.value })} />
            <h5>Or</h5>
            <input style={{ width: '100%' }} type='text' placeholder='Option one' value={this.state.optionTwo}
              onChange={e => this.setState({ optionTwo: e.target.value })} />
            <div style={{ marginTop: '20px' }}>
              <Button disabled={this.state.optionOne === '' || this.state.optionTwo === ''}
                variant='contained'
                onClick={
                  () => {
                    this.props.dispatch(saveQuestion({
                      optionOneText: this.state.optionOne,
                      optionTwoText: this.state.optionTwo,
                      author: this.props.auth.userID
                    }))
                    this.props.history.push("/")
                  }
                }
              >Submit</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(AddQuestion)
