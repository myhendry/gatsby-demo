import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  grid-auto-rows: minmax(100px, auto);
  /*
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-columns: 70% 30%;
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-auto-rows: 100px;
  */

  > div {
    background: #eee;
    padding: 1em;
  }

  > div:nth-child(odd) {
    background: #ddd;
  }
`

const Nested = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 70px;
  grid-gap: 1em;

  > div {
    border: #333 1px solid;
    padding: 1em;
  }
`

const OuterBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  grid-gap: 1em;
  justify-items: stretch; /* start, end, stretch */
  align-items: stretch; /* start, end, stretch */
`

const InnerBox1 = styled.div`
  border: #333 1px solid;
  padding: 1em;
  /* align-self: start; */
  grid-column: 1/3;
  /* line 1 to 3 */
  grid-row: 1/3;
`

const InnerBox2 = styled.div`
  border: #333 1px solid;
  padding: 1em;
  /* align-self: end; */
  grid-column: 3;
  grid-row: 1/3;
`

const InnerBox3 = styled.div`
  border: #333 1px solid;
  padding: 1em;
  /* justify-self: end; */
  grid-column: 2/4;
  grid-row: 3;
`

const InnerBox4 = styled.div`
  border: #333 1px solid;
  /* padding: 1em; */
  grid-column: 1;
  grid-row: 2/4;
`

const Css = () => {
  return (
    <Wrapper>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquam
        nulla, temporibus et tempore dignissimos odit est! Quasi ea, iusto
        neque, id obcaecati praesentium optio quam dignissimos consectetur
        doloribus minima odio perspiciatis cumque nesciunt inventore numquam
        placeat? Quisquam alias quas saepe accusamus repellendus, pariatur
        cumque aliquam consequuntur voluptates explicabo eius quae architecto in
        eos exercitationem. Dignissimos tempore debitis qui voluptatem
        accusamus! Nihil, quo. Mollitia rerum aliquam ratione aliquid eaque
        labore saepe explicabo consectetur delectus. Ea ad quia cupiditate
        maxime optio!
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        aliquid ratione delectus voluptatem sequi culpa repudiandae suscipit
        tempora consequatur laboriosam quas fuga, rerum cupiditate ducimus eius!
        Modi totam incidunt libero enim! Repellat reprehenderit asperiores sed
        quaerat vel, saepe quae. Error voluptas blanditiis dignissimos facilis
        vel itaque neque sit eos provident? Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Cupiditate nam optio architecto minima
        voluptatum aperiam numquam, deleniti quam, quibusdam rem ullam culpa a
        ratione eligendi earum recusandae soluta dolore hic qui sapiente
        officiis blanditiis. Odio, saepe velit consectetur at id doloremque
        recusandae amet numquam quod, cumque quaerat, eos nobis debitis tenetur
        possimus! Iste debitis est impedit fuga eum id. Reiciendis quo dolorem
        consequatur rem quidem ut, distinctio temporibus reprehenderit nesciunt,
        blanditiis et explicabo mollitia amet alias unde voluptatibus numquam
        magni.
      </div>
      <Nested>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
      </Nested>
      <OuterBox>
        <InnerBox1>Inner Box 1</InnerBox1>
        <InnerBox2>Inner Box 2</InnerBox2>
        <InnerBox3>Inner Box 3</InnerBox3>
        <InnerBox4>Inner Box 4</InnerBox4>
      </OuterBox>
    </Wrapper>
  )
}

export default Css
