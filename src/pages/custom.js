import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const getBooks = graphql`
  {
    custom {
      getBooks {
        title
        author
      }
    }
  }
`

const Custom = () => {
  const { custom } = useStaticQuery(getBooks)

  return (
    <div>
      <h1>Using Third Party Graphql API</h1>
      {custom.getBooks.map((x, index) => {
        return (
          <div key={index}>
            <p>{x.title}</p>
            <p>{x.author}</p>
            <p>- - - - - - - - -</p>
          </div>
        )
      })}
    </div>
  )
}

export default Custom
