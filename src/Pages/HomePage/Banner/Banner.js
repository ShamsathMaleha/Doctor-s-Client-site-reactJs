import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import chair from '../../components/images/chair.png'
import background from '../../components/images/bg.png'

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={5}>
            <Typography variant="h3">
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography>
                lorem20
            </Typography>
          </Grid>
          <Grid item xs={12} md={7}>
            <img src={chair} alt="" />
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default Banner;