import React from 'react'
import { Item, Card } from 'semantic-ui-react'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

const tourTemplate = ({ data: { tour } }) => {
  return (
    <>
      <Item>
        <Item.Content>
          <Item.Header as="a">{tour.country}</Item.Header>
          <Item.Meta>{tour.description.description}</Item.Meta>
          <Item.Description>
            <Card.Group itemsPerRow={2}>
              {tour.images.map((item, index) => {
                return (
                  <Card fluid key={index}>
                    <Img fluid={item.fluid} alt={item.name} />
                  </Card>
                )
              })}
            </Card.Group>
          </Item.Description>
          <Item.Extra>{tour.started}</Item.Extra>
        </Item.Content>
      </Item>
    </>
  )
}

export const query = graphql`
  query tourQuery($tourId: String!) {
    tour: contentfulTour(id: { eq: $tourId }) {
      id
      country
      days
      createdAt
      description {
        description
      }
      featured
      name
      slug
      price
      start(formatString: "dddd MMMM Do, YYYY")
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default tourTemplate
