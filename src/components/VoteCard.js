import { Box, Card, CardContent, CircularProgress, Typography } from '@material-ui/core'
import React from 'react'

export default function VoteCard(props) {
  return (
    <Card style={{ margin: '20px auto' }} elevation={5}>
      <CardContent>
        <h5>Would you rathar {props.text}?</h5>
        <div style={{ display: 'table' }}>
          <Box position="relative" display="inline-flex">
            <CircularProgress color="secondary" variant="determinate" value={props.ratio} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="caption" component="div" color="textSecondary">
                {props.ratio}%
            </Typography>
            </Box>
          </Box>
          <span style={{ verticalAlign: 'middle', display: 'table-cell', paddingLeft: 10 }}>
            {props.votes} out of {props.totalVotes}
          </span>
        </div>
        <h6>{props.selected && 'You voted for this!'}</h6>
      </CardContent>
    </Card>

  )
}
