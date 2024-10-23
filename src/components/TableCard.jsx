import React from 'react'

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
        <div className="badge flex items-center gap-4 justify-between rounded-md shadow-md bg-black text-white px-4 py-1">
          <span>{data.time || order === 1 ? '11:30 - 1:00 ظهراً' : '1:30 - 3:00 ظهراً'}</span>
        </div>
        {data.femaleOnly && (
          <div className="badge flex items-center gap-4 justify-between rounded-md shadow-md bg-[#ff3333] text-white px-4 py-1">
            <span>للإناث فقط</span>
          </div>
        )}
      </div>
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">الاسم:</span>
        <span>{data.name}</span>
      </div>
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">العنوان:</span>
        <span>{data.title}</span>
      </div>
      <div className="description max-w-[450px]">{data.desc}</div>
    </div>
  )
}

/**
 * @typedef {object} TableCardProps
 * @prop {number} order
 * @prop {object} data
 * @prop {number} data.title
 * @prop {number} data.name
 * @prop {number} data.desc
 * @prop {number} [data.femaleOnly]
 * @prop {number} [data.time]
 */
