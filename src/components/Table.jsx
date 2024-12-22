import React from 'react'
import TableCard from './TableCard.jsx'
import { table } from '../db.js'

export default function Table() {
  return (
    <section className="py-12" id="table">
      <div className="container">
        <header className="mb-12 flow-content--s" data-aos="zoom-in" data-aos-delay="100">
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
      <header className="flow-content--s mb-4" data-aos="zoom-in" data-aos-delay="200">
        <h2 className="font-bold text-2xl">{`${table.start + i} أكتوبر 2024 - ${table.weekDays[i]}`}</h2>
      </header>
      <div className="wrapper grid md:grid-cols-2 gap-4">
        <TableCard order={1} data={first} />
        <TableCard order={2} data={second} />
      </div>
    </div>
  )
}
