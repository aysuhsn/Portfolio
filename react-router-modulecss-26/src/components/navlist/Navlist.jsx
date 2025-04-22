import React from 'react'
import style from './Navlist.module.css';
import { Link } from 'react-router-dom';
const Navlist = () => {
  return (
    <>
    <ul className={style.navlist}>
        <li><Link to="/" className={style.link}>Home</Link></li>
        <li><Link to="/about" className={style.link}>About</Link></li>
        <li><Link to="/contact" className={style.link}>Contact</Link></li>
        <li><Link to="/service" className={style.link}>Services</Link></li>
    </ul>
    </>
    
  )
}

export default Navlist