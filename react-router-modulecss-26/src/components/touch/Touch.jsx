import React from 'react'
import style from './Touch.module.css'

const Touch = () => {
  return (
    <div className={style.touch}>
        <h2 style={{fontSize:'2rem'}}>Get in touch</h2>
        <p style={{fontSize:'1.3rem'}}>We'd love to hear from you</p>
        <input type="text" placeholder='Full name' />
        <input type="email" placeholder='Email address'/>
        <input type="tel" placeholder='Phone number'/>
        <textarea name="message" id="">Message</textarea>
        <button>Submit</button>
    </div>
  )
}

export default Touch