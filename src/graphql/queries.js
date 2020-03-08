import gql from 'graphql-tag'

const GET_BOOK_QUERY = gql`
  {
    getBooks {
      title
      author
    }
  }
`
export { GET_BOOK_QUERY }
