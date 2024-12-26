import React from 'react'
import Counter from './components/Counter.jsx'
import Services from './components/Services.jsx'
import Sponsors from './components/Sponsors.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import Nav from './components/Nav.jsx'
import { main } from './db.js'

export default function App() {
  document.title = main.name

  return (
    <>
      <Nav />
      <Hero />
      <Counter />
      <Services />
      <Sponsors />
      <Contact />
      <Footer />
    </>
  )
}
