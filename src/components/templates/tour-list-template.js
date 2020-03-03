import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const TourList = props => {
  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage =
    currentPage - 1 === 1 ? '/tours' : `/tours/${currentPage - 1}`
  const nextPage = `/tours/${currentPage + 1}`

  const { data } = props
  return (
    <>
      <h1>Using Contentful Pagination</h1>
      <section>
        {!isFirst && <GLink to={prevPage}>Prev</GLink>}
        {Array.from({ length: numPages }, (_, i) => (
          <GLink
            key={`pagination-number${i + 1}`}
            to={`/tours/${i === 0 ? '' : i + 1}`}
          >
            {i + 1}
          </GLink>
        ))}
        {!isLast && <GLink to={nextPage}>Next</GLink>}
      </section>
      <section>
        {data.tours.edges.map(({ node }) => {
          return (
            <div key={node.id}>
              <ImgContainer>
                <Img fluid={node.images[0].fluid} />
              </ImgContainer>
              <p>{node.country}</p>
              <p>{node.description && node.description.description}</p>
              <span>{node.createdAt}</span>
              <p>- - - - - - - - - - - - </p>
            </div>
          )
        })}
      </section>
    </>
  )
}

const ImgContainer = styled.div`
  > img {
    width: 400px;
    height: 250px;
  }
`
const GLink = styled(Link)`
  font-size: 2rem;
`
export const query = graphql`
  query getTours($skip: Int!, $limit: Int) {
    tours: allContentfulTour(
      skip: $skip
      limit: $limit
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          id
          country
          description {
            description
          }
          createdAt(formatString: "MMMM Do, YYYY")
          name
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

export default TourList
