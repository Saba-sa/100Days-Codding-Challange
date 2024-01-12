import React, { useRef, useState } from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from  'emailjs-com'
import './Contact.css'

export default function Contact() {
  const [badge,setBadge]=useState('')
  const [fail,setFail]=useState('')
  const form = useRef();  
   const sendEmail = (e) => {
     e.preventDefault();
     emailjs.sendForm('service_cg9nd28', 'template_b07ne0k', form.current, '5lrXuEcWOUAoAPjgQ')
       .then((result) => {
        setBadge('sucess')
         e.target.reset() 
         setTimeout(() => {
          setBadge('')
        }, 2000);
        }, (error) => {
        setFail('fail')
        setTimeout(() => {
          setFail('')
        }, 2000);});
     
      
        }
  return (
    <section id='contact'>
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
<div className="container contact_container">
    <div className='contact-options'>
      <article className="contact-option" data-aos="fade-down">
        <MdOutlineEmail className='contact-option-icon'/>
        <h4>Email</h4>
        <h5>Sabaali3201@gmail.com</h5>
        <a href="mailto:sabaali3201@gmail.com" target='blank'>Send a Message</a>
      </article>
      <article className="contact-option" data-aos="fade-down">
        <RiMessengerLine  className='contact-option-icon'/>
        <h4>Messenger</h4>
        <h5>Saba Ali</h5>
        <a href="https://messanger" target='blank'>Send a Message</a>
      </article>
      <article className="contact-option" data-aos="fade-down">
        <BsWhatsapp  className='contact-option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+92355553333</h5>
        <a href="https://api.whatsapp.com/send?phone=+923554813201" target='blank'>Send a Message</a>
      </article>
    </div>
    <form ref={form} onSubmit={sendEmail} v data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
<input type="text" name='name' placeholder='Your Full Name' required/>
    <input type="email" name="email" placeholder='Your Email' required/>
<textarea name="message" rows="10" placeholder='Your Message' required></textarea>
<button type="submit" className='btn btn-primary'>Send Message</button>
{badge==='sucess'?<p className="msg-instruct green">Message was send sucessfully</p>:<p className="msg-instruct"></p>}
{badge==='fail'?<p className="msg-instruct">Fail to send</p>:<p className="msg-instruct"></p>}
    </form>
    </div>
    </section>
  )
}
