import React from 'react'
import { register } from '../db.js'

export default function Register() {
  return (
    <section className="py-2" id="register">
      <div className="text-center">
        <a
          href={register.url}
          className="px-12 py-3 rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:to-red-600 duration-300 text-white transform hover:scale-105"
          target="_blank"
          rel="noreferrer"
        >
          {register.title}
        </a>
      </div>
    </section>
  )
}
