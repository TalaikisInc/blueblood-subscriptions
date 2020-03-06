import React from 'react'

const Container = ({ children }) => (
  <section>
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          { children }
        </div>
      </div>
    </div>
  </section>
)

export default Container
