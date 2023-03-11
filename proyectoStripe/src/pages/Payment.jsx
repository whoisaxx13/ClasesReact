import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement} from '@stripe/react-stripe-js'

const stripePromise = loadStripe('pk_test_51MZHIPAek27wJPNXWbKoI35L1X1xoQrGydSmkdnwvf3h81m9DEmrlgbmiLcd66cPSESr5XFyvoBD2kO2rf2GhDkC009v3wNISy');

const Payment = () => {
  return (
    <Elements stripe={stripePromise} style={{ width:'100%'}}>
      <CardElement />
    </Elements>
  )
}

export default Payment