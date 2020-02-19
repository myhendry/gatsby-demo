import React from 'react'
import Img from 'gatsby-image'
import { Card, Divider, Image } from 'semantic-ui-react'

export const BookItem = ({
  authorName,
  bookCover,
  bookTitle,
  bookSummary,
  children,
}) => (
  <div>
    <Img fixed={bookCover} />

    <h2>
      {bookTitle} -<small>{authorName}</small>
    </h2>
    <p>{bookSummary}</p>
    <div>{children}</div>
    <Image.Group size="small">
      <Img fixed={bookCover} />
      <Img fixed={bookCover} />
      <Img fixed={bookCover} />
      <Img fixed={bookCover} />
    </Image.Group>
    <Divider />
    <Card.Group itemsPerRow={2}>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
      <Card fluid>
        <Img fixed={bookCover} />
      </Card>
    </Card.Group>
  </div>
)
