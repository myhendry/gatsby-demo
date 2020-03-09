import ApolloClient from 'apollo-client'
// import * as ws from 'ws'
// import { createHttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
// import { setContext } from 'apollo-link-context'
import { onError } from 'apollo-link-error'
import { HttpLink } from 'apollo-link-http'
import { WebSocketLink } from 'apollo-link-ws'
import fetch from 'isomorphic-fetch' // Comment out this line results in an error ...
import 'isomorphic-fetch'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { getMainDefinition } from 'apollo-utilities'

const HTTP_URI = `http://localhost:4000/graphql`
const WS_URI = `ws://localhost:4000/graphql`

const httplink = new HttpLink({
  uri: HTTP_URI,
  // credentials: 'same-origin',
  fetch,
})

const wsLink = process.browser
  ? new WebSocketLink({
      // if you instantiate in the server, the error will be thrown
      uri: WS_URI,
      options: {
        reconnect: true,
      },
    })
  : null

const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const link = process.browser
  ? split(
      //only create the split in the browser
      // split based on operation type
      ({ query }) => {
        const { kind, operation } = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
      },
      wsLink,
      httplink,
      errorLink
    )
  : httplink

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
})

/*
const httpLink = createHttpLink({
  uri: HTTP_URI,
  fetch,
})

const wsLink = new WebSocketLink({
  uri: WS_URI,
  options: {
    reconnect: true,
  },
  webSocketImpl: ws,
})

const webLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink
)

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    },
  }
})

export const client = new ApolloClient({
  link: ApolloLink.from([authLink, webLink]),
  cache: new InMemoryCache(),
})
*/

/*
import ApolloClient from 'apollo-boost'
import fetch from 'isomorphic-fetch'

export const client = new ApolloClient({
  uri: 'https://hendry-gql-server.herokuapp.com/graphql',
  fetch,
})
*/
