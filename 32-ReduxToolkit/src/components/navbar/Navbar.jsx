import React from 'react';
import Logo from '../logo/Logo'
import Navlist from '../navlist/Navlist'
import Wrapper from '../wrapper/Wrapper'


const Navbar = () => {    


  return (
       <div className='navbar container' style={{display:'flex', padding:'0.5rem 0', alignItems:'center',  justifyContent:'space-between', gap:'2rem'}}>
       <Logo/>
       <Navlist/>
       <Wrapper/>
       </div>

  );
};

export default Navbar;