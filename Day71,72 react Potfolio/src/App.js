import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav.js'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/potfolio/Portfolio.js'
import Testimonial from './components/testimonials/Testimonials.js'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer.js'

export default function App() {
  return (
    <div>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
<Portfolio/>
<Testimonial/>
    <Contact/>
<Footer/>
    </div>
  )
}
