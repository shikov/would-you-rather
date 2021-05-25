import { Avatar, Card, CardActions, CardContent, CardHeader } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

export default function QuestionCard(props) {
  return (
    <div>
      <Card className="question-card" elevation={10}>
        <CardHeader
          avatar={
            <Avatar alt={props.author.name} src={props.author.avatarURL} />
          }
          title={props.author.name + ' asks:'}
        />
        <CardContent>
          Would you rathar <strong>{props.question.optionOne.text}</strong> or <strong>{props.question.optionTwo.text}</strong>?
        </CardContent>
        <CardActions>
          <Link to={'/questions/' + props.question.id}>{props.answered && 'View '}Poll</Link>
        </CardActions>
      </Card>
    </div>
  )
}
