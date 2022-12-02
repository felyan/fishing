import React from 'react'
import styled from 'styled-components';


const FullList = () => {  
  const fisherman = ["József", "János", "Géza", "Béla", "András", "Tamás"];
const catching = [8, 4, 6, 7, 5, 0];

  let totalFisherman = fisherman.length;
  let result = "";
  
  for (let i = 0; i < fisherman.length; i++) {
    for (let j = 0; j < catching.length; j++) {
  }
  
      result += `${fisherman[i]} ${catching[i]} halat fogott. `;
}

  return (
    
    <Section>
      <p>{totalFisherman} horgász indult a horgászversenyen.</p>
      <p>{result}</p>



    </Section>
  )
}

export default FullList


const Section = styled.div`

`