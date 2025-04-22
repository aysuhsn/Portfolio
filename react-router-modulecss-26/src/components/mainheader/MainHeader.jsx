import React from 'react'
import style from './MainHeader.module.css'

const MainHeader = () => {

  return (
    <div className={style.headercontent}>
    <h1 className={style.maintext}>Present your business in a whole new way</h1>
    <p className={style.text}>Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit!</p>
    <div className={style.buttons}>
    <button className={style.btn1}>Get Started</button>
    <button className={style.btn2}>Learn More</button>
    </div>
  </div>
  )
}

export default MainHeader