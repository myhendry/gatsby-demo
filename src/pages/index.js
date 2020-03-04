import React from 'react'
import { Link, graphql } from 'gatsby'
import { Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { BookItem } from '../components/common'
import SEO from '../components/seo'
import { toggleDarkMode } from '../store/app'

const IndexPage = props => {
  return (
    <>
      <SEO title="Home" />
      <section>
        <h1>Using CSS Keyframes</h1>
        <Box />
      </section>
      <section>
        <h1>Using Redux</h1>
        <button
          style={
            props.isDarkMode ? { background: 'black', color: 'white' } : null
          }
          onClick={() => props.dispatch(toggleDarkMode(!props.isDarkMode))}
        >
          Using Redux
        </button>
      </section>
      <section>
        <h1>Using Firestore</h1>
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
    </>
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

const Box = styled.div`
  background-color: green;
  height: 150px;
  width: 150px;
  margin: 0;
  border-radius: 50%;
  position: relative;
  animation-name: myanimation;
  animation-duration: 4s;
  animation-iteration-count: 3;

  @keyframes myanimation {
    0% {
      background-color: green;
      left: 0px;
    }
    25% {
      background-color: purple;
      left: 25px;
    }
    50% {
      background-color: red;
      left: 50px;
    }
    75% {
      background-color: darkblue;
      left: 75px;
    }
    100% {
      background-color: yellow;
      left: 100px;
    }
  }
`

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(IndexPage)
