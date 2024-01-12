import React from 'react'
import useWindowsize from '../../hooks/useWindowsize';
import {FaLaptop,FaTabletAlt,FaPhoneAlt} from 'react-icons/fa'
function Header({title}) {
  const {width}=useWindowsize();
  return (
    <header className='header flex'>
    <h1>{title}</h1>
    {
      width<768?
      <FaPhoneAlt/>:width<992?
    <FaTabletAlt/>:
    <FaLaptop/>
    }
    </header>
  )
}

export default Header
