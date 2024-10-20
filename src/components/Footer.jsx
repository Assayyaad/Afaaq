import React from 'react'
import { main, nav } from '../db.js'

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-12">
      <div className="container">
        <div className="container flex md:flex-row flex-col items-center justify-between">
          <a href="#" className="text-2xl font-bold mb-8 md:mb-0">
            {main.name}
          </a>
          <ul className="flex md:flex-row flex-col items-center gap-4 justify-center">
            <li>
              <a href="#">{nav.home}</a>
            </li>
            <li>
              <a href="#services">{nav.services}</a>
            </li>
            <li>
              <a href="#table">{nav.table}</a>
            </li>
            <li>
              <a href="#sponsors">{nav.sponsors}</a>
            </li>
            <li>
              <a href="#contact">{nav.contact}</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
