import React from 'react'
import { navigate } from 'gatsby'
import { isGQLLoggedIn } from '../services/auth'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isGQLLoggedIn() && location.pathname !== `/app/login`) {
    navigate('/app/login')
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute

/*
import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../services/auth"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/app/login`) {
    navigate("/app/login")
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
*/
