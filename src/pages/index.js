import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

import { BookItem } from '../components/common'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { toggleDarkMode } from '../store/app'

const IndexPage = props => {
  return (
    <Layout>
      <SEO title="Home" />
      <button
        style={
          props.isDarkMode ? { background: 'black', color: 'white' } : null
        }
        onClick={() => props.dispatch(toggleDarkMode(!props.isDarkMode))}
      >
        Test Redux
      </button>
      <section>
        {props.data.allBook.edges.map(edge => (
          <BookItem
            bookTitle={edge.node.title}
            bookSummary={edge.node.summary}
            authorName={edge.node.author.name}
            bookCover={edge.node.localImage.childImageSharp.fluid}
            key={edge.node.id}
          >
            <div>
              <Button basic color="purple">
                <Link to={`/book/${edge.node.id}`}>Join Conversation</Link>
              </Button>
            </div>
          </BookItem>
        ))}
      </section>
      <section>
        <div>Image</div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allBook {
      edges {
        node {
          id
          title
          summary
          imageUrl
          author {
            id
            name
          }
          localImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(IndexPage)
