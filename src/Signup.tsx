import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Box, FormControlLabel, makeStyles } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
// import FormControl from '@material-ui/core/FormControl'
// import FormHelperText from '@material-ui/core/FormHelperText'
// import Input from '@material-ui/core/Input'
// import InputLabel from '@material-ui/core/InputLabel'

// interface Values {
//   firstName: string
//   lastName: string
//   email: string
// }

const useStyles = makeStyles({
  container: {
    width:'60%',
    minHeight: '80%',
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

const Signup: React.FC = () => {
  const classes = useStyles()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      age: 18,
      password1: '',
      password2: '',
      instructor: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'Must be 15 characters or less').required('Please fill out this field'),
      lastName: Yup.string().max(20, 'Must be 20 characters or less').required('Please fill out this field'),
      email: Yup.string().email('Invalid email address').required('Please fill out this field'),
      password1: Yup.string()
                    .min(8, 'Password should have 8 or more characters')
                    // .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()]).{8,20}\S$/, 'Password should have one uppercase, one lowercase, one special character and no spaces')
                    .required('Please fill out this field'),
      password2: Yup.string()
                    .required('Re-enter Password')
                    .test(
                      'password-match',
                      'Password musth match',
                      function (value) {
                        return this.parent.password1 === value
                      }),
      age: Yup.number().min(15, 'You should be 15 and above').max(65, 'You should be 65 and below').required('Age is Required'),
      instructor: Yup.boolean().required('Required'),
    }),
    // validate: (values) => {
    //   const errors: Partial<Values> = {}
    //   if (!values.firstName) {
    //     errors.firstName = 'Required';
    //   } else if (values.firstName.length > 15) {
    //     errors.firstName = 'Must be 15 characters or less';
    //   }
    
    //   if (!values.lastName) {
    //     errors.lastName = 'Required';
    //   } else if (values.lastName.length > 20) {
    //     errors.lastName = 'Must be 20 characters or less';
    //   }
    
    //   if (!values.email) {
    //     errors.email = 'Required';
    //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    //   }
    
    //   return errors
    // },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    }
  })

  return (
    <Container className={classes.container} >
      <Box padding={3} className={classes.componentSpacing} mx='auto'>
        <Typography variant='h4' color='primary'>
          URBAN-GYM SIGNUP FORM
          {/* Urban-gym Signup form */}
        </Typography>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Box paddingBottom={2}>
          <TextField
            id='firstName'
            //  name='firstName'
            label='First Name'
            variant='outlined'
            //  onChange={formik.handleChange}
            //  onBlur={formik.handleBlur}
            //  value={formik.values.firstName}
            fullWidth
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName ? <div className={classes.error}>{formik.errors.firstName}</div> : null}
        </Box>

        <Box paddingBottom={2}>
          <TextField
            id='lastName'
            label='Last Name'
            variant='outlined'
            fullWidth
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName ? <div className={classes.error}>{formik.errors.lastName}</div> : null}
        </Box>

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
            id='password1'
            type='Password'
            label='Password'
            variant='outlined'
            fullWidth
            {...formik.getFieldProps('password1')}
          />
          {formik.touched.password1 && formik.errors.password1 ? <div className={classes.error}>{formik.errors.password1}</div> : null}
        </Box>

        <Box paddingBottom={2}>
          <TextField
            id='password2'
            type='Password'
            label='Re-enter Password'
            variant='outlined'
            fullWidth
            {...formik.getFieldProps('password2')}
            />
          {formik.touched.password2 && formik.errors.password2 ? <div className={classes.error}>{formik.errors.password2}</div> : null}
        </Box>

        <Box paddingBottom={2}>
          <TextField
            id='age'
            label='Age'
            type='number'
            color='primary'
            variant='outlined'
            {...formik.getFieldProps('age')}
          />
          {formik.touched.age && formik.errors.age ? <div className={classes.error}>{formik.errors.age}</div> : null}
        </Box>

        <Box paddingBottom={5}>
          <FormControlLabel
            label='Check this box if you are signing up as an instructor'
            labelPlacement='end'
            control={
              <Checkbox
                id='instructor'
                color='primary'
                checked={formik.values.instructor}
                {...formik.getFieldProps('instructor')}
              />
            }
          />
        </Box>

        <Box className={classes.componentSpacing}>
          <Button variant='contained' color='primary' type='submit' >SIGNUP</Button>
        </Box>
        <Box className={classes.componentSpacing}>
          <Typography>
            Already have an account?
            <Button variant='text' color='primary' href='./login'>Login</Button>
            here
          </Typography>
        </Box>
      </form>
    </Container>    
  )
}

export default Signup
