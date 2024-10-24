import React from 'react'
import { FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Countdown from './CountDown.jsx'
import Register from './Register.jsx'
import { countDown } from '../db.js'

export default function CountDownSection() {
  const targetDate = new Date(countDown.date)

  return (
    <section className="py-8 bg-gray-200">
      <div className="container flow-content--m">
        <header>
          <h2 className="font-bold text-4xl text-center">{countDown.title}</h2>
        </header>
        <div dir="ltr">
          <Countdown targetDate={targetDate} />
        </div>
        <div className="flex flex-col items-center text-center justify-center">
          <a
            href={countDown.maps}
            className="px-2 py-2 rounded-lg shadow-md bg-[#fff] hover:bg-[#ccc] duration-300 text-black"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex items-center justify-center gap-1 mb-2">
              <FaExternalLinkAlt />
              <FaMapMarkerAlt />
            </div>
            {countDown.location.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </a>
        </div>
        <Register />
      </div>
    </section>
  )
}
