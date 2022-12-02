import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="XXVII. Horgászverseny"
        description="Praesent tristique magna sit amet purus gravida quis"
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`