import React from 'react'
import styled from 'styled-components';
import Section from './Section';

const NoCatch = () => {
  const fisherman = ["József", "János", "Géza", "Béla", "András", "Tamás"];
  const catching = [8, 4, 6, 7, 5, 0];

  let noCatch = "";

let noCatchFisherman = [];
for (let i = 0; i < fisherman.length; i++) {
  for (let i = 0; i < catching.length; i++) {
    if (catching[i] === 0) {
      if (!noCatchFisherman.includes(fisherman[i])) {
        noCatchFisherman.push(fisherman[i]);
      }
    }
  }
  }
  
for (let i = 0; i < noCatchFisherman.length; i++) {
   noCatch=`${noCatchFisherman[i]} nem fogott halat.`;
}

  return (
    <Container>
      <Section
        title="Akik semmit sem fogtak"
        description="Egestas sed sed risus pretium quam."
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        main={noCatch}   
      />
    </Container>
  )
}

export default NoCatch

const Container = styled.div`
  height: 100vh;
`

