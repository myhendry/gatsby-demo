import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import { Card } from 'semantic-ui-react'

import Layout from '../components/layout'

export const Content = () => {
  const { tours } = useStaticQuery(GET_TOURS)

  return (
    <Layout>
      <Card.Group itemsPerRow={2}>
        {tours &&
          tours.edges.map(x => (
            <Card
              fluid
              key={x.node.id}
              image={x.node.images[0].fluid}
              header={x.node.country}
              meta={x.node.price}
              description={x.node.description.description}
              as={Link}
              to={`/tour/${x.node.slug}`}
            />
          ))}
      </Card.Group>
    </Layout>
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
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          days
          createdAt
          start
          slug
          description {
            description
          }
        }
      }
    }
  }
`

export default Content
