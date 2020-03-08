import { CardElement } from '@stripe/react-stripe-js'

const orderComplete = (subscription) => {
  console.log(subscription)
  return { status: subscription.status, error: null }
}

const confirmSubscription = (subscriptionId) => {
  return fetch(`${process.env.REACT_APP_GETSUB_ENDPOINT}/get-subscription`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      subscriptionId: subscriptionId
    })
  })
    .then((response) => {
      return response.json()
    })
    .then((subscription) => {
      return orderComplete(subscription)
    })
}

const handleSubscription = (stripe, subscription) => {
  const { latest_invoice } = subscription
  const { payment_intent } = latest_invoice

  if (payment_intent) {
    const { client_secret, status } = payment_intent

    if (status === 'requires_action' || status === 'requires_payment_method') {
      stripe.confirmCardPayment(client_secret).then((result) => {
        if (result.error) {
          return { error: result.error.message, status: null }
        } else {
          return confirmSubscription(subscription.id)
        }
      })
    } else {
      return orderComplete(subscription)
    }
  } else {
    return orderComplete(subscription)
  }
}

export const createCustomer = async (stripe, paymentMethod, cardholderEmail, planId) => {
  return fetch(`${process.env.REACT_APP_CREATE_ENDPOINT}/create-customer`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: cardholderEmail,
      payment_method: paymentMethod,
      planId
    })
  })
    .then(response => {
      return response.json()
    })
    .then(subscription => {
      handleSubscription(stripe, subscription)
    })
}

export const cancelSubscription = (subscriptionId) => {
  /*
  0. write subscriptionId to dynamodb
  1. query dynamodb by email to get subscriptionId
  */
  return fetch(`${process.env.REACT_APP_CANCEL_ENDPOINT}/cancel-subscription`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      subscriptionId
    })
  })
    .then(response => {
      return response.json()
    })
    .then(subscription => {
      // handleSubscription(stripe, subscription)
    })
}

export const createPaymentMethodAndCustomer = (stripe, elements, email, planId) => {
  return stripe
    .createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: { email }
    })
    .then(async (result) => {
      if (result.error) {
        return { error: result.error.message, status: null }
      } else {
        const output = await createCustomer(stripe, result.paymentMethod.id, email, planId)
        return output
      }
    })
}
