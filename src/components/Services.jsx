import React from 'react'
import ServiceCard from './ServiceCard.jsx'
import { serv } from '../db.js'

export default function Services() {
  return (
    <section className="py-12 " id="services">
      <div className="container">
        <header className="text-center mb-12" data-aos="zoom-in" data-aos-delay="100">
          <h2 className="title font-bold text-4xl">{serv.title}</h2>
        </header>
        <div className="wrapper grid md:grid-cols-3 gap-4 justify-center md:justify-start">
          {serv.arr.map(({ img, title, desc }, i) => (
            <ServiceCard key={i} img={img} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  )
}
