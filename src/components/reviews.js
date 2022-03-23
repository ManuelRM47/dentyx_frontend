import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { Rating, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { createTheme } from '@mui/material';

export default function ReviewPost() {

    const [value, setValue] = React.useState('Escribe aqui tu comentario');
    const [value2, setValue2] = React.useState('Escribe aqui tu comentario');

    const handleChange = (event) => {
        setValue(event.target.value);
      };

    const handleChange2 = (event) => {
    setValue2(event.target.value2);
    };

  return (
    <>
    <Grid item xs={12}>
        <Typography variant='h4' component='h4' paddingBottom={3}>Post Review</Typography>
        <Typography variant='h5' component='h5'>Oscar Rosete</Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography variant='subtitle1'>Mexicali BC, M&eacute;xico</Typography>
    </Grid>
    <Grid item xs={6}>
        <Typography variant='subtitle2' align='right' >Marzo 3, 2022</Typography>
    </Grid>
    <Grid item xs={12}>
        <Paper elevation={3} variant='outlined' />
            <Typography variant='h6'>Calificacion</Typography>
            <Box paddingLeft={3}>
                <Typography className='rating'>Calidad</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Servicio</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Comunicacion</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Limpieza</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Precio</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Confort</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Valor</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Ubicacion</Typography>
                <Rating className='rating'></Rating>
                <Typography className='rating'>Satisfaccion</Typography>
                <Rating className='rating'></Rating>
            </Box>
    </Grid>
    <Grid item xs={12}>
        <Paper elevation={3} variant='outlined' /> 
        <Typography variant='h6'>Comentario</Typography>
            <TextField 
                className='text-field'
                multiline
                value={value}
                onChange={handleChange}
            />
    </Grid>
    <Grid item xs={12}>
        <Paper elevation={3} variant='outlined' /> 
        <Typography variant='h6'>Recomendaciones</Typography>
            <TextField 
                className='text-field'
                multiline
                value={value2}
                onChange={handleChange2}
            />
    </Grid>
    </>
  );
}