import React from 'react'
import { client } from './src/services/apollo/client'
import { silentAuth } from './src/services/oAuth'
import ReduxWrapper from './src/store/ReduxWrapper'
import { ApolloProvider } from '@apollo/react-hooks'

const Layout = require('./src/components/layout').default

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = props => {
  return (
    <SessionCheck>
      <ApolloProvider client={client}>
        <ReduxWrapper {...props} />
      </ApolloProvider>
    </SessionCheck>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
