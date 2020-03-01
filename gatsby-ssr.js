const React = require('react')
const Layout = require('./src/components/layout').default

// exports.wrapPageElement = ({ element, props }) => {
//   return <Layout {...props}>{element}</Layout>
// }

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export { default as wrapRootElement } from './src/store/ReduxWrapper'
