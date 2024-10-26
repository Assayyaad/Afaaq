import React, { useState, useEffect } from 'react'
import { countDown } from '../db'

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({})
  const [isTimeUp, setIsTimeUp] = useState(false)

  useEffect(() => {
    if (!targetDate) return
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft(targetDate, setIsTimeUp)), 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  const timeComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <div
      key={interval}
      className="w-24 h-24 flex flex-col items-center justify-center m-2 bg-white rounded-lg shadow-md"
    >
      <div className="text-4xl font-bold text-gray-800 py-2">{value}</div>
      <div className="text-sm text-gray-500">{interval}</div>
    </div>
  ))

  return (
    <div className="flex flex-wrap justify-center items-center p-4 rounded-xl">
      {!isTimeUp ? (
        timeComponents
      ) : (
        <div className="animate-bounce">
          <span className="text-4xl text-red-600 font-bold">{countDown.msg}</span>
        </div>
      )}
    </div>
  )
}

/**
 * @param {Date} targetDate
 * @param {Function} setIsTimeUp
 */
function calculateTimeLeft(targetDate, setIsTimeUp) {
  const diff = +targetDate - +new Date()
  let newTimeLeft = {}

  if (diff > 0) {
    newTimeLeft = {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60)
    }
  } else setIsTimeUp(true)

  return newTimeLeft
}
