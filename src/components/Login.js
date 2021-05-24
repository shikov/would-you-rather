import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/auth'
import { getQuestions } from '../actions/questions'
import { Avatar, Grid, Paper } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
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
        <Grid>
          <Paper elevation={10}
            style={{ padding: 20, width: 300, margin: "20px auto" }}
          >
            <Grid align="center">
              <LockOutlinedIcon fontSize="large" color="primary" />
              <h2>Please log in to continue</h2>
            </Grid>
            <FormControl fullWidth>
              <InputLabel id="user-select-label">User</InputLabel>
              <Select
                id="user-select"
                labelId="user-select-label"
                fullWidth
                required
                style={{ margin: "20px auto" }}
                value={this.state.userID}
                onChange={e => this.setState({ userID: e.target.value })}
                variant="filled"
              >
                {Object.values(users).map(user =>
                  <MenuItem key={user.id} value={user.id}>
                    <Avatar alt={user.name} src={user.avatarURL} /><span>{user.name}</span>
                  </MenuItem>
                )}
              </Select>
              <Button color="primary" variant="contained" onClick={this.handleSubmit}>Log In</Button>
            </FormControl>
          </Paper>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps)(Login)
