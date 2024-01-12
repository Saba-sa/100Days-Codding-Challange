import React from 'react'
import Cv from '../../assets/Cv.pdf'
export default function Buttons() {
  return (
    <div className='Btns'>
      <a href={Cv} target='blank' download className='btn'  data-aos='flip-left'>Download Cv</a>
      <a href="#contact" className='btn btn-primary'  data-aos='flip-right'>Let's Talk</a>
    </div>
  )
}
