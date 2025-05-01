import React from 'react'
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import Wrapper from '../wrapper/Wrapper'
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar = () => {
  return (
    <div className="d-flex justify-content-between p-3 border-bottom container">
      <Logo />
      <Navlist />
      <Wrapper />
    </div>
  )
}

export default Navbar