import React from 'react'
import { desc } from '../db.js'

export default function Hero() {
  return (
    <section className="hero grid items-center justify-center">
      <div className="container text-white">
        <header className="flow-content--m text-center">
          <h1 className="title font-bold text-4xl text-center" data-aos="fade-right" data-aos-delay="100">
            {desc.title}
          </h1>
          <h2 className="title font-bold text-2xl text-center" data-aos="fade-right" data-aos-delay="100">
            {desc.bio}
          </h2>
          <br />
          {desc.text.map((text, i) => (
            <p key={i} className="max-w-[600px] mx-auto" data-aos="fade-left" data-aos-delay={200 + i * 100}>
              {text}
            </p>
          ))}
        </header>
      </div>
    </section>
  )
}
