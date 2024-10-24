import React from 'react'
import { desc } from '../db.js'

export default function Hero() {
  return (
    <section className="hero grid items-center justify-center">
      <div className="container text-white">
        <header className="flow-content--m">
          <h1 className="title font-bold text-4xl text-center" data-aos="fade-right" data-aos-delay="100">
            {desc.title}
          </h1>
          <h2 className="title font-bold text-l text-center" data-aos="fade-right" data-aos-delay="100">
            {desc.bio}
          </h2>
          {desc.text.map((text, i) => (
            <p key={i} className="max-w-[600px] mx-auto" data-aos="fade-left" data-aos-delay={200 + i * 100}>
              {text}
            </p>
          ))}
          <div className="text-center">
            <a href={desc.maps} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
              {desc.location.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </a>
          </div>
        </header>
      </div>
    </section>
  )
}
