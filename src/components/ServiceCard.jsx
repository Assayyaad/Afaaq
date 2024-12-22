import React from 'react'

/**
 * @param {ServiceCardProps} props
 * @returns
 */
export default function ServiceCard({ img, title, desc }) {
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
