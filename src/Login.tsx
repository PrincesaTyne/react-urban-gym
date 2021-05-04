import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Box, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  container: {
    width:'50%',
    minHeight: 500,
  },
  componentSpacing: {
    display: 'flex',
    justifyContent:'center',
    paddingBottom: '5%'
  },
  error: {
    color: 'red'
  }
})

const Login: React.FC = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid Email').required('Email is required'),
      password: Yup.string()
                    .required('Password is required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Container className={classes.container} >
      <Box padding={3} className={classes.componentSpacing} mx='auto'>
        <Typography variant='h4' color='primary'>
          URBAN-GYM LOGIN
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box paddingBottom={2}>
          <TextField
            id='email'
            type='email'
            label='Email'
            variant='outlined'
            fullWidth
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
        </Box>

        <Box paddingBottom={2}>
          <TextField
            id='password'
            type='Password'
            label='Password'
            variant='outlined'
            fullWidth
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div> : null}
        </Box>

        <Box className={classes.componentSpacing}>
          <Button variant='contained' color='primary' type='submit' >LOGIN</Button>
        </Box>
        <Box className={classes.componentSpacing}>
          <Typography>
            Don't have an account yet?
            <Button variant='text' color='primary' href='./signup'>Signup</Button>
            here
          </Typography>
        </Box>
      </form>
    </Container>    
  )
}

export default Login
