import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './actions/users'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    const { auth, users } = this.props
    return (
      <div>
        {
          auth.loggedIn
            ? <h1>{auth.userID}</h1>
            : (
              <div>
                <h1>Log In</h1>
                <ul>{Object.values(users).map(user => <li>{user.name}</li>)}</ul>
              </div>
            )
        }
      </div>
    )
  }
}

function mapStateToProps({ auth, users }) {
  return { auth, users }
}

export default connect(mapStateToProps)(App)
