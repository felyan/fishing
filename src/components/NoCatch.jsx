import React from 'react'
import styled from 'styled-components';

const NoCatch = () => {
  const fisherman = ["József", "János", "Géza", "Béla", "András"];
  const catching = [8, 4, 6, 7, 5];
  return (
    <Section>
      <h1>6. feladat</h1>
      <h3>NoCatch</h3>
    </Section>
  )
}

export default NoCatch

const Section = styled.div`
  margin-bottom: 50px;
`