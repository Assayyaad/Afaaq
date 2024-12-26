import React from 'react'
import { contact } from '../db.js'
import { BsSignal, BsTelegram, BsWhatsapp } from 'react-icons/bs'

export default function Contact() {
  return (
    <section className="py-12" id="contact">
      <div className="container">
        <header className="flow-content--m text-center mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-4 justify-center">{contact.title}</h2>
          <p className="text-md">{contact.desc}</p>
        </header>
        <ul className="flex justify-center items-center gap-4 flex-col md:flex-row">
          <li key="si">
            <a
              href={contact.signal}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 duration-300"
            >
              <BsSignal size={120} />
            </a>
          </li>
          <li key="t">
            <a
              href={contact.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-500 duration-300"
            >
              <BsTelegram size={120} />
            </a>
          </li>
          <li key="wa">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 duration-300"
            >
              <BsWhatsapp size={120} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
