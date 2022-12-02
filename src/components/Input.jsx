import React from 'react'
import styled from 'styled-components';

const Input = () => {
  return (
    <Section>
        <input type="text" />
        <input type="text" />
        <button>Add</button>
    </Section>
  )
}

export default Input

const Section = styled.div`
  margin-bottom: 50px;
`