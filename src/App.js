import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './actions/users'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers())
  }

  render() {
    const { auth, loadingBar } = this.props
    return (
      <div>
        <LoadingBar />
        {loadingBar.default === 0
          ? (
            <BrowserRouter>
              <Route exact to="/">
                {auth.loggedIn ? <Home /> : <Login />}
              </Route>
            </BrowserRouter>
          )
          : null
        }
      </div>
    )
  }
}

function mapStateToProps({ auth, loadingBar }) {
  return { auth, loadingBar }
}

export default connect(mapStateToProps)(App)
