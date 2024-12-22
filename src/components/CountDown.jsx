import React, { useEffect, useState } from 'react'
import { FaExternalLinkAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Register from './Register.jsx'
import { countDown } from '../db.js'

const targetDate = new Date(countDown.date)

export default function CountDown() {
  /** @type {[DateObj | undefined, React.Dispatch<React.SetStateAction<DateObj | undefined>>]} */ // @ts-expect-error
  const [timeLeft, setTimeLeft] = useState(undefined)

  useEffect(() => {
    if (!targetDate) return
    const timer = setInterval(() => setTimeLeft(calcTimeLeft(targetDate)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section className="py-8">
      {!timeLeft ? (
        <div className="animate-bounce flex flex-wrap justify-center items-center">
          <span className="text-4xl text-red-600 font-bold py-2 block">{countDown.over}</span>
        </div>
      ) : (
        <div className="container flow-content--m">
          <header>
            <h2 className="font-bold text-4xl text-center">{countDown.title}</h2>
          </header>
          <RemainingTime timeLeft={timeLeft} />
          <Location />
          <Register />
        </div>
      )}
    </section>
  )
}

/**
 * @param {{timeLeft: DateObj}} props
 */
function RemainingTime({ timeLeft }) {
  return (
    <div className="flex flex-wrap justify-center items-center rounded-xl">
      {Object.entries(timeLeft).map(([interval, value]) => (
        <div
          id={interval}
          key={interval}
          className="w-24 h-24 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md"
        >
          <div className="text-4xl font-bold text-gray-800 py-2">{value}</div>
          <div className="text-sm text-gray-500">{interval.replace('_', '/')}</div>
        </div>
      ))}
    </div>
  )
}

/**
 * @param {{}} props
 */
function Location({}) {
  return (
    <div className="flex flex-col items-center pb-1 text-center justify-center">
      <a
        href={countDown.maps}
        className="p-4 rounded-lg shadow-md bg-[#fff] hover:bg-[#222] hover:text-white duration-300 text-black"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center justify-center gap-2">
          <FaExternalLinkAlt />
          {countDown.location}
        </div>
      </a>
    </div>
  )
}

/**
 * @param {Date} targetDate
 * @returns {DateObj | undefined}
 */
function calcTimeLeft(targetDate) {
  const diff = +targetDate - +new Date()

  if (diff > 0)
    return {
      ثواني_ثانية: Math.floor((diff / 1000) % 60),
      دقائق_دقيقة: Math.floor((diff / 1000 / 60) % 60),
      ساعات_ساعة: Math.floor((diff / (1000 * 60 * 60)) % 24),
      أيام_يوم: Math.floor(diff / (1000 * 60 * 60 * 24))
    }
}

/**
 * @typedef {object} DateObj
 * @property {number} أيام_يوم
 * @property {number} ساعات_ساعة
 * @property {number} دقائق_دقيقة
 * @property {number} ثواني_ثانية
 */
