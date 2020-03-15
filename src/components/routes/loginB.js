import React, { useContext, useEffect } from 'react'
import { navigate, Link } from 'gatsby'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { setUser, isLoggedIn } from '../../services/auth'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import { FirebaseContext } from '../../services/Firebase'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import * as firebase from 'firebase'

const Login = () => {
  const { firebase: fb } = useContext(FirebaseContext)

  let isMounted = true

  useEffect(() => {
    console.log('isLoggedIn ', isLoggedIn())
    if (isLoggedIn()) {
      navigate('app/admin')
    }
    return () => {
      isMounted = false
    }
  }, [])

  //TODO Cannot redirect to app/admin
  // const facebookOAuthSubmit = () => {
  //   const provider = new firebase.auth.FacebookAuthProvider()
  //   console.log(provider)
  //   fb.facebookOAuth(provider).then(res => {
  //     setUser({
  //       email: res.email,
  //       // password
  //     })
  //     navigate('app/admin')
  //   })
  // }

  const handleSubmit = ({ email, password }, bag) => {
    fb.login({ email, password })
      .then(() => {
        setUser({
          email,
          // password
        })
        navigate('app/admin')
      })
      .catch(error => {
        bag.setErrors(error)
        bag.setSubmitting(false)
      })
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid Email Address')
      .required(),
    password: Yup.string()
      .min(3)
      .required(),
  })

  return (
    <>
      {/* <Button onClick={facebookOAuthSubmit}>Facebook OAuth</Button> */}
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          errors,
          touched,
          values,
          handleChange,
          handleSubmit,
          handleBlur,
          isSubmitting,
          isValid,
        }) => (
          <Form onSubmit={handleSubmit} error={!!errors.message}>
            <Form.Field>
              <Input
                name="email"
                placeholder="Email"
                type="email"
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.email}
              />
              {errors.email && touched.email && <div>{errors.email}</div>}
            </Form.Field>
            <Form.Field>
              <Input
                name="password"
                placeholder="Password"
                type="password"
                values={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={!!errors.password}
              />
              {errors.password && touched.password && (
                <div>{errors.password}</div>
              )}
            </Form.Field>
            <Message error header="Oops!" content={errors.message} />
            <Button
              loading={isSubmitting}
              primary
              disabled={!isValid || isSubmitting}
            >
              Submit
            </Button>
            <div>
              <Link to={'/app/register'}>Go to Register</Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Login
