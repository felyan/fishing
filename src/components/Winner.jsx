import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import { fisherman, catching } from '../data';

const Winner = () => {
  
  let winner = "";
            for (let i = 0; i < fisherman.length; i++) {
              let maxCatch = 0;
              let bestFisherman = 0;
              for (let j = 0; j < catching.length; j++) {
                maxCatch += parseInt(catching[j]);

                if (catching[j] > maxCatch) {
                  maxCatch = catching[j];
                  bestFisherman = j;
                }
              }
              winner=`A horgászverseny győztese ${fisherman[bestFisherman]} ${[maxCatch]} hallal`
            }
  

  return (
    <Container>
      <Section
        title="Győztesek"
        description="Egestas sed sed risus pretium quam."
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        main={winner}
      />
    </Container>
  )
}

export default Winner


const Container = styled.div`
  height: 100vh;
`

