import React, { useContext } from 'react'

import { BookItem, BookComments } from '../common'
import { graphql } from 'gatsby'
import { FirebaseContext } from '../../services/Firebase'

const BookTemplate = props => {
  const { firebase } = useContext(FirebaseContext)

  return (
    <>
      <BookItem
        authorName={props.data.book.author.name}
        bookSummary={props.data.book.summary}
        bookTitle={props.data.book.title}
        bookCover={props.data.book.localImage.childImageSharp.fluid}
      />
      {!!firebase && (
        <BookComments bookId={props.data.book.id} firebase={firebase} />
      )}
    </>
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
`

export default BookTemplate
