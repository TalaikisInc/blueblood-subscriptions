import React from 'react'

import useStore from 'store'

export const GoBack = () => {
  const [globalState, globalActions] = useStore()
  const submit = (path) => {
    globalActions.setPath(path)
  }

  return globalState.planId !== null ? <button onClick={() => submit(null)}>Go back</button> : null
}

export const GoPath = ({ title, path }) => {
  const [globalState, globalActions] = useStore()
  const submit = (path) => {
    globalActions.setPath(path)
  }

  return globalState.planId === null || globalState.planId === undefined ? <button onClick={() => submit(path)}>{ title }</button> : null
}
