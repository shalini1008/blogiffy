import React from 'react'
import logo from "../image/Logo.png"
export  function Logo({width = '100px'}) {
  return (
    <div>
      <img src= {logo} alt="Logo" className=' w-11 h-11'/>
    </div>
  )
}

export default Logo