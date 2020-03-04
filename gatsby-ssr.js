const React = require('react')
const ApolloProvider = require('@apollo/react-hooks')

const ReduxWrapper = require('./src/store/ReduxWrapper').default
const Layout = require('./src/components/layout').default
const client = require('./src/services/apollo/client')

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = props => {
  return (
    <ApolloProvider client={client}>
      <ReduxWrapper {...props} />
    </ApolloProvider>
  )
}
