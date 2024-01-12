import React, { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-scroll'
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {BsMagic,BsFillPeopleFill} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import './Nav.css'
export default function Nav() {
  const [classNameActive , setClassNameActive]=useState('#')
 
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY>750 && setClassNameActive('')
    });
  }, []);
  return (
   <nav>
    <Link to="home"  spy={true} smooth={true} offset={-100} duration={500} className={classNameActive==='#'?'active':''}><AiOutlineHome/></Link>
    <Link to="about" spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{setClassNameActive('#about')}} className={classNameActive==='#about'?'active':''}><AiOutlineUser/></Link>
    <Link to="experience" spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{setClassNameActive('#experience')}} className={classNameActive==='#experience'?'active':''}><BiBook/></Link>
    <Link to="services" spy={true} smooth={true} offset={-100} duration={500}  onClick={()=>{setClassNameActive('#services')}} className={classNameActive==='#services'?'active':''}><RiServiceLine/></Link>
    <Link to="potfolio" spy={true} smooth={true} offset={-150} duration={500}  onClick={()=>{setClassNameActive('#potfolio')}} className={classNameActive==='#potfolio'?'active':''}><BiMessageSquareDetail/></Link>
    <Link to="testimonials" spy={true} smooth={true} offset={-150} duration={500}  onClick={()=>{setClassNameActive('#testimonials')}} className={classNameActive==='#testimonials'?'active':''}><BsMagic/></Link>
    <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}  onClick={()=>{setClassNameActive('#contact')}} className={classNameActive==='#contact'?'active':''}><BsFillPeopleFill/></Link>
   </nav>
  )
}
