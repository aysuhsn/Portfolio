import React from 'react'

const Title = ({icon, name, text, desc, right, style}) => {
  return (
    <div style={style}>
        <div style={{fontSize:'2rem', color:'white', width:'5rem', height:'5rem', border:'1px solid #007bff', background:'#007bff', padding:'1rem', borderRadius:'0.5rem', marginBottom:'1rem'}}>{icon}</div>
        <h2>{name}</h2>
        <p>{text}</p>
        <a>{desc}{right}</a>
    </div>
  )
}

export default Title