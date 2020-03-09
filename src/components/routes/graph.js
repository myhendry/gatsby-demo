import React from 'react'
import { Link } from 'gatsby'
import { useQuery, useSubscription } from '@apollo/react-hooks'

import { GET_BOOK_QUERY } from '../../graphql/queries'
import { BOOK_ADDED_SUBSCRIPTION } from '../../graphql/subscriptions'
import { MenuAdmin } from '../common'

const Graph = () => {
  const { loading, error, data } = useQuery(GET_BOOK_QUERY)
  const { data: subscribedData, loading: subscribedLoading } = useSubscription(
    BOOK_ADDED_SUBSCRIPTION
  )
  console.log(subscribedData, subscribedLoading)

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
        <Link to="/app/add">Add</Link>
      </div>
    </div>
  )
}

export default Graph
