import React from 'react'
import { register } from '../db.js'

export default function Register() {
  return (
    <section className="py-2" id="register">
      <div className="text-center">
        <a
          href={register.url}
          className="hvr-sweep-to-left btn rounded-md !bg-[#222] text-white"
          target="_blank"
          rel="noreferrer"
        >
          {register.title}
        </a>
      </div>
    </section>
  )
}
