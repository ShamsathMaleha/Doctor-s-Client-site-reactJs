import { Alert, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import login from '../../../components/images/login.png'
import useAuth from '../../../hooks/useAuth';


const Register = () => {

    const {user, registerUser, isLoading, authError} = useAuth()
    const history = useHistory()
    const [loginData,setLoginData] =useState({})

    const handleOnBlur = (e)=>{

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData ={...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);

    }
  
    const handleLoginSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Password doesnt match')
            return;
        }
        registerUser(loginData.email, loginData.password,loginData.name,history)
        e.preventDefault()
    }


    return (
        <Grid container spacing={2}>
  <Grid item sx={{mt:5}} xs={12} md={6}>
        <Typography variant="body1" gutterBottom>
            Register
        </Typography>
    {!isLoading &&
        <form onSubmit={handleLoginSubmit}>
    <TextField
    sx={{width:'75%' , m:1}}
        id="standard-basic"
        name="name"
        type="text"
        onBlur={handleOnBlur} 
        label="Your name"
        variant="standard" />
    <TextField
    sx={{width:'75%' , m:1}}
        id="standard-basic"
        name="email"
        type="email"
        onBlur={handleOnBlur} 
        label="Your Email"
        variant="standard" />
    <TextField
    sx={{width:'75%', m:1}}
        id="standard-basic" 
        label="Your Password"
        type="password"
        name="password"
        onBlur={handleOnBlur}
        variant="standard" />
    <TextField
    sx={{width:'75%', m:1}}
        id="standard-basic" 
        label="Repeat Password"
        type="password"
        name="password2"
        onBlur={handleOnBlur}
        variant="standard" />
        
        
        <Button sx={{width:'25%', m:1}} variant="contained" type="submit">Submit</Button>
        <NavLink style={{textDecoration: 'none'}} to="/login">
            <Button variant="text">Already Registered!</Button>
         </NavLink>
    
    </form>}
    {isLoading && <CircularProgress></CircularProgress> }
    {user?.email && <Alert severity="success">Successully Registered!</Alert>
 }
 {authError && <Alert severity="error">{authError}</Alert>}
  </Grid>
  <Grid item xs={12} md={6}>
    <img style={{width:'100%'}} src={login} alt="" />
  </Grid>
 
</Grid>
    );
};

export default Register;