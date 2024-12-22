import React, { useEffect } from 'react'
import AOS from 'aos'
import Countdown from './components/Countdown.jsx'
import Services from './components/Services.jsx'
import Sponsors from './components/Sponsors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Table from './components/Table.jsx'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import { main } from './db.js'
import 'aos/dist/aos.css'

export default function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  document.title = main.name

  return (
    <>
      <Nav />
      <Hero />
      <Countdown />
      <Services />
      <Table />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  )
}
