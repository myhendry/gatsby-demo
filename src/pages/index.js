import React from 'react'
import { Link, graphql } from 'gatsby'
import { connect } from 'react-redux'

import { BookItem } from '../components/common'
import { Button } from 'semantic-ui-react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import { toggleDarkMode } from '../store/app'

const IndexPage = props => {
  // console.log(props)
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
            bookCover={edge.node.localImage.childImageSharp.fixed}
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
        <div>Image</div>I
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
