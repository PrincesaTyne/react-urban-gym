import React from 'react'
import ImageCard from './ImageCard'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const workouts = [
  {
    id: 1,
    title: 'Abs workout',
    text: 'For flat tummy results...',
    src: './images/ab4.jpeg'
  },
  {
    id: 2,
    title: 'Fullbody workout',
    text: 'Lose weight and also be in shape',
    src: './images/fullbody5.jpeg'
  },
  {
    id: 3,
    title: 'Yoga',
    text: 'Exercise for both your physical and mental well being',
    src: './images/yoga4.jpeg'
  },
  {
    id: 4,
    title: 'Zumba',
    text: 'Workout in a fun and exciting way through dance',
    src: './images/zumba2.jpeg'
  },
  {
    id: 5,
    title: 'Pilates',
    text: 'Tone up, build lean muscle and improve your posture',
    src: './images/pilates3.jpeg'
  },
]

const useStyles = makeStyles({
  loginButton: {
    marginLeft: 'auto'
  },
  cardContainer: {
    justifyContent: 'center',
    marginLeft: 1,
    marginRight: 1
  }
})


const Home: React.FC = () => {
  const classes = useStyles()

  return(
    <div>
      <div style={{
        backgroundImage: `url('../images/gym3.jpeg')`,
        backgroundSize: "cover",
        height: 300,
        color: "#f5f5f5",
        margin: 20
        }} 
      >
      </div>
      <Grid container className={classes.cardContainer} spacing={3}>
        {
          workouts.map(workout => (
            <Grid item key={workout.id} xs={12} sm={6} md={4} lg={3}>
              <ImageCard workout={workout}/>
            </Grid>
          )
        )}
      </Grid>
    </div>
  )
}

export default Home
