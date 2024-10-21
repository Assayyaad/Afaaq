import React from 'react'
import { contact } from '../db.js'
import { BsTelegram, BsWhatsapp } from 'react-icons/bs'

export default function Contact() {
  return (
    <section className="py-12" id="contact">
      <div className="container">
        <header className="flow-content--m text-center mb-8" data-aos="zoom-in" data-aos-delay="100">
          <h2 className="text-2xl font-bold flex items-center gap-4 justify-center">{contact.title}</h2>
          <p className="text-md">{contact.desc}</p>
        </header>
        <div className="flex justify-center items-center gap-4">
          <a href={contact.telegram} target="_blank" rel="noopener noreferrer">
            <BsTelegram size={120} />
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={120} />
          </a>
        </div>
      </div>
    </section>
  )
}
