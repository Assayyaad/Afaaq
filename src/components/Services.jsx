import React from 'react'
import { serv } from '../db.js'

export default function Services() {
  return (
    <section className="py-6" id="services">
      <div className="container">
        <header className="text-center mb-12">
          <h2 className="title font-bold text-4xl">{serv.title}</h2>
        </header>
        <div className="wrapper grid md:grid-cols-2 gap-4 justify-center md:justify-start">
          {serv.arr.map(({ img, title, desc }, i) => (
            <ServiceCard key={i} img={img} title={title} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * @param {ServiceCardProps} props
 * @returns
 */
function ServiceCard({ img, title, desc }) {
  return (
    <div
      className="card shadow-md p-6 flow-content--m max-w-[550px] group text-center"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="img-wrapper">
        <img src={img} alt={'صورة الميزة'} className="w-[150px] h-[150px] mx-auto" />
      </div>
      <div className="">
        <h2 className="title max-w-[300px] text-center mx-auto font-bold text-2xl">{title}</h2>
        <p className="description max-w-[450px]">{desc}</p>
      </div>
    </div>
  )
}

/**
 * @typedef {object} ServiceCardProps
 * @prop {any} img
 * @prop {string} [title]
 * @prop {string} [desc]
 * @prop {string} [url]
 */
