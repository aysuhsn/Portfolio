import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'

const Navbar = () => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', paddingTop:'1.5rem'}}>
        <Logo/>
        <Navlist/>
    </div>
  )
}

export default Navbar