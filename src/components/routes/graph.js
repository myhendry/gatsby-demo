import React from 'react'
import { Link } from 'gatsby'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { MenuAdmin } from '../common'

// This query is executed at run time by Apollo - on Client
const APOLLO_QUERY = gql`
  {
    getBooks {
      title
      author
    }
  }
`

const Graph = () => {
  const { loading, error, data } = useQuery(APOLLO_QUERY)

  return (
    <div>
      <MenuAdmin />
      <h1>Using Apollo GraphQL Client</h1>
      <h5>
        GraphQL Server on{' '}
        <a
          href="https://hendry-gql-server.herokuapp.com/graphql"
          target="blank"
        >
          Hendry's GraphQL Server
        </a>
      </h5>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data &&
        data.getBooks.map((x, index) => {
          return (
            <p key={index}>
              {x.title} - {x.author}
            </p>
          )
        })}
      <div>
        <Link to="app/add">Add</Link>
      </div>
    </div>
  )
}

export default Graph
