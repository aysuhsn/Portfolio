import React from 'react'
import Navbar from '../navbar/Navbar'
const Header = () => {
  return (
    <div style={{background:'#2D3748', color:'white', position:'fixed', zIndex:'999', width:'100%', top:'0', left:'0'}}>
      <Navbar/>
    </div>
  )
}

export default Header
