import React from 'react'
import './Navlist.css'

const Navlist = () => {
  return (
    <ul style={{display:'flex', gap:'2rem', listStyleType:'none'}}>
        <li>SERVICES</li>
        <li>PORTFOLIO</li>
        <li>ABOUT</li>
        <li>TEAM</li>
        <li>CONTACT</li>
    </ul>
  )
}

export default Navlist