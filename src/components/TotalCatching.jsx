import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import { fisherman, catching } from '../data';

const TotalCatching = () => {

  let totalCatching = "";

  for (let i = 0; i < fisherman.length; i++) {
  for (let j = 0; j < catching.length; j++) {}
    totalCatching += `${fisherman[i]} ${catching[i]} halat fogott`;
  }

  
  return (
    <Container>
      <Section
        title="Összes fogás"
        description={totalCatching}
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Container>

    
  )
}

export default TotalCatching

const Container = styled.div`
  height: 100vh;
`
