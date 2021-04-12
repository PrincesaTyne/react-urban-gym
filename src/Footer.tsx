import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  footer: {
    justifyContent: 'center'
  }
})

const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  const classes = useStyles()
  
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar className={classes.footer} >
          <Typography color="inherit">
            © {year} Urban Gym
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer
