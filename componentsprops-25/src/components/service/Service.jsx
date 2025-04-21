import React from 'react'

const Service = ({icon, title, desc}) => {
  return (
    <div>
        {icon}
        <h3 style={{color:'#212529', fontSize:'2rem'}}>{title}</h3>
        <p style={{fontSize:'1.3rem', lineHeight:'2rem', color:'#505050'}}>{desc}</p>
    </div>
  )
}

export default Service