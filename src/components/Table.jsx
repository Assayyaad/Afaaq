import React from 'react'
import { table } from '../db.js'

export default function Table() {
  return (
    <section className="py-6" id="table">
      <div className="container">
        <header className="mb-12 flow-content--s">
          <h2 className="text-4xl font-bold text-center">{table.title}</h2>
        </header>
        <div className="cards-wrapper py-6">
          <div className="wrapper flow-content--m">{table.arr.map((item, i) => TableCard0(item, i))}</div>
        </div>
      </div>
    </section>
  )
}

/**
 * @param {object} item
 * @param {number} i
 */
function TableCard0(item, i) {
  const [first, second] = item

  return (
    <div key={i} className="">
      <header className="flow-content--s mb-4">
        <h2 className="font-bold text-2xl">{`${table.start + i} أكتوبر 2024 - ${table.weekDays[i]}`}</h2>
      </header>
      <div className="wrapper grid md:grid-cols-2 gap-4">
        <TableCard order={1} data={first} />
        <TableCard order={2} data={second} />
      </div>
    </div>
  )
}
/**
 * @param {TableCardProps} props
 */
function TableCard({ order, data }) {
  return (
    <div
      className="table-card shadow-md rounded-md p-6 max-w-[560px] flow-content--s relative group"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="wrapper flex items-center gap-4">
        <div className="badge flex items-center gap-4 justify-between rounded-md shadow-md bg-black text-white px-4 py-1">
          <span>{data.time || (order === 1 ? '11:30 - 1:00 ظهراً' : '1:30 - 3:00 ظهراً')}</span>
        </div>
        {data.femaleOnly && (
          <div className="badge flex items-center gap-4 justify-between rounded-md shadow-md bg-[#ff3333] text-white px-4 py-1">
            <span>للإناث فقط</span>
          </div>
        )}
      </div>
      <div className="wrapper flex items-center gap-4">
        <span className="font-bold text-lg">المحاضر:</span>
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
