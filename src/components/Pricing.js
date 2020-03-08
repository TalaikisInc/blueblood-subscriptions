import React, { Fragment } from 'react'
import PricingSlot from 'components/PricingSlot'

import useStore from 'store'

const features = {
  free: [
    { t: 'Access to 1 strategy', c: true },
    { t: 'Signals with 2 day delay', c: true },
    { t: 'No support', c: false }
  ],
  basic: [
    { t: '2+ Bitcoin strategies', c: true },
    { t: 'Daily signals', c: true },
    { t: 'Email support', c: true },
    { t: 'Stock to Flow model prices', c: true }
  ],
  pro: [
    { t: 'Everything Basic', c: true },
    { t: 'Trading bot with hosting', c: true }
  ]
}

const Pricing = () => {
  // eslint-disable-next-line
  const [globalState, globalActions] = useStore()

  return (
    <Fragment>
      <h1>NOTE. This system is not yet live!</h1>
      { globalState.planId === 0 || globalState.planId === null ? <PricingSlot name="Free" price='0/ mo' feat={features.free} path={0} button="Try It Free" icon="paper-plane" /> : null }
      { globalState.planId === process.env.REACT_APP_PLAN_BASIC || globalState.planId === null ? <PricingSlot name='Basic' price='39/ mo' feat={features.basic} path={process.env.REACT_APP_PLAN_BASIC} button="Sign Up" icon="plane" /> : null }
      { globalState.planId === process.env.REACT_APP_PLAN_PRO || globalState.planId === null ? <PricingSlot name='Pro' price='99/ mo' feat={features.pro} path={process.env.REACT_APP_PLAN_PRO} button="Sign Up" icon="rocket" /> : null }
    </Fragment>
  )
}

export default Pricing
