import React, { useContext } from 'react'
import { navigate } from 'gatsby'

import { MenuAdmin } from '../common'
import { FirebaseContext } from '../../services/Firebase'
import { getUser, isLoggedIn, logout } from '../../services/auth'

const Admin = () => {
  const { firebase, user } = useContext(FirebaseContext)
  // console.log('user', user)

  return (
    <>
      <MenuAdmin />
      <h1>Using Firebase Authentication</h1>
      {isLoggedIn() ? (
        <>
          <a
            href="/"
            onClick={event => {
              event.preventDefault()
              logout(() => {
                firebase.logout().then(() => {
                  navigate(`/app/login`)
                })
              })
            }}
          >
            Logout
          </a>
        </>
      ) : null}
      <ul>
        <li>E-mail: {getUser().email}</li>
      </ul>
    </>
  )
}

export default Admin
