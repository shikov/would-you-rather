import React from 'react'
import { connect } from 'react-redux'
import { getUsers } from './actions/users'
import LoadingBar from 'react-redux-loading'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Nav from './components/Nav'
import './App.css'
import Question from './components/Question'
import AddQuestion from './components/AddQuestion'
import LeaderBoard from './components/LeaderBoard'
import NotFound from './components/NotFound'

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
                    <Route exact path="/leaderboard" component={LeaderBoard} />
                    <Route exact path="/add" component={AddQuestion} />
                    <Route exact path="/questions/:question_id" component={Question} />
                    <Route component={NotFound} />
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
