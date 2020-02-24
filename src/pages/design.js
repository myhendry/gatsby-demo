import React from 'react'
import styled from 'styled-components'

const Design = () => {
  return (
    <Container>
      <Body>
        <div>
          {/* Navigation */}
          <MainNav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
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
              <Button>Read More</Button>
            </Showcase>

            <TopBoxA>
              <h4>Membership</h4>
              <p>$199/mo</p>
              <Button>Buy Now</Button>
            </TopBoxA>
            <TopBoxB>
              <h4>Professional</h4>
              <p>$299/mo</p>
              <Button>Buy Now</Button>
            </TopBoxB>
          </TopContainer>
          {/* Boxes Section */}
          <Boxes>
            <Box>
              <p>Icon 1</p>
              <h3>Analytics</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
            <Box>
              <p>Icon 2</p>
              <h3>Marketing</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
            <Box>
              <p>Icon 3</p>
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
            <Box>
              <p>Icon 4</p>
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi,
                illo?
              </p>
            </Box>
          </Boxes>
          {/* Info Section */}
          <Info>
            <h2>Your Business on the Web</h2>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus et perspiciatis quibusdam libero eligendi ratione
                repellat dignissimos, repudiandae adipisci pariatur tempora
                numquam omnis consequatur exercitationem praesentium minus sed
                doloremque ipsum?
              </p>
              <Button>Read More</Button>
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
  background: #ccc;
`

const Body = styled.body`
  display: grid;
  grid-gap: 20px;
  background: #ccc;
  padding: 30px 50px;
`

const Button = styled.button`
  background: #333;
  color: #fff;
  padding: 0.6rem 1.3rem;
  text-decoration: none;
  border: 0;
`

const MainNav = styled.nav`
  a {
    background: #ddd;
    display: block;
    text-decoration: none;
    padding: 0.8rem;
    text-align: center;
    color: #333;
    text-transform: uppercase;
    font-size: 1.1rem;
    box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
  a:hover {
    background: #333;
    color: #fff;
  }
  > ul {
    display: grid;
    grid-gap: 20px;
    padding: 0;
    list-style: none;
    grid-template-columns: repeat(4, 1fr);
  }
`

const TopContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    'showcase showcase top-box-a'
    'showcase showcase top-box-b';
`

const Showcase = styled.div`
  grid-area: showcase;
  min-height: 400px;
  background: green;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);

  > h1 {
    font-size: 4rem;
    margin-bottom: 0;
    color: #fff;
  }

  > p {
    font-size: 1.3rem;
    margin-top: 0;
    color: #fff;
  }
`
//TODO Use CSS Variables
//TODO Use Media Queries
//TODO TopBoxA & TopBoxB repeating elements except grid-area. How to avoid duplication?
const TopBoxA = styled.div`
  grid-area: top-box-a;
  background: #ddd;
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  padding: 1.5rem;

  > p {
    font-size: 2.5rem;
  }
`

const TopBoxB = styled.div`
  grid-area: top-box-b;
  background: #ddd;
  display: grid;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
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
  background: #ddd;
  text-align: center;
  /* 1.5rem top and bottom 2rem left and right */
  padding: 1.5rem 2rem;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
`

const Info = styled.section`
  background: #ddd;
  box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 1fr);
  padding: 3rem;
  margin-bottom: 3rem;
`

const Portfolio = styled.section`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

  > img {
    width: 100%;
    box-shadow: 0 1px 5px rgba(104, 104, 104, 0.8);
  }
`

const Footer = styled.footer`
  margin-top: 2rem;
  background: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
`

export default Design
