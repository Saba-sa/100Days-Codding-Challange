import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbble} from 'react-icons/fa'
function ScialMediaIcon() {
  return (
    <div className='header_social' data-aos="fade-down-right">
      <a href="/" target='_blank'><BsLinkedin/></a>
      <a href="/" target='_blank'><FaGithub/></a>
      <a href="/" target='_blank'><FaDribbble/></a>
    </div>
  )
}

export default ScialMediaIcon
