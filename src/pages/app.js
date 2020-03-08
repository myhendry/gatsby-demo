import React from 'react'
import { Router } from '@reach/router'

import Admin from '../components/routes/admin'
import Intranet from '../components/routes/intranet'
import Record from '../components/routes/record'
import Graph from '../components/routes/graph'
import Add from '../components/routes/add'
import Login from '../components/routes/login'
import Register from '../components/routes/register'
import PrivateRoute from '../components/privateRoute'

const App = () => (
  <>
    <Router>
      <PrivateRoute path="/app/admin" component={Admin} />
      <PrivateRoute path="/app/intranet" component={Intranet} />
      <PrivateRoute path="/app/record" component={Record} />
      <PrivateRoute path="/app/graph" component={Graph} />
      <PrivateRoute path="/app/add" component={Add} />
      <Login path="/app/login" />
      <Register path="/app/register" />
    </Router>
  </>
)

export default App
