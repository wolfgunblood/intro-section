import React, { useState } from 'react';
import "./Navbar.scss"
import Logo from "../../assets/images/logo.svg";
import Down from "../../assets/images/icon-arrow-down.svg"
import Up from "../../assets/images/icon-arrow-up.svg"
import DropdownComponent from '../Dropdown/DropdownComponent';
const Navbar = () => {
  const [drop1, setDrop1] = useState(false)
  const [drop2, setDrop2] = useState(false)

  // console.log(drop.one)
  // console.log(drop.two)

  return (
    <div className='nav-container'>
      <div className='nav-left'>
        <div className='Logo'>
          <img src={Logo} alt="Logo" />
        </div>
        <ul className='nav-list'>
          <li className='nav-item'>
            <button className='nav-item-btn' onClick={() => setDrop1(!drop1)}>
              Features
              <span>
                {!drop1 && <img src={Down} alt="Down" />}
                {drop1 && < img src={Down} alt="Down" /> }
              </span>
            </button>
            {drop1 && <DropdownComponent index={1} />}
          </li>
          <li className='nav-item'>
            <button className='nav-item-btn' onClick={() => setDrop2(!drop2)}>
              Company
              <span>
                {!drop2 && <img src={Down} alt="Down" />}
                {drop2 && < img src={Down} alt="Down" /> }
              </span>
            </button>
            {drop2 && <DropdownComponent index={2} />}
          </li>
          <li className='nav-item'>Careers</li>
          <li className='nav-item'>About</li>
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