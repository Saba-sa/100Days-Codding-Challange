import React from 'react'
import Image from '../../assets/me1.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import './About.css'
export default function About() {
  return (
    <section id='about'>
   <h5>Get To Know</h5>
   <h2>About Me</h2>
<div className="container about_container">
<div className="about_me">
  <div className="about_me_img"  data-aos='fade-left'>
<img src={Image} alt="of the developer" />
  </div>
</div>
<div className="about_Content"  data-aos='fade-right'>
  <div className="about_cards">
    <article className='about_card'  data-aos='zoom-in-up'>
    <FaAward className='about_icon'/>
<h5>Experience</h5>
<small>3+ Years Working</small>
    </article>
    <article className='about_card' data-aos='zoom-in-up'>
    <FiUsers className='about_icon'/>
<h5>Clients</h5>
<small>400+ Worldwide</small>
    </article>
    <article className='about_card' data-aos='zoom-in-up'>
    <VscFolderLibrary className='about_icon'/>
<h5>Experience</h5>
<small>100+ Projects Complet</small>
    </article>
  </div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, nisi mollitia molestiae eius dolore corporis ullam fugit sint consequatur eum iste error aliquid minima nobis aut numquam adipisci maxime rerum.</p>
<a href="#contact" className='btn btn-primary'>See</a>
</div>
</div>

    </section>
  )
}
