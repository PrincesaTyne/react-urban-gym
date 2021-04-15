import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  loginButton: {
    marginLeft: 'auto'
  },
})

const Header: React.FC = () => {
  
  const classes = useStyles()

  return (
    <AppBar position='static' >
        <Toolbar variant='regular'>
          <Typography variant='h3' color='inherit'>
            URBAN GYM
          </Typography>
          <ButtonGroup variant='text' color='inherit' >
            <Button href='./workouts'>Workouts</Button>
            <Button href='./instructors'>Instructors</Button>
          </ButtonGroup>
          <ButtonGroup className={classes.loginButton} variant='text' color='inherit'>
            <Button href='./login'>LOGIN</Button>
            <Button href='./signup'>SIGNUP</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
  )
}

export default Header
