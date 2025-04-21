import React from 'react'
import './footer.css'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";



const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright © Your Website 2023</p>
        <div className="icon">
        <AiFillTwitterCircle className='twitter' style={{width:'2.4rem', height:'2.4rem'}}/>
        <BsFacebook className='facebook' />
        <ImLinkedin className='linkedin' style={{borderRadius:'50%'}} />
        </div>
        <div className="right">
            <p>Privacy Policy</p>
            <p>Terms of Use</p>
        </div>
    </div>
  )
}

export default Footer