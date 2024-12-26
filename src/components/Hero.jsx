import React from 'react'
import { desc } from '../db.js'

export default function Hero() {
  return (
    <section className="hero grid items-center justify-center">
      <div className="container text-white">
        <header className="flow-content--m text-center">
          <h1 className="title font-bold text-4xl text-center">{desc.title}</h1>
          <h2 className="title font-bold text-2xl text-center">{desc.bio}</h2>
          <br />
          {desc.text.map((text, i) => (
            <p key={i} className="max-w-[600px] mx-auto">
              {text}
            </p>
          ))}
        </header>
      </div>
    </section>
  )
}
