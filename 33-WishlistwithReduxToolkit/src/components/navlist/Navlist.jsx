import React from 'react'
import { NavLink } from 'react-router-dom'

const Navlist = () => {
  return (
    <div className="d-flex gap-3">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  )
}

export default Navlist