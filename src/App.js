import React from 'react';
import './App.css';
import ReviewPost from './components/reviews';
import Container from '@mui/material/Container'
import Grid  from '@mui/material/Grid';


function App() {
  return (
    <>
      <Container>
        <Grid container spacing={2}>
            <ReviewPost/>
        </Grid>
      </Container>
    </>
  );
}

export default App;
