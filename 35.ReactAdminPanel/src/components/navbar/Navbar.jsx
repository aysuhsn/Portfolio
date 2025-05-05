import React from 'react'
import Navlist from '../navlist/Navlist'

const Navbar = () => {
  return (
    <div className='container'  style={{display:"flex", alignItems:'center', justifyContent:'space-between', padding:'0.5rem'}}>
      <h2>Logo</h2>
      <Navlist/>
    </div>
  )
}

export default Navbar
