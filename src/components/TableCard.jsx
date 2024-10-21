import React from 'react'
import { FaClock } from 'react-icons/fa'

/**
 * @param {TableCardProps} props
 */
export default function TableCard({ order, data }) {
  return (
    <div
      className="table-card shadow-md rounded-md p-6 max-w-[560px] flow-content--s relative group"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">الاسم :</span>
        <span>{data.name}</span>
      </div>
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">العنوان :</span>
        <span>{data.title}</span>
      </div>
      <div className="description max-w-[450px]">{data.desc}</div>
      <div className="badge flex items-center gap-4 justify-between rounded-md shadow-md bg-black text-white absolute left-5 top-5 px-4 py-1">
        <FaClock />
        <span>{data.time || order === 1 ? '11:30 - 1:00 ظهراً' : '1:30 - 3:00 ظهراً'}</span>
      </div>
    </div>
  )
}

/**
 * @typedef {object} TableCardProps
 * @param {number} order
 * @param {object} data
 */
