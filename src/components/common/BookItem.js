import React from 'react'
import Img from 'gatsby-image'
import { Card, Divider } from 'semantic-ui-react'

export const BookItem = ({
  authorName,
  bookCover,
  bookTitle,
  bookSummary,
  children,
}) => (
  <div>
    <Img fluid={bookCover} />

    <h2>
      {bookTitle} -<small>{authorName}</small>
    </h2>
    <p>{bookSummary}</p>
    <div>{children}</div>
    {/* <Image.Group size="small">
      <Img fixed={bookCover} />
      <Img fixed={bookCover} />
      <Img fixed={bookCover} />
      <Img fixed={bookCover} />
    </Image.Group> */}
    <Divider />
    <Card.Group itemsPerRow={4}>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
      <Card fluid>
        <Img fluid={bookCover} />
      </Card>
    </Card.Group>
  </div>
)
