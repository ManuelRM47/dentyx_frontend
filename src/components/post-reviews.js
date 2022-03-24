import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid  from '@mui/material/Grid';
import { Rating, Typography } from '@mui/material';
import { TextField } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';
import ReviewDataService from '../services/review';

export default function ReviewPost(props) {

    let newReview = {
        username: "Manuel Alejandro",
        location: {
            city: "Mexicali",
            state: "Baja California",
            country: "Mexico"
        },
        review_values: {
            quality: 1,
            communication: 1,
            price: 1,
            value: 1,
            satisfaction: 1,
            service: 1,
            cleanliness: 1,
            comfort: 1,
            location: 1
        },
        review_comment: "Escriba aqui su comentario",
        review_recommendation: "Escriba aqui su recomendacion"
    };
    const isMobile = useMediaQuery('(max-width: 600px)');
    const date = new Date();
    const [review, setReview] = React.useState(newReview);
    const [submitted, setSubmitted] = React.useState(false);

    //console.log(isMobile);
    
    //event handlers
    const handleChange = (event) => {
        console.log(event.target.name)
        console.log(event.target.value)
        const value = event.target.value;
        setReview({
            ...review,
            [event.target.name]: value
        });
    };

    //Component structure
  return (
    <>
    {//* titulo, ubicacion y fecha
    }
    <Grid item xs={12} paddingTop={2}>
        <Typography variant='h4' component='h4' align={isMobile ? 'center':'left'} className='titulo' paddingBottom={3}>Publicar Reseña</Typography>
        <Typography variant='h5' component='h5' align={isMobile ? 'center':'left'} className='titulo2'>Oscar Rosete</Typography>
    </Grid>
    
    <Grid item xs={12} md={6}>
        <Typography variant='subtitle1' align={isMobile ? 'center':'left'} className='subtitle' >Mexicali BC, M&eacute;xico</Typography>
    </Grid>
    <Grid item xs={12} md={6}>
        <Typography variant='subtitle2' align={isMobile ? 'center':'right'} className='subtitle' paddingBottom={3}>{date.toLocaleDateString("es-ES",{ year: 'numeric', month: 'long', day: 'numeric' })}</Typography>
    </Grid>

   { //? inputs
   }
    <Box xs={12} className='container' sx={{
        padding: 3,
        width: '100%'
    }}>
        <Grid item xs={12}>
                <Typography variant='h6' className='titulo3'>Calificacion</Typography>
                <Paper variant='outlined' /> 
        </Grid>
        {//* ratings
        }
        <Grid item xs={12} paddingBottom={3}>
            <Box paddingLeft={3} xs={12}>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Calidad</Typography>
                <Rating min={1} value={review.review_values.quality} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.quality" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Servicio</Typography>
                <Rating min={1} value={review.review_values.service} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.service" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Comunicacion</Typography>
                <Rating min={1} value={review.review_values.communication} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.communication" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Limpieza</Typography>
                <Rating min={1} value={review.review_values.cleanliness} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.cleanliness" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Precio</Typography>
                <Rating min={1} value={review.review_values.price} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.price" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Confort</Typography>
                <Rating min={1} value={review.review_values.comfort} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.comfort" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Valor</Typography>
                <Rating min={1} value={review.review_values.value} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.value" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Ubicacion</Typography>
                <Rating min={1} value={review.review_values.location} precision={0.5} className={`${isMobile ? "rating-m":"rating-d"}`} name="review_values.location" onChange={handleChange}></Rating>
                <Typography className={`${isMobile ? "rating-m":"rating-d"}`}>Satisfaccion</Typography>
                <Rating min={1} value={review.review_values.satisfaction} precision={0.5} className={`${isMobile ? "rating-m":""}`} name="review_values.satisfaction" onChange={handleChange}></Rating>
            </Box>
            <Paper variant='outlined'/> 
        </Grid>
        {//* comentario
        }
        <Grid item xs={12} paddingBottom={3}>
            <Typography variant='h6' className='titulo3'>Comentario</Typography>
            <Paper variant='outlined' className='separador'/> 
            <TextField 
                className='text-field'
                multiline
                value={review.review_comment}
                name="review_comment"
                onChange={handleChange}
            />
        </Grid>
        {//* recomendacion
        }
        <Grid item xs={12} paddingBottom={3}>
            <Typography variant='h6' className='titulo3'>Recomendaciones</Typography>
            <Paper variant='outlined' className='separador'/> 
            <TextField 
                className='text-field'
                multiline
                value={review.review_recommendation}
                name="review_recommendation"
                onChange={handleChange}
            />
        </Grid>
        <Grid item xs={12} paddingBottom={1}>
            <Button
            variant='contained' 
            className='boton'
            style={isMobile ? 
                {                
                    backgroundColor: "#0C0C34",
                    display: "flex",
                    margin: "auto",
                    width: "100%"
                } : {
                    backgroundColor: "#0C0C34",
                    display: "flex",
                    margin: "auto",
                    padding: "15px 20px"
                }}
            >
                Publicar
            </Button>
        </Grid>
       
    </Box>
    </>
  );
}

