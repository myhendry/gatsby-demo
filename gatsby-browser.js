import React from 'react'

import { silentAuth } from './src/services/oAuth'
import ReduxWrapper from './src/store/ReduxWrapper'
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

// export { default as wrapRootElement } from './src/state/ReduxWrapper';

// export const wrapRootElement = ({ element }) => {
//   return <SessionCheck>{element}</SessionCheck>
// }

export const wrapRootElement = props => {
  return (
    <SessionCheck>
      <ReduxWrapper {...props} />
    </SessionCheck>
  )
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
