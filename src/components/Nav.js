import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/auth'
import { connect } from 'react-redux'


class Nav extends React.Component {
  render() {
    const { auth, users } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
          </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leaderboard
          </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              Add new question
          </NavLink>
          </li>
          <img width="32" height="32" src={users[auth.userID].avatarURL} alt={auth.userID} />
          <span>{users[auth.userID].name}</span>
          <button onClick={() => this.props.dispatch(logOut())}>Log out</button>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ auth, users }) {
  return { auth, users }
}

export default connect(mapStateToProps)(Nav)