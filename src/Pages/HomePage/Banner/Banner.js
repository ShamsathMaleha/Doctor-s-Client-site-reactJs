import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import chair from '../../../components/images/chair.png'
import background from '../../../components/images/bg.png'
import { Button, Container } from '@mui/material';


const bannerBg ={
    background: `url(${background})`,
    

}

const verticalCenter ={
    display: 'flex',
    alignItems : 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid style={{...verticalCenter,textAlign:'left'}} item xs={12} md={6}>
            <Box>
            <Typography variant="h3">
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{my:3,fonstSize: 13, fontWeight: 300, color:'grey'}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et omnis cumque id quasi repellat vel minima modi commodi provident?
            </Typography>
            <Button variant="contained" style={{backgroundColor:'#5CE7ED'}}>
                Get Appointment
            </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} style={verticalCenter}>
            <img style={{width:'400px'}} src={chair} alt="" />
          </Grid>
         
        </Grid>
      </Container>
    );
};

export default Banner;