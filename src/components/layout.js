import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'

import { FirebaseContext, useAuth } from '../services/Firebase'
import Header from './header'
import Footer from './footer'
import 'semantic-ui-less/semantic.less'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName="active" {...props}>
    {children}
  </Menu.Item>
)

const Layout = ({ children }) => {
  const { user, firebase, loading } = useAuth()

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />

          <FirebaseContext.Provider value={{ user, firebase, loading }}>
            <Header siteTitle={data.site.siteMetadata.title} />

            <Container>
              <Grid relaxed stackable>
                <Grid.Column mobile={16} tablet={4} computer={4}>
                  <Menu vertical fluid>
                    <LinkedItem to="/" exact="true">
                      Home
                    </LinkedItem>
                    <LinkedItem to="/about">About</LinkedItem>
                    <LinkedItem to="/hooks">Hooks</LinkedItem>
                    <LinkedItem to="/content">Contentful</LinkedItem>
                    <LinkedItem to="/tours">Tours</LinkedItem>
                    <LinkedItem to="/strapi">Shopping</LinkedItem>
                    <LinkedItem to="/design">Design</LinkedItem>
                    <LinkedItem to="/pattern">Pattern</LinkedItem>
                    <LinkedItem to="/flex">Flexbox</LinkedItem>
                    <LinkedItem to="/grid">Grid</LinkedItem>
                    <LinkedItem to="/custom">Custom</LinkedItem>
                    <LinkedItem to="/account">Members</LinkedItem>
                    <LinkedItem to="/app/admin">Admin</LinkedItem>
                  </Menu>
                </Grid.Column>

                <Grid.Column mobile={16} tablet={8} computer={8}>
                  {children}
                </Grid.Column>
              </Grid>
              <Footer />
            </Container>
          </FirebaseContext.Provider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
