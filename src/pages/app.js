import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Admin from "../components/routes/admin"
import Intranet from "../components/routes/intranet"
import Login from "../components/routes/login"
import PrivateRoute from "../components/privateRoute"

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/admin" component={Admin} />
      <PrivateRoute path="/app/intranet" component={Intranet} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
