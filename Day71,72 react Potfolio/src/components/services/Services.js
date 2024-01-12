import React from 'react'
import { BiCheck } from 'react-icons/bi'
import './Services.css'
export default function Services() {
  return (
    <section id='services'>
     <h5>What I Offer</h5>
     <h2>Services</h2>
     <div className="container services_container">
      <article className="service" data-aos="zoom-in-right">
        <div className="service_head">
          <h3>UI/UX Design</h3>
        </div>
        <ul className="service_list">

          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
        </ul>
      </article>
      <article className="service" data-aos="zoom-in-right">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>
        <ul className="service_list">

          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
        </ul>
      </article>
      <article className="service" data-aos="zoom-in-right">
        <div className="service_head">
          <h3>Web Design</h3>
        </div>
        <ul className="service_list">
        
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
          <li><BiCheck className='service_list_icon'/><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit Iure?</p></li>
        </ul>
      </article>
     </div>
    </section>
  )
}
