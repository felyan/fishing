import React from 'react'
import styled from 'styled-components';
import Section from './Section';


const FullList = () => {  
  const fisherman = ["József", "János", "Géza", "Béla", "András", "Tamás"];
  const catching = [8, 4, 6, 7, 5, 0];

  let totalFisherman = fisherman.length;
  let result = 0;

  
  
  for (let j = 0; j < catching.length; j++) {
    result += catching[j];    
  }
  
  const text = `A horgászversenyen ${totalFisherman} horgász indult.
                ${fisherman}
                Összesen ${ result } halat fogtak.`;

  return (
    <Container>
      <Section
        title="Résztvevők"
        description={text}
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Container>
    
  )
}

export default FullList


const Container = styled.div`
  height: 100vh;
`