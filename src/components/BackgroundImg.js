import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const BackgroundImg = ({ img, className, children, home }) => {
  return (
    <BackgroundImage fluid={img} home={home} className={className}>
      {children}
    </BackgroundImage>
  )
}

export default styled(BackgroundImg)`
  min-height: ${props => (props.home ? 'calc(80vh - 62px)' : '30vh')};
  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
