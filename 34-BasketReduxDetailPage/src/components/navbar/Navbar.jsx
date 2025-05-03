import React from 'react'
import Navlist from '../navlist/Navlist'

const Navbar = () => {
  return (
    <div className='container'  style={{display:"flex", alignItems:'center', justifyContent:'space-between', padding:'1rem'}}>
      <h1>Logo</h1>
      <Navlist/>
    </div>
  )
}

export default Navbar
