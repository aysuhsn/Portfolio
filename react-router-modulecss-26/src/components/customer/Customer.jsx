import React from 'react'

const customer = ({icon, desc, name}) => {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', marginBottom:'2rem', padding:'1rem', border:'1px solid #ccc', borderRadius:'5px'}}>
        <div style={{fontSize:'3rem', color:'blue',marginBottom:'4rem'}}>{icon}</div>
        <div>
        <p style={{width:'40rem', fontSize:'1.5rem'}}>{desc}</p>
        <h4 style={{color:'#6C757D', fontSize:'1.3rem'}}>{name}</h4>
        </div>
    </div>
  )
}

export default customer