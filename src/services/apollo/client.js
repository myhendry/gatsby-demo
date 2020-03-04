import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://hendry-gql-server.herokuapp.com/graphql',
  fetch,
})
