export const isBrowser = () => typeof window !== 'undefined'

//! USE WITH GRAPHQL
export const setGQLUser = token =>
  window.localStorage.setItem('token', `Bearer ${token}`)

export const getGQLUser = () =>
  isBrowser() && window.localStorage.getItem('token')
    ? window.localStorage.getItem('token')
    : ''

export const isGQLLoggedIn = () => {
  const token = getGQLUser()
  console.log('gql token ', token)

  return !!token
}

export const GQLlogout = callback => {
  // setUser(null)
  window.localStorage.removeItem('token')
  callback()
}

//! USE WITH FIREBASE
export const getUser = () =>
  isBrowser() && window.localStorage.getItem('gatsbyUser')
    ? JSON.parse(window.localStorage.getItem('gatsbyUser'))
    : {}

export const setUser = user =>
  window.localStorage.setItem('gatsbyUser', JSON.stringify(user))

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.email
}

export const logout = callback => {
  setUser({})
  callback()
}
