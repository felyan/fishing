import React from 'react'
import styled from 'styled-components';


const Section = ({ title, description, backgroundImg, main }) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{main}</p>
      </ItemText>
    </Wrap>
    
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height:100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80");
`
const ItemText = styled.div`
  padding-top: 20vh;
  text-align: center;

  h1 {
    font-size: 64px;
  }

  p {
    font-size:30px;
  }

  h1, p{
    color: white;
  }
`
