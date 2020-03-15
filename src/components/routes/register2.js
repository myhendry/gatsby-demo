import React, { useContext, useEffect } from 'react'
import { navigate, Link } from 'gatsby'
import { Formik } from 'formik'
import * as Yup from 'yup'

import { setUser, isLoggedIn } from '../../services/auth'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import { FirebaseContext } from '../../services/Firebase'

const Register = () => {
  let isMounted = true

  useEffect(() => {
    if (isLoggedIn()) {
      navigate('app/admin')
    }
    return () => {
      isMounted = false
    }
  }, [])

  const { firebase } = useContext(FirebaseContext)

  const handleSubmit = ({ username, email, password }, bag) => {
    firebase
      .register({ username, email, password })
      .then(() => {
        setUser({
          email,
          password,
        })
        navigate('app/admin')
      })
      .catch(error => {
        console.log(error.message)
        bag.setErrors(error)
        bag.setSubmitting(false)
      })
  }

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(3)
      .required(),
    email: Yup.string()
      .email('Invalid Email Address')
      .required(),
    password: Yup.string()
      .min(3)
      .required(),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Passwords must match'
    ),
  })

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
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
              name="username"
              placeholder="Username"
              type="text"
              values={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={!!errors.username}
            />
            {errors.username && touched.username && (
              <div>{errors.username}</div>
            )}
          </Form.Field>
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
          <Form.Field>
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              values={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              errors={!!errors.confirmPassword}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div>{errors.confirmPassword}</div>
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
            <Link to={'/app/login'}>Go to Login</Link>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default Register
