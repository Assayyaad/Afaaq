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
        <img src={img} alt={'صورة الخدمة'} className="w-[150px] h-[150px] rounded-full mx-auto" />
      </div>
      {/* TODO: center the title */}
      {title && (
        <h2>
          <b>
          <p className="title max-w-[300px]">{title}</p>
          </b>
        </h2>
      )}
      {desc && <p className="description max-w-[450px]">{desc}</p>}
    </div>
  )
}
