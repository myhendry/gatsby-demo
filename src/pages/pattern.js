import React from 'react'
import { graphql, Link } from 'gatsby'

import styled from 'styled-components'
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

  body {
    background-color: green
  }
`

export const query = graphql`
  query ListingQuery($listingId: String) {
    listing: contentfulListing(id: { eq: $listingId }) {
      property
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`

const Pattern = ({ data: { listing } }) => {
  return (
    <>
      <Container>
        <GlobalStyle />
        <SectionF>
          <div>
            <ButtonA to={'/about'}>Button A</ButtonA>
            <ButtonB to={'/design'}>Button B</ButtonB>
            <ButtonC to={'/flex'}>Button C</ButtonC>
          </div>

          <StackContainer1>
            <StackItem1>Stack Item 1</StackItem1>
            <StackItem2>Stack Item 2</StackItem2>
          </StackContainer1>

          <StackContainer2>
            <StackItem3
              src={`https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1648&q=80`}
            />
            <StackItem4>Stack Item 4</StackItem4>
          </StackContainer2>
        </SectionF>
        <SectionE>
          <BoxE1>A</BoxE1>
          <BoxE2>
            B Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            fugiat qui corporis laudantium aliquid odit vel enim blanditiis
            possimus quasi ea sit eum, id eius incidunt quia nobis temporibus
            rerum dolor? Quibusdam deserunt quidem reprehenderit maxime,
            recusandae veritatis molestias id ducimus saepe eius asperiores,
            magnam magni animi? Nobis, minima ea! Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Ipsum quaerat error laborum
            repellendus ipsa repellat perspiciatis reiciendis. Quasi beatae
            voluptas suscipit error reprehenderit in nostrum tempora impedit
            itaque at eos accusamus harum necessitatibus ut, nam nemo aut
            repellendus perferendis porro atque consequatur! Vel, voluptatum!
            Neque dignissimos alias aliquid illum voluptatibus nam debitis, sunt
            omnis. Similique corporis, ratione cumque placeat deserunt provident
            asperiores suscipit, architecto dolorum quibusdam, animi veritatis
            nemo. Illum cumque deleniti labore et adipisci sequi fugiat minus
            recusandae saepe!
          </BoxE2>
          <BoxE3>C</BoxE3>
          <BoxE4>D</BoxE4>
          <BoxE5>E</BoxE5>
        </SectionE>
        <SectionD>
          <SegmentLeft>Box 1</SegmentLeft>
          <SegmentRight>
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <BoundImgD src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </SegmentRight>
        </SectionD>
        <SectionC>
          <BoxC>
            <BoundImg src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
            <p>{listing.property}</p>
          </BoxC>
          <BoxC>
            <BoundImg src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </BoxC>
          <BoxC>
            <BoundImg src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </BoxC>
          <BoxC>
            <BoundImg src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
          </BoxC>
          <BoxC>Box 5</BoxC>
          <BoxC>Box 6</BoxC>
          <BoxC>Box 7</BoxC>
          <BoxC>Box 8</BoxC>
          <BoxC>Box 9</BoxC>
          <BoxC>Box 10</BoxC>
        </SectionC>
        <SectionA>
          <BoxA>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            soluta, voluptatem vel nulla nam tempore non nemo vero, totam
            possimus id. Asperiores itaque rem odio culpa, aperiam, vel tempora
            libero velit perspiciatis quas nulla beatae modi in veritatis, illum
            repellendus distinctio labore exercitationem ipsa accusamus a
            expedita cupiditate sint. Pariatur iusto reiciendis aliquid ad quo,
            ipsam totam expedita architecto magni, nobis ipsum? Veniam repellat
            sed possimus! Harum unde incidunt et! Praesentium molestias ad
            dolor, a ullam nihil exercitationem in fugit?
          </BoxA>
          <BoxA>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            reprehenderit itaque dolore et sapiente nobis quod mollitia
            perferendis architecto nam soluta repellendus corrupti, aut
            necessitatibus tempora asperiores possimus eligendi officia
            obcaecati temporibus minima reiciendis cupiditate. Est numquam, cum
            eaque, voluptatibus necessitatibus tempore repellendus iure,
            deserunt iusto eligendi odit ut a.
          </BoxA>
          <BoxA>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
            quia odit ipsum velit fugiat deserunt quae incidunt iure hic, et
            molestiae porro recusandae in quam harum neque officia nesciunt.
            Mollitia pariatur temporibus tempora veniam. Voluptatum deserunt aut
            numquam, culpa alias atque sunt quaerat! Assumenda eveniet nisi
            perferendis ipsam vero a. Quos voluptates quo commodi tempore sint
            corrupti repellendus temporibus quod!
          </BoxA>
          <BoxA>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            magnam iure inventore praesentium qui. Suscipit velit enim
            exercitationem placeat, dolorum quia, qui, illo voluptates
            blanditiis error praesentium nulla dolor. Aliquid sed dolores porro
            quisquam, cupiditate quibusdam expedita ab architecto ullam.
          </BoxA>
          <BoxA>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iusto
            labore soluta repudiandae. Iste corrupti, deserunt velit aspernatur
            odit molestias?
          </BoxA>
        </SectionA>
        <SectionB>
          <BoxB1>Box 1</BoxB1>
          <BoxB2>Box 2</BoxB2>
          <BoxB3>Box 3</BoxB3>
        </SectionB>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: #f8d1e3;
  padding: 10px;
`

const StackContainer2 = styled.div`
  position: relative;
  height: 300px;
`

const StackItem3 = styled.img`
  position: absolute;
  background-color: #10333333;
  /* left: 0;
  top: 0; */
  height: 180px;
  width: 150px;
  border-radius: 5px;
`

const StackItem4 = styled.div`
  position: absolute;
  background-color: #10ffe347;
  padding: 10px;
  z-index: 100;
  border-radius: 5px;
`

const StackContainer1 = styled.div`
  position: relative;
`

const StackItem1 = styled.div`
  position: absolute;
  background-color: green;
  z-index: 100;
`

const StackItem2 = styled.div`
  position: absolute;
  background-color: yellow;
  /* transform: translateX(-50%); */
  transform: translate(-50%, -50%);
`

const SectionF = styled.div`
  background-color: #e7e6f2;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 0.5em;

  > div {
    display: flex;
    border: 2px solid black;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 1em;
  }
`

const ButtonA = styled(Link)`
  display: flex;
  color: #fff;
  background-color: #000;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  margin: 10px;

  &:hover {
    background-color: grey;
  }
`

const ButtonB = styled(Link)`
  display: flex;
  color: chocolate;
  background-color: #10000000;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  margin: 10px;

  &:hover {
    background-color: grey;
  }
`

const ButtonC = styled(Link)`
  display: flex;
  color: #000;
  background-color: #10ffe347;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  border-radius: 5px;
  box-shadow: var(--shadow);
  margin: 10px;

  &:hover {
    background-color: #5ff4d6;
  }
`

const SectionE = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 0.5em;
  padding: 0.5em;

  > div {
    display: flex;
    border: 2px solid black;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    font-size: 1em;
  }

  @media screen and (max-width: 700px) {
    grid-template-columns: initial;
    grid-auto-rows: minmax(100px, auto);
  }
`

const BoxE1 = styled.div`
  background-color: green;
  grid-column: 1/3;

  @media screen and (max-width: 700px) {
    grid-column: initial;
  }
`
const BoxE2 = styled.div`
  background-color: purple;
  grid-column: 3;
  grid-row: 1/4;
  padding: 15px;

  @media screen and (max-width: 700px) {
    grid-column: initial;
    grid-row: initial;
  }
`
const BoxE3 = styled.div`
  background-color: red;
  grid-column: 1;
  grid-row: 2/4;

  @media screen and (max-width: 700px) {
    grid-column: initial;
    grid-row: initial;
  }
`
const BoxE4 = styled.div`
  background-color: black;
  color: white;
  grid-column: 2;
  grid-row: 2/4;

  @media screen and (max-width: 700px) {
    grid-column: initial;
    grid-row: initial;
  }
`
const BoxE5 = styled.div`
  background-color: orange;
  grid-column: 1/4;

  @media screen and (max-width: 700px) {
    grid-column: initial;
  }
`

const SectionD = styled.div`
  background-color: F1E9DA;
  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 0.5em;
`
const SegmentLeft = styled.div`
  background-color: #fff;
  padding: 2px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  height: 250px;
`

const SegmentRight = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 2px;
  border: 2px solid black;
  border-radius: 10px;
  align-items: center;
`

const BoxD = styled.div`
  background-color: #fff;
  padding: 2px;
  border: 2px solid black;
  border-radius: 10px;
  margin: 10px;
  width: 150px;
  height: 200px;
`

const BoundImgD = styled.img`
  width: 150px;
  height: 200px;
  object-fit: cover;
  margin: 10px;
  box-shadow: var(--shadow);
  border-radius: 10px;
`

const SectionC = styled.div`
  background-color: #f1e9da;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 200px));
  grid-gap: 0.5em;
  margin: 15px;
`
const BoxC = styled.div`
  background-color: #fff;
  padding: 2px;
  border: 2px solid black;
  border-radius: 10px;
  text-align: center;
  height: 250px;
`

const SectionA = styled.div`
  background-color: #f1e9da;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5em;
  margin: 15px;
`

const BoxA = styled.div`
  background-color: #ffd400;
  padding: 2px;
  border: 2px solid black;
  text-align: center;
`

const SectionB = styled.div`
  background-color: #f1e9da;
  display: grid;
  grid-gap: 0.5em;
  grid-template-areas:
    'showcase showcase box-b2'
    'showcase showcase box-b3';
`

const BoxB1 = styled.div`
  grid-area: showcase;
  background-color: #dfd4e9;
  padding: 2px;
  border: 2px solid black;
  text-align: center;
`

const BoxB2 = styled.div`
  grid-area: box-b2;
  background-color: #ffe773;
  padding: 2px;
  border: 2px solid black;
  text-align: center;
`

const BoxB3 = styled.div`
  grid-area: box-b3;
  background-color: #f4bad5;
  padding: 2px;
  border: 2px solid black;
  text-align: center;
`

const BoundImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin: 10px;
`

export default Pattern
