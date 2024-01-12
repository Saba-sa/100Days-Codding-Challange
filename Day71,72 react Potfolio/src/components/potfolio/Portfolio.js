import React, { useState } from 'react'
import Data from './Data.js'
import './Portfolio.css'


export default function Portfolio() {
let [data]=useState(Data)
  return (
    <section id='potfolio'>
      <h5>My Recent Work</h5>
      <h2>Potfolio</h2>   
   <div className="container potfolio_container">
    {
      data.map(({id,image,title,github,demo})=>{
      return (
        <article className="potfolio_item" id={id} data-aos="zoom-out-down">
          <div className="potfolio_item_img">
<img src={image} alt='potfolio no' />
          </div>
          <h3>{title}</h3>
    <a href={github} className='btn' target='blank'>GitHub</a>
    <a href={demo} className='btn btn-primary' target='blank'>Live Demo</a>
        </article>
      )
    })}
      
        
      </div>
    </section>
  )
}
