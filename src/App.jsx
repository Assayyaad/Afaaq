import React, { useEffect } from 'react'
import AOS from 'aos'
import CountDownSection from './components/CountDownSection.jsx'
import Services from './components/Services.jsx'
import Sponsors from './components/Sponsors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Table from './components/Table.jsx'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import 'aos/dist/aos.css'
import { main } from './db.js'

export default function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  document.title = main.name

  return (
    <>
      <Nav />
      <Hero />
      <CountDownSection />
      <Services />
      <Table />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  )
}
