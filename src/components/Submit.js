import React from 'react'
import { AtomSpinner } from 'react-epic-spinners'

const Loading = ({ stripe, loading }) => (
  loading ? <AtomSpinner /> : <button type="submit" disabled={!stripe}>
    Subscribe
  </button>
)

export default Loading
