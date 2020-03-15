import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselPage = ({ data }) => {
  const images = data.allFile.nodes
  const slides = []

  for (let image of images) {
    slides.push(
      <div>
        <Img fluid={image.childImageSharp.fluid} alt="Image"></Img>
      </div>
    )
  }

  return (
    <div>
      <h1>Carousel</h1>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {slides}
      </Carousel>
    </div>
  )
}

export const query = graphql`
  query slideshow {
    allFile(filter: { relativePath: { regex: "/slideshow/" } }) {
      nodes {
        name
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default CarouselPage
