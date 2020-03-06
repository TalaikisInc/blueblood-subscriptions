import React from 'react';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

import Container from 'components/Container'
import Checkout from 'components/Checkout'
import Pricing from 'components/Pricing'
import Copyright from 'components/Copyright'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)

function App () {
  return (
    <Elements stripe={stripePromise}>
      <Container>
        <Pricing />
        <Checkout />
      </Container>
      <Copyright />
    </Elements>
  )
}

export default App
