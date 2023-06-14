import React from 'react';
import "./Navbar.scss"
import Logo from "../../assets/images/logo.svg"
const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className='nav-right'>
        <div className='Logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <ul>
          <li>Features</li>
          <li>Company</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className='nav-right'>
        <button className='btn'>Login</button>
        <button className='btn btn-register'>Register</button>
      </div>
    </div>
  )
}

export default Navbar