import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripeLoad = loadStripe('pk_test_51K073dH9Kuv7UeNyycym0fwuYdUHloSde7mO48UY49sDivKoicG5NHPWU674Gg79oUB87gNesOUeUDP1NqE5qmEU00CMIjMzgp')

const Payment = () => {
    const {appointmentId} = useParams();
    const [appointment, setAppointment]= useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
        .then(res =>res.json())
        .then(data =>setAppointment(data))
    },[])

    return (
        <div>
            <h2>Please Pay For: {appointment.patientName} for {appointment.serviceName}</h2>
      
            <h4>Pay: ${appointment.price} </h4>


            <Elements stripe={stripeLoad}>
            <CheckoutForm 
            appointment={appointment}
            
            />
            </Elements>
            
        </div>
    );
};

export default Payment;


// 1.install stripe and stripe-react
// 2.set publishable key 
// 3.Elements 
// 4.checkout form 
// 5. create payment method
// 6.
// 7.