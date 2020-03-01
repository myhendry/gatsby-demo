import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { FaBeer, FaSpinner, FaAd, FaAnchor } from 'react-icons/fa'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #ddd;
    --secondary: #ccc;
    --dark: #333;
    --light: #fff;
    --bilboard: #330000;
    --shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
`

const Design = () => {
  return (
    <Container>
      <GlobalStyle />
      <Body>
        <div>
          {/* Navigation */}
          <MainNav>
            <ul>
              <GLink to="/">Home</GLink>
              <GLink to="/about">About</GLink>
              <GLink to="/flex">Flex</GLink>
              <GLink to="/grid">Grid</GLink>
            </ul>
          </MainNav>

          {/* Top Container */}
          <TopContainer>
            <Showcase>
              <h1>Your Web Presence</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Incidunt autem velit eligendi qui nemo mollitia, ab nostrum
                provident esse similique accusantium facilis odit odio sapiente
                perferendis et in excepturi, sint a sunt vel iusto quaerat
                inventore repellendus. Reprehenderit consequuntur, officiis
                commodi ratione nam quidem sapiente voluptas, tempora reiciendis
                inventore autem.
              </p>
              <Button as={Link} to="/">
                Read More
              </Button>
            </Showcase>

            <TopBoxA>
              <h4>Membership</h4>
              <p>$199/mo</p>
              <Button as={Link} to="/flex">
                Read More
              </Button>
            </TopBoxA>
            <TopBoxB>
              <h4>Professional</h4>
              <p>$299/mo</p>
              <Button as={Link} to="/grid">
                Buy Now
              </Button>
            </TopBoxB>
          </TopContainer>
          {/* Boxes Section */}
          <Boxes>
            <Box>
              <FaBeer size={32} />
              <h3>Analytics</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
            <Box>
              <FaAd size={32} />
              <h3>Marketing</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
            <Box>
              <FaAnchor size={32} />
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
            <Box>
              <FaSpinner size={32} />
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
          </Boxes>
          {/* Info Section */}
          <Info>
            <img src="https://image.ibb.co/j4Qz8x/pic1.jpg" alt="" />

            <div>
              <h2>Your Business on the Web</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus et perspiciatis quibusdam libero eligendi ratione
                repellat dignissimos, repudiandae adipisci pariatur tempora
                numquam omnis consequatur exercitationem praesentium minus sed
                doloremque ipsum?
              </p>
              <Button as={Link} to="/about">
                Read More
              </Button>
            </div>
          </Info>
          {/* Portfolio Section */}
          <Portfolio>
            <img src="https://source.unsplash.com/random/201x200" alt="" />
            <img src="https://source.unsplash.com/random/202x200" alt="" />
            <img src="https://source.unsplash.com/random/203x200" alt="" />
            <img src="https://source.unsplash.com/random/204x200" alt="" />
            <img src="https://source.unsplash.com/random/205x200" alt="" />
            <img src="https://source.unsplash.com/random/206x200" alt="" />
            <img src="https://source.unsplash.com/random/207x200" alt="" />
            <img src="https://source.unsplash.com/random/208x200" alt="" />
            <img src="https://source.unsplash.com/random/209x200" alt="" />
          </Portfolio>
          {/* Footer Section */}
          <Footer>
            <p>Hello World &copy; 2020</p>
          </Footer>
        </div>
      </Body>
    </Container>
  )
}

const Container = styled.div`
  background: var(--secondary);
`

const Body = styled.div`
  display: grid;
  grid-gap: 20px;
  background: var(--secondary);
  padding: 30px 50px;
`

const GLink = styled(Link)`
  background: var(--primary);
  display: block;
  text-decoration: none;
  padding: 0.8rem;
  text-align: center;
  color: var(--dark);
  text-transform: uppercase;
  font-size: 1.1rem;
  box-shadow: var(--shadow);
`

const Button = styled.button`
  background: var(--dark);
  color: var(--light);
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
  text-align: center;
`

const MainNav = styled.nav`
  a {
    background: var(--primary);
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color: var(--dark);
    text-transform: uppercase;
    font-size: 1.1rem;
    box-shadow: var(--shadow);
  }

  > ul {
    display: grid;
    grid-gap: 20px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(4, 1fr);
  }

  a:hover {
    background: var(--dark);
    color: var(--light);
  }

  @media screen and (max-width: 700px) {
    > ul {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
`

const TopContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin-top: 1.5rem;
  grid-template-areas:
    'showcase showcase top-box-a'
    'showcase showcase top-box-b';

  @media screen and (max-width: 700px) {
    grid-template-areas:
      'showcase showcase'
      'top-box-a top-box-b';
  }

  @media mobile and (max-width: 500px) {
    grid-template-areas:
      'showcase'
      'top-box-a'
      'top-box-b';
  }
`

const Showcase = styled.div`
  grid-area: showcase;
  min-height: 400px;
  background: url(https://image.ibb.co/kYJK8x/showcase.jpg);
  /* background: var(--bilboard); */
  padding: 3rem;

  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  box-shadow: var(--shadow);

  > h1 {
    font-size: 4rem;
    margin-bottom: 0;
    color: var(--light);
  }

  > p {
    font-size: 1.3rem;
    margin-top: 0;
    color: var(--light);
  }

  @media screen and (max-width: 700px) {
    background: var(--dark);

    > h1 {
      font-size: 2.5rem;
    }
  }
`

//TODO TopBoxA & TopBoxB repeating elements except grid-area. How to avoid duplication?
const TopBoxA = styled.div`
  grid-area: top-box-a;
  background: var(--primary);
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  padding: 1.5rem;

  > p {
    font-size: 2.5rem;
  }
`

const TopBoxB = styled.div`
  grid-area: top-box-b;
  background: var(--primary);
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
  padding: 1.5rem;

  > p {
    font-size: 2.5rem;
  }
`

const Boxes = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`

const Box = styled.div`
  background: var(--primary);
  text-align: center;
  /* 1.5rem top and bottom 2rem left and right */
  padding: 1.5rem 2rem;
  box-shadow: var(--shadow);
`

const Info = styled.section`
  background: var(--primary);
  box-shadow: var(--shadow);
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  margin-bottom: 3rem;

  > img {
    width: 100%;
  }

  @media screen and (max-width: 700px) {
    > ul {
      grid-template-columns: 1fr;
    }
  }
`

const Portfolio = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  > img {
    width: 100%;
    box-shadow: var(--shadow);
  }
`

const Footer = styled.footer`
  margin-top: 2rem;
  background: var(--dark);
  color: var(--light);
  text-align: center;
  padding: 1rem;
`

export default Design
