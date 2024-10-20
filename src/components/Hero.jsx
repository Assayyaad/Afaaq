import React from 'react'
import { desc } from '../db.js'

export default function Hero() {
  return (
    <section className="hero grid items-center justify-center">
      <div className="container text-white">
        <header className="flow-content--m">
          <h1 className="title font-bold text-4xl text-center" data-aos="fade-right" data-aos-delay="300">
            {desc.title}
          </h1>
          <p className="max-w-[450px] mx-auto" data-aos="fade-left" data-aos-delay="500">
            {desc.text}
          </p>
        </header>
      </div>
    </section>
  )
}
