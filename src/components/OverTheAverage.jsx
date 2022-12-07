import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import { fisherman, catching } from '../data';

const OverTheAverage = () => {
  //let average = totalFish / totalFisherman;
// console.log(average);
// for (let j = 0; j < catching.length; j++) {
//   let aboveAverage = 0;
//   if (catching[j] > average) {
//     aboveAverage = j;
//   }
//   console.log(`Átlag felett teljesített ${fisherman[aboveAverage]} ${catching[aboveAverage]} hallal`);
// }
  return (
    <Container>
      <Section
        title="Átlag felett teljesítők"
        description="Praesent tristique magna sit amet purus gravida quis"
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Container>
  )
}

export default OverTheAverage

const Container = styled.div`
  height: 100vh;
`

