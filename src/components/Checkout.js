import React, { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import legit from 'legit'

import Error from 'components/Error'
import Msg from 'components/Msg'
import Submit from 'components/Submit'
import { createPaymentMethodAndCustomer } from 'utils'
import useStore from 'store'

const Checkout = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [err, setError] = useState(null)
  const [ok, setStatus] = useState(null)
  const [email, setEmail] = useState(null)
  const [loading, setLoading] = useState(false)
  // eslint-disable-next-line
  const [globalState, globalActions] = useStore()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (email) {
      legit(email)
        .then(async (result) => {
          if (result.isValid) {
            const { error, status } = await createPaymentMethodAndCustomer(stripe, elements, email, globalState.planId)
            if (error) {
              setError(error)
              setLoading(false)
            }
            if (status) {
              setStatus(status)
            }
          } else {
            setError('Email is invalid')
            setLoading(false)
          }
        })
        .catch((err) => {
          setError(err.message)
          setLoading(false)
        })
    } else {
      setError('Email is required')
      setLoading(false)
    }
  }

  const Card = () => (
    !ok ? <div className="col-sm-6">
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <CardElement />
        <Error e={err} />
        <Submit stripe={stripe} loading={loading} />
      </form>
    </div> : <Msg msg={ok} />
  )

  const FreePlan = () => (
    globalState.planId == 0 ? <p className="ok">
      Please see the <a href="https://blueblood.talaikis.com/posts/introducing-bitcoin-strategy" title="Bitcoin strategy">trading API description</a> on how to access this endpoint.
    </p> : null
  )

  return globalState.planId !== null && globalState.planId !== 0 ? <Card /> : <FreePlan />
}

export default Checkout
