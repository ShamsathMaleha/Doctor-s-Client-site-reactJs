import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({appointment}) => {
  const {price,patientName, _id} = appointment;
    const stripe = useStripe();
    const elements = useElements();
    // const {user}= useAuth()


  const [error, setError]= useState('');
  const [success, setSuccess] =useState('')
  const [clientSecret, setClientSecret]=useState(false)
  const [process, setprocess]=useState('')



  useEffect(()=>{
    fetch('http://localhost:5000/create-payment-intent',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({price})
    })
    .then(res=>res.json())
    .then(data=>setClientSecret(data.clientSecret));
  },[price])



    const handleSubmit = async (e) =>{
      e.preventDefault()
        if (!stripe || !elements) {
  
            return;
          }
          const card = elements.getElement(CardElement);
          
          if (card == null) {
            return;
          }
          setprocess(true)
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            // console.log('[error]', error);
            setError(error.message)
            
          } else {
            setError('')
        
            console.log('[PaymentMethod]', paymentMethod);
          }
         
      // payment intent 

      const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name:patientName ,
              // email: user.email 
            },
          },
        },
      );
        if(intentError){
          setSuccess('')
          setError(intentError.message)
        }  
        else{
          setError('');
          setSuccess('your payment processed succesfully')
          setprocess(false);

          // save to db 


          const payment= {
            amount : paymentIntent.amount,
            created: paymentIntent.created,
            last4: paymentMethod.card.last4,
            transaction: paymentIntent.client_secret.slice('_secret')[0]
          }
          const url = `http://localhost:5000/appointments/${_id}`;
          fetch(url, {
            method: 'PUT',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(payment)
          
          })
          .then(res=>res.json())
          // .then(data=>)
        }

      
    }


   
    return (
        <div>
             <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    { process  ? <CircularProgress></CircularProgress> :<button type="submit" disabled={!stripe || success}>
        Pay {price}
      </button>}
    </form>

    {
      error && <p>{error}</p>
    }
    {
      success && <p>{success}</p>
    }
        </div>
    );
};

export default CheckoutForm;