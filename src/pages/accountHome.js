import React from 'react'

import { MenuMember } from '../components/common'
import { logout } from '../services/oAuth'
import Layout from '../components/layout'

const AccountHome = ({ user }) => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default AccountHome
