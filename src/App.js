import React from 'react';
import './App.css';
import ReviewPost from './components/post-reviews';
import Container from '@mui/material/Container';
import Grid  from '@mui/material/Grid';


function App() {
  return (
    <>
      <Container>
        <Grid container rowSpacing={0}>
            <ReviewPost/>
        </Grid>
      </Container>
    </>
  );
}

export default App;
