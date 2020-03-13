import gql from 'graphql-tag'

const ADD_BOOK_MUTATION = gql`
  mutation ADD_BOOK($title: String!, $author: String!) {
    addBook(title: $title, author: $author) {
      id
      title
    }
  }
`
export { ADD_BOOK_MUTATION }
