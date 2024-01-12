import React from 'react'
import Buttons from './Buttons.js'
import Me from '../../assets/me2.png'
import SocialMedia from './ScialMediaIcon.js'
import './Header.css'
export default function Header() {
  return (
   <header id='home'>
    <div className="container header__container">
      <h5 data-aos='fade-up'>Hello I'm</h5>
      <h1 data-aos="fade-up">Saba Ali</h1>
<h5 className='text-light' data-aos='zoom-out'>Front end web developer</h5>
    <Buttons/>
    <a href="#about" className='scrollDown' data-aos="fade-down-left">Scroll Down</a>
    <div className="me">
   <img src={Me} alt="Developer" />
    </div>
    <SocialMedia/>
    </div>
   </header>
  )
}
