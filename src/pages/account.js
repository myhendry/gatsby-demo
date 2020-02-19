import React from "react"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile } from "../services/oAuth"

import AccountHome from "./accountHome"
import Billing from "./billing"
import Settings from "./settings"

const Account = () => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  return (
    <Router>
      <AccountHome path="/account/" user={user} />
      <Settings path="/account/settings" />
      <Billing path="/account/billing" />
    </Router>
  )
}

export default Account
