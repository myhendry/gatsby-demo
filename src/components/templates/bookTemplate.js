import React from 'react'

import Layout from '../../components/layout'
import { BookItem } from '../common'
import { graphql } from 'gatsby'

const BookTemplate = props => {
  return (
    <Layout>
      <div>Book Item</div>
      <BookItem
        authorName={props.data.book.author.name}
        bookSummary={props.data.book.summary}
        bookTitle={props.data.book.title}
        bookCover={props.data.book.localImage.childImageSharp.fixed}
      />
    </Layout>
  )
}

export const query = graphql`
  query BookQuery($bookId: String!) {
    book(id: { eq: $bookId }) {
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
`

export default BookTemplate
