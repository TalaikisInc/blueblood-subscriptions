import React from 'react'
import storeHook from 'useStore'

const initialState = {
  planId: null
}

const actions = {
  setPath: (store, planId) => {
    store.setState({ planId })
  }
}

export default storeHook(React, initialState, actions)
