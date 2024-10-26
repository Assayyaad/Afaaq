import React from 'react'
import ServiceCard from './ServiceCard.jsx'
import { spon } from '../db.js'

export default function Sponsors() {
  return (
    <section className="py-12" id="sponsors">
      <div className="container">
        <header className="flow-content--s mb-8" data-aos="zoom-in" data-aos-delay="100">
          <h2 className="font-bold text-4xl text-center">{spon.title}</h2>
          <p className="max-w-[500px] mx-auto text-center">{spon.desc}</p>
        </header>
        <ul className="cards-wrapper grid md:grid-cols-3 items-center gap-4 justify-center md:justify-start py-4">
          {spon.arr.map((item, i) => (
            <li className="w-fit overflow-hidden py-2" data-aos="zoom-in" data-aos-delay="300">
              <a
                className="duration-300  hover:rotate-6"
                href={item.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  key={i}
                  src={item.img}
                  className={item.height ? 'w-[200px] h-[150px] object-contain' : 'w-[200px] h-[200px] object-contain'}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
