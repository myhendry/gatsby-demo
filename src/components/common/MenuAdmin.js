import React from 'react'
import { Link } from 'gatsby'
import { Menu } from 'semantic-ui-react'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
)

export const MenuAdmin = () => {
  return (
    <Menu>
      <LinkedItem to="/app/admin" exact>
        Admin
      </LinkedItem>
      <LinkedItem to="/app/record">Add Author</LinkedItem>
      <LinkedItem to="/app/intranet">Add Book</LinkedItem>
    </Menu>
  )
}
