import React, { useContext, useEffect } from 'react'
import { navigate, Link } from 'gatsby'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { setGQLUser, isGQLLoggedIn } from '../../services/auth'
import { Button, Form, Input, Message } from 'semantic-ui-react'
import { graphql, withApollo } from 'react-apollo'
import { SIGNIN_MUTATION } from '../../graphql/mutations'

/*
// Converting login from graphql to firebase
login.js
privateRoute.js
app/admin.js
auth.js
*/

const Login = props => {
  let isMounted = true

  useEffect(() => {
    console.log('isLoggedIn ', isGQLLoggedIn())
    if (isGQLLoggedIn()) {
      navigate('app/admin')
    }
    return () => {
      isMounted = false
    }
  }, [])

  const handleSubmit = async ({ email, password }, bag) => {
    try {
      const { data } = await props.signIn({
        variables: {
          email,
          password,
        },
      })

      const token = data.signin.token
      setGQLUser(token)

      navigate('app/admin')
    } catch (error) {
      console.log(error)
      bag.setSubmitting(false)
      bag.setErrors(error)
    }
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

export default graphql(SIGNIN_MUTATION, { name: 'signIn' })(Login)
