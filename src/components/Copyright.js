import React from 'react'

const Copyright = () => {
  const d = new Date()
  return <p className="text-center copyright">&copy; <a href="https://blueblood.talaikis.com" title="Trading Blog">BlueBlood Trading</a>, <a href="https://talaikis.com" title="Developer">Talaikis Ltd.</a>, { d.getFullYear() }</p>
}

export default Copyright
