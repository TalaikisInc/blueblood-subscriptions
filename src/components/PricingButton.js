import React, { Fragment } from 'react'

import { GoBack, GoPath } from 'components/Buttons'

const PricingButton = ({ title, path }) => {
  return <Fragment><GoPath title={title} path={path} /> : <GoBack /></Fragment>
}

export default PricingButton
