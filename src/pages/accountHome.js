import React from 'react'

import { MenuMember } from '../components/common'
import { logout } from '../services/oAuth'

const AccountHome = ({ user }) => {
  return (
    <>
      <MenuMember />
      <p>Hi, {user ? user.name : 'friend'}!</p>
      <nav>
        <a
          href="#logout"
          onClick={e => {
            e.preventDefault()
            logout()
          }}
        >
          Log Out
        </a>
      </nav>
    </>
  )
}

export default AccountHome
