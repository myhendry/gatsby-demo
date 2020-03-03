import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Card } from 'semantic-ui-react'

export const Content = () => {
  const { tours } = useStaticQuery(GET_TOURS)

  return (
    <>
      <h1>Using Contentful</h1>
      <Card.Group itemsPerRow={2}>
        {tours &&
          tours.edges.map(x => {
            return (
              <Card
                fluid
                key={x.node.contentful_id}
                image={x.node.images[0].fluid}
                header={x.node.country}
                meta={x.node.price}
                description={x.node.description.description}
                as={Link}
                to={`/tour/${x.node.slug}`}
              />
            )
          })}
      </Card.Group>
    </>
  )
}

const GET_TOURS = graphql`
  {
    tours: allContentfulTour {
      edges {
        node {
          country
          name
          price
          images {
            fluid(maxWidth: 1600) {
              ...GatsbyContentfulFluid
            }
          }
          days
          createdAt
          start
          slug
          description {
            description
          }
          contentful_id
        }
      }
    }
  }
`

export default Content
