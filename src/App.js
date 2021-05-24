import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './actions/users'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import './App.css'

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
          ? auth.loggedIn
            ? (
              <div>
                <BrowserRouter>
                  <Nav />
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/leaderboard">Leaderboard</Route>
                    <Route exact path="/add">Add new question</Route>
                    <Route exact path="/questions/:question_id">question</Route>
                    <Route>Page not found!</Route>
                  </Switch>
                </BrowserRouter>
              </div>
            )
            : <Login />
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
