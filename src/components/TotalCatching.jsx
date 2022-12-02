import React from 'react'
import {
    Box,
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
    CardMedia,
} from '@mui/material';
import styled from 'styled-components';

const TotalCatching = () => {
  const fisherman = ["József", "János", "Géza", "Béla", "András"];
  const catching = [8, 4, 6, 7, 5];

  let totalCatching = "";

  for (let i = 0; i < fisherman.length; i++) {
  for (let j = 0; j < catching.length; j++) {}
  totalCatching=`${fisherman[i]} ${catching[i]} halat fogott`;
  }
  
  return (
    <Box width='95%' height='900px' m={5} >
          <Card>
              <CardMedia
                  component='img'
                  height='440'
                  image='https://images.unsplash.com/photo-1534948216015-843149f72be3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                  alt='unsplash image'
              />
              <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                      Össz fogás
                  </Typography>
                  <Typography variant='body2' color='text-secondary'>
                    {totalCatching}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size='small'>Share</Button>
                  <Button size='small'>Learn more</Button>
              </CardActions>
          </Card>
    </Box>

    // <Section>
    //   <h1>3. Feladat</h1>
    //   <p>{totalCatching}</p>      
    // </Section>
  )
}

export default TotalCatching

const Section = styled.div`
  margin-bottom: 50px;
`
