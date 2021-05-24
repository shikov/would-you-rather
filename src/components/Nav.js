import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/auth'
import { connect } from 'react-redux'
import { AppBar, Avatar, Button, Toolbar } from '@material-ui/core'

class Nav extends React.Component {
  render() {
    const { auth, users } = this.props

    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <NavLink className="navLink" to='/' exact activeClassName='active'>
                Home
              </NavLink>
              <NavLink className="navLink" to='/leaderboard' activeClassName='active'>
                Leaderboard
              </NavLink>
              <NavLink className="navLink" to='/add' activeClassName='active'>
                Add new question
              </NavLink>
            </div>
            <div>{users[auth.userID].name}</div>
            <Avatar style={{ margin: "0px 10px" }} alt={users[auth.userID].name} src={users[auth.userID].avatarURL} />
            <Button variant="contained" size="small" onClick={() => this.props.dispatch(logOut())}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

function mapStateToProps({ auth, users }) {
  return { auth, users }
}

export default connect(mapStateToProps)(Nav)