import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const Home = () => {
  return (
    <Container>
      <Section
        title="XXVII. Horgászverseny"
        description="Praesent tristique magna sit amet purus gravida quis"
        backgroundImg="https://images.unsplash.com/photo-1529230117010-b6c436154f25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      ></Section>
    </Container>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
`