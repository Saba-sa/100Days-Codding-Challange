import React from 'react'
import Data from './Data'
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css'


export default function Testimonials() {
console.log(Data);
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonial_container"
       modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      data-aos="fade-up"
     data-aos-duration="1000">

{
  Data.map((item)=>{
    return (
      <SwiperSlide className="testimonial client_avatar" id={item.id}>
      <img src={item.image} alt="avatar" />
      <h5 className='Client_name'>{item.name}</h5>
      <small className='Client_review'>
  {item.review}
      </small>
  </SwiperSlide>)
  })
}
</Swiper>

    </section>
  )
}
