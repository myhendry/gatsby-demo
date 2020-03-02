import React from "react"
import { handleAuthentication } from "../services/oAuth"

const Callback = () => {
  handleAuthentication()

  return <p>Loading...</p>
}

export default Callback
