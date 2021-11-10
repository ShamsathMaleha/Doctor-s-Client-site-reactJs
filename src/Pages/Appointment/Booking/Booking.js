import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';





const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space}= booking
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
       <>
        <Grid item xs={12} sm={6} md={4}>
           
           <Paper sx={{py:5}} elevation={3}>
             <Typography sx={{color:'info.main', fontWeight:600}} variant="h5" gutterBottom component="div">
                {name}
            </Typography>
             <Typography variant="h6" gutterBottom component="div">
                {time}
            </Typography>
             <Typography variant="caption" gutterBottom component="div">
                {space} SPACES AVAILABLE            
                </Typography>
                <Button onClick={handleOpen} style={{backgroundColor:'#5CE7ED'}} variant="contained">
                    BOOK APPOINTMENT
                </Button>
           </Paper>
           </Grid>
           <BookingModal 
           handleClose={handleClose}
           open={open}
           booking={booking}
        date={date}
        setBookingSuccess={setBookingSuccess}
           ></BookingModal>
       </>
    );
};

export default Booking;