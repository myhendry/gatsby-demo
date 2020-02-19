import React, { useContext, useEffect } from 'react'
import { navigate } from 'gatsby'
import { Formik, Form as FormikForm } from 'formik'
import * as Yup from 'yup'

import { setUser, isLoggedIn } from '../../services/auth'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import { FirebaseContext } from '../../services/Firebase'

const Login = () => {
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

  const handleSubmit = ({ email, password }, bag) => {
    console.log('submitted')
    firebase
      .login({ email, password })
      .then(() => {
        setUser({
          email,
          password,
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
        </Form>
      )}
    </Formik>
  )
}

export default Login
