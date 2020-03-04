import React from 'react'
import { Link } from 'gatsby'

import { Input, Button } from '../components/common'
import SEO from '../components/seo'

const About = () => (
  <>
    <SEO title="Page two" />
    <h1>FORMSPREE FORM</h1>
    <Link to="/">Home</Link>
    <div>
      <form action="https://formspree.io/myhendry@gmail.com" method="POST">
        <div>
          <Input name="name" placeholder="Your Name" />
        </div>
        <div>
          <Input type="email" name="_replyto" placeholder="Your Email" />
        </div>
        <Button type="submit" value="Send">
          Send
        </Button>
      </form>
    </div>
  </>
)

export default About
