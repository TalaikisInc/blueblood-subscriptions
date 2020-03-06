import React from 'react'

import Price from 'components/Price'
import PricingDetail from 'components/PricingDetail'
import PricingButton from 'components/PricingButton'

const PricingSlot = ({ name, price, feat, button, icon, path }) => {
  const i = `fa fa-${icon}`
  return (
    <div className="col-sm-4">
      <div className="card text-center">
        <div className="title">
          <i className={i} aria-hidden="true"></i>
          <h2>{ name }</h2>
        </div>
        <Price price={price} />
        <PricingDetail feat={feat} />
        <PricingButton title={button} path={path} />
      </div>
    </div>
  )
}

export default PricingSlot
