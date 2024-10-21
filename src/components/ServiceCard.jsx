import React from 'react'

/**
 * @param {object} props
 * @param {any} props.img
 * @param {string} [props.title]
 * @param {string} [props.desc]
 * @returns
 */
export default function ServiceCard({ img, title, desc }) {
  return (
    <div
      className="card shadow-md rounded-md p-6 flow-content--m max-w-[550px] group"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="img-wrapper">
        <img src={img} alt={'صورة الميزة'} className="w-[150px] h-[150px] rounded-full mx-auto" />
      </div>
      {title && (
        <b>
          <p className="title max-w-[300px] text-center">{title}</p>
        </b>
      )}
      {desc && <p className="description max-w-[450px]">{desc}</p>}
    </div>
  )
}
