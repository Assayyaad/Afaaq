import React from 'react'
import Countdown from './CountDown.jsx'
import { countDown } from '../db.js'

export default function CountDownSection() {
  // Set the target date to 26th October at 11 AM
  const targetDate = new Date('2024-10-26T11:00:00')

  return (
    <section className="py-8 bg-gray-200">
      <div className="container flow-content--m">
        <header>
          <h2 className="font-bold text-4xl text-center">{countDown.title}</h2>
        </header>
        <div dir="ltr">
          <Countdown targetDate={targetDate} />
        </div>
        <div className="text-center">
          <a href={countDown.maps} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">
            {countDown.location.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </a>
        </div>
      </div>
    </section>
  )
}
