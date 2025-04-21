import React from 'react'
import Navbar from '../navbar/Navbar'
import MainHeader from '../mainheader/MainHeader'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <Navbar/>
      <MainHeader/>
    </div>
  )
}

export default Header