import React from 'react'
import { Link } from 'gatsby'
import img from '../images/slideshow/tour-1.jpeg'
import styled, { keyframes } from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const Cool = () => {
  const codeString = '(num) => num + 1'

  return (
    <>
      <SyntaxHighlighter language="javascript" style={dracula} showLineNumbers>
        {codeString}
      </SyntaxHighlighter>
      <ShapeContainer>
        <PolygonA>
          <TopTextContainer>Hello</TopTextContainer>
          <BottomTextContainer>What's up?</BottomTextContainer>
        </PolygonA>
        <PolygonB />
        <PolygonC />
      </ShapeContainer>
      <LinksContainer>
        <StyledLink to={'/'} primary={true} bgColor="violet">
          Go to Home
        </StyledLink>
        <StyledLink to={'/'}>Go to Home</StyledLink>
        <StyledLink to={'/'}>Go to Home</StyledLink>
      </LinksContainer>

      <StyledDiv>
        <h1>Hi</h1>
      </StyledDiv>
    </>
  )
}

const rotationBuilder = degree => {
  const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-${degree}deg);
    }
    50% {
      transform: rotate(0deg);
      opacity: .9
    }
    75% {
      transform: rotate(${degree}deg);
    }
  `
  return rotation
}

const StyledDiv = styled.div`
  animation: ${rotationBuilder(10)} 1s linear infinite;
`

const ShapeContainer = styled.div`
  display: flex;

  backface-visibility: hidden;
`

const TopTextContainer = styled.span`
  display: inline-block;
  color: white;
  font-size: 20px;
  letter-spacing: 25px;
  font-weight: bold;
  text-transform: uppercase;
  animation-name:  moveInLeft;
  animation-duration: 5s;
  animation-delay: 3s;
  /* animation-iteration-count: 3; */
  animation-timing-function: ease-in-out;

  @keyframes moveInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100px)
  }

  80% {
    transform: translate(10px)
  }

  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const LinksContainer = styled.div`
  display: inline-block;
`

const StyledLink = styled(Link)`
  display: inline-block;
  background-color: ${props => {
    switch (props.bgColor) {
      case 'cyan':
        return 'cyan'
      case 'violet':
        return 'violet'
      default:
        return 'purple'
    }
  }};
  padding: 15px 40px;
  white-space: nowrap;
  color: white;
  margin: 10px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 100px;
  transition: all 0.2s;

  &:visited {
    color: ${props => (props.primary ? 'black' : 'cyan')};
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); // x y blur color
  }

  &:active {
    transform: translateY(-1px);
  }

  /* &:hover::before {
    content: 'Hey';
    color: green;
  }
  &:hover::after {
    content: 'Hello';
    color: blue;
  }
   */
`

/*
const StyledLink = styled(props => <Link {...props} />)`
  color: aqua;
`;

// ...

<StyledLink to="/">
  Gatsby
</StyledLink>
 */

const BottomTextContainer = styled.span`
  display: inline-block;
  color: white;
  font-weight: bold;
  letter-spacing: 5px;
  animation: moveInRight 5s ease-out;

  @keyframes moveInRight {
  0% {
    opacity: 0;
    transform: translateX(100px)
  }

  80% {
    transform: translate(-10px)
  }

  100% {
    opacity: 1;
    transform: translate(0)
  }
`

const PolygonA = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(246, 36, 89, 0.5),
      rgba(255, 148, 120, 0.5)
    ),
    url(${img});
  background-position: top;
  background-size: cover;
  height: 80vh;
  width: 400px;
  clip-path: polygon(0 0, 100% 0, 100% 300px, 0 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PolygonB = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(99, 163, 117, 0.5),
      rgba(184, 213, 192, 0.5)
    ),
    url(${img});
  background-position: top;
  background-size: cover;
  height: 80vh;
  width: 400px;
  clip-path: polygon(0 0, 100% 0, 100% 300px, 0 100%);
`

const PolygonC = styled.div`
  background-image: linear-gradient(
      to right bottom,
      rgba(88, 77, 61, 0.5),
      rgba(194, 190, 184, 0.5)
    ),
    url(${img});
  background-position: top;
  background-size: cover;
  height: 80vh;
  width: 400px;
  clip-path: polygon(0 0, 100% 0, 100% 300px, 0 100%);
`

export default Cool
