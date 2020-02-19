import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'semantic-ui-react'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
)

export const MenuMember = () => {
  return (
    <Menu>
      <LinkedItem to="/account/" exact>
        Members Corner
      </LinkedItem>
      <LinkedItem to="/account/billing">Billing</LinkedItem>
      <LinkedItem to="/account/settings">Settings</LinkedItem>
    </Menu>
  )
}
