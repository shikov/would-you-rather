import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/auth'
import { getQuestions } from '../actions/questions'

class Login extends Component {
  state = { userID: Object.values(this.props.users)[0].id }

  handleSubmit = event => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.userID))
    this.props.dispatch(getQuestions())
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <h1>Please Log In to continue</h1>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.userID} onChange={e => this.setState({ userID: e.target.value })}>
            {Object.values(users).map(user =>
              <option key={user.id} value={user.id}>{user.name}</option>
            )}
          </select>
          <input type="submit" value="Login" />
        </form>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps)(Login)
