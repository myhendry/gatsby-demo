import React from 'react'
import { Link } from 'gatsby'

import { Input, Button } from '../components/common'
import BackgroundImg from '../components/BackgroundImg'
import SEO from '../components/seo'

const About = ({ data }) => (
  <>
    <SEO title="Page two" />
    <BackgroundImg img={data.defaultBcg.childImageSharp.fluid}></BackgroundImg>
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

export const query = graphql`
  {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
