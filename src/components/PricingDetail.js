import React from 'react'

const PricingDetail = ({ feat }) => (
  <div className="option">
    <ul>
      { feat.map((f, i) => {
        const c = f.c ? 'fa fa-check' : 'fa fa-times'
        return <li key={i}><i className={c} aria-hidden="true"></i> { f.t }</li>
      })}
    </ul>
  </div>
)

export default PricingDetail
