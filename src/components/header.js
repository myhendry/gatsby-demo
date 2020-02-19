import React from 'react'
import { Link } from 'gatsby'
import { Container } from 'semantic-ui-react'

import logo from '../images/logo.svg'

const Header = ({ siteTitle }) => (
  <div style={{ background: 'rebeccapurple' }}>
    <Container>
      <h1 style={{ padding: '1rem 0', marginBottom: '2rem' }}>
        <Link style={{ color: 'white' }} to="/">
          <img src={logo} alt={siteTitle} />
        </Link>
      </h1>
    </Container>
  </div>
)

export default Header
