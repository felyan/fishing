import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import { fisherman, catching } from '../data';
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography
} from '@mui/material';

const FullList = () => {

  let totalFisherman = fisherman.length;
  let result = 0;

  
  
  for (let j = 0; j < catching.length; j++) {
    result += catching[j];    
  }

  function generate(element) {
  return [fisherman].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}
  
  // const text = `A horgászversenyen ${totalFisherman} horgász indult.
  //               ${fisherman}
  //               Összesen ${ result } halat fogtak.`;

  return (
    <Container>
      <Section
        title="Résztvevők"
        description=""
        backgroundImg="https://images.unsplash.com/photo-1657194724857-117a10f56baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      >
         
        <Box item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            A versenyen {totalFisherman} indult.
          </Typography>
            <List>
              {generate(
                <ListItem>
                  <ListItemText
                    primary={fisherman}

                  />
                </ListItem>,
              )}
          </List>
          <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            Összesen {result} halat fogtak.
          </Typography>
          </Box>
      </Section>
    </Container>
    
  )
}

export default FullList


const Container = styled.div`
  height: 100vh;
`



