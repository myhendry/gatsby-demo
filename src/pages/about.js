import React from 'react'
import { Link } from 'gatsby'

import SEO from '../components/seo'

const About = () => (
  <>
    <SEO title="Page two" />
    <h1>About</h1>
    <p>Welcome to about page</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default About
