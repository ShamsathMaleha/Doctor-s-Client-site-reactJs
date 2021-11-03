import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../components/images/doctor.png'
import bg from '../../../components/images/appointment-bg.png'
import { Button, Typography } from '@mui/material';
import { darken } from '@mui/system';


const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175,
}


const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
           <img style={{width:400, marginTop:'-110px'}} src={doctor} alt="" />
          </Grid>


          <Grid item xs={12} md={6} sx={{
              display:'flex', 
              justifyContent:'flex-start',
              textAlign: 'left',
              alignItem: 'center'
              }}>
          <Box >
          <Typography variant="h6" sx={{mb:5,color:'#5CE7ED'}} >
           Appointment 
          </Typography>
          <Typography variant="h4" sx={{color:'white'}}>
           Make an Appointment Today
          </Typography>
          <Typography variant="h6" sx={{my: 5,color:'white', fontWeight:300}} >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam iusto mollitia, saepe et voluptatem ea cumque 
          </Typography>
              
              <Button sx={{mb:3}} variant="contained">
              Learn More
          </Button>
              
          </Box>
          </Grid>
         
         
        </Grid>
      </Box>
    );
};

export default AppointmentBanner;