import React from 'react'

import useStore from 'store'

const PricingButton = ({ title, path }) => {
  // eslint-disable-next-line
  const [globalState, globalActions] = useStore()
  const submit = (path) => {
    globalActions.setPath(path)
  }

  return <button onClick={() => submit(path)}>{ title }</button>
}

export default PricingButton
