import React from 'react'
import ServiceCard from './ServiceCard.jsx'
import { spon } from '../db.js'

export default function Sponsors() {
  return (
    <section className="py-12" id="sponsors">
      <div className="container">
        <header className="flow-content--s mb-8" data-aos="zoom-in" data-aos-delay="100">
          <h2 className="font-bold text-4xl text-center">{spon.title}</h2>
          <p className="max-w-[500px] mx-auto">{spon.desc}</p>
        </header>
        <div className="cards-wrapper grid md:grid-cols-3 items-center gap-4 justify-center md:justify-start">
          {spon.arr.map((item, i) =>
            item.url ? (
              <a
                className="hover:bg-cyan-200 duration-100"
                href={item.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ServiceCard key={i} img={item.img} />
              </a>
            ) : (
              <ServiceCard key={i} img={item.img} />
            )
          )}
        </div>
      </div>
    </section>
  )
}
