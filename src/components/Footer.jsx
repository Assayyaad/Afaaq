import React from 'react'
import { main, nav, footer } from '../db.js'

export default function Footer() {
  return (
    <footer className="bg-[#222] text-white py-12">
      <div className="container">
        <div className="container flex md:flex-row flex-col items-center justify-between">
          <a href="#" className="text-2xl font-bold mb-8 md:mb-0" data-aos="fade-left" data-aos-delay="200">
            {main.name}
          </a>
          <ul
            className="flex md:flex-row flex-col items-center gap-4 justify-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <li>
              <a href="#" className="duration-300 hover:text-cyan-400">
                {nav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="duration-300 hover:text-cyan-400">
                {nav.services}
              </a>
            </li>
            <li>
              <a href="#table" className="duration-300 hover:text-cyan-400">
                {nav.table}
              </a>
            </li>
            <li>
              <a href="#sponsors" className="duration-300 hover:text-cyan-400">
                {nav.sponsors}
              </a>
            </li>
            <li>
              <a href="#contact" className="duration-300 hover:text-cyan-400">
                {nav.contact}
              </a>
            </li>
          </ul>
        </div>
        <ul
          className="mt-4 flex flex-col items-center md:items-start gap-4 md:gap-2"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <li className="flex items-center gap-2">
            <span>{footer.organizer.intro}: </span>
            <a
              href={footer.organizer.url}
              className="text-lg text-cyan-400 duration-300 hover:text-yellow-400"
              target="_blank"
            >
              {footer.organizer.name}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span>{footer.dev.intro}: </span>
            <a
              href={footer.dev.url}
              className="text-lg text-cyan-400 duration-300 hover:text-yellow-400"
              target="_blank"
            >
              {footer.dev.name}
            </a>
          </li>
          <li className="flex items-center gap-2">
            <span>{footer.source.intro}: </span>
            <a
              href={footer.source.url}
              className="text-lg text-cyan-400 duration-300 hover:text-yellow-400"
              target="_blank"
            >
              {footer.source.name}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
