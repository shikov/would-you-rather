import { Avatar, Card, CardContent, CardHeader } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'

function LeaderBoardCard(props) {
  return (
    <Card elevation={10} style={{ margin: '20px auto' }} className="question-card">
      <CardHeader
        avatar={
          <Avatar alt={props.user.name} src={props.user.avatarURL} />
        }
        title={props.index + ' ' + props.user.name}
      />
      <CardContent>
        <h3>Score: {Object.keys(props.user.answers).length + props.user.questions.length}</h3>
        <h4>Created questions: {props.user.questions.length}</h4>
        <h4>Answered questions: {Object.keys(props.user.answers).length}</h4>
      </CardContent>
    </Card>
  )
}


class LeaderBoard extends React.Component {
  render() {
    const sortedUsers = Object.values(this.props.users).sort(
      (user1, user2) => ((Object.keys(user2.answers).length + user2.questions.length)
        - (Object.keys(user1.answers).length + user1.questions.length))
    )
    return (
      <div>
        {sortedUsers.map((user, index) => <LeaderBoardCard key={user.id} user={user} index={index + 1} />)}
      </div>
    )
  }
}

function mapStateToProps({ users }) {
  return { users }
}

export default connect(mapStateToProps)(LeaderBoard)
