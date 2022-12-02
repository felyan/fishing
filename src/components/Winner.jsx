import React from 'react'
import styled from 'styled-components';

const Winner = () => {
  const fisherman = ["József", "János", "Géza", "Béla", "András"];
  const catching = [8, 4, 6, 7, 5];
  return (
    <Section>
      <h1>4. feladat</h1>
      <h3>Winners</h3>
    </Section>
  )
}

export default Winner


const Section = styled.div`
  margin-bottom: 50px;
`