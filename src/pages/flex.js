import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import logo from '../images/logo.svg'

const Flex = () => {
  return (
    <Container>
      <Header>
        {/* <Link to="/">
          <img src={logo} alt="Logo" />
        </Link> */}
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/trips">Trips</StyledLink>
          <StyledLink to="/account">Members</StyledLink>
          <StyledLink to="/app/admin">Admin</StyledLink>
        </NavLinks>
      </Header>
      <Body>
        <Top>
          <Left>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              alias. Animi deleniti, cumque amet excepturi et, provident enim
              dicta libero maxime ut odio voluptate minima quae debitis
              possimus, beatae accusantium? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Consectetur repellendus perferendis
              aliquid?
            </p>
          </Left>
          <Right>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              alias. Animi deleniti, cumque amet excepturi et, provident enim
              dicta libero maxime ut odio voluptate minima quae debitis
              possimus, beatae accusantium? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Consectetur repellendus perferendis
              aliquid?
            </p>
          </Right>
        </Top>
        <Bottom>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum a
            reprehenderit fugit dolorum expedita. Earum obcaecati repellat
            eveniet hic quasi quas, cupiditate labore saepe. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Cumque, laudantium
            laboriosam! Aperiam voluptas repellat iusto, facere, accusantium
            fugit maxime earum ad, magnam libero eius fugiat pariatur error
            delectus nemo? Quos veniam molestiae asperiores cum necessitatibus,
            voluptates sint, architecto, vitae exercitationem odit omnis!
            Consequatur consequuntur mollitia quas rerum nam, recusandae eum
            incidunt dicta dolores, sunt voluptatem totam autem.
          </p>
        </Bottom>
      </Body>
      <Footer>
        <span>Copyright 2020 Hendry</span>
      </Footer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  /* align-items: center; */
  background-color: steelblue;
  border: 10px solid black;
  padding: 20px;

  h1 {
    color: yellow;
    margin: 20px;
    text-decoration: underline;
    text-transform: uppercase;
  }
`

const NavLinks = styled.div`
  color: white;
`

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.15em;
  margin: 50px;
  text-decoration: none;
  &:hover {
    color: yellow;
  }
`

const Subtitle = styled.span`
  color: white;
`

const Body = styled.div`
  display: flex;
  flex-direction: column;
  background-color: yellow;
  /* padding: 20px; */
`

const Top = styled.div`
  display: flex;
`

const Left = styled.div`
  background-color: red;
  flex-grow: 1;
  flex-basis: 100px;
  padding: 20px;
`

const Right = styled.div`
  background-color: purple;
  flex-grow: 5;
  flex-basis: 100px;
  padding: 20px;
`

const Bottom = styled.div`
  background-color: grey;
  padding: 20px;
`

const Footer = styled.footer`
  background-color: green;
  text-align: center;
  height: 3em;
  padding: 10px;

  > span {
    color: white;
  }
`

export default Flex
