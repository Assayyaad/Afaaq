import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { main, nav as dbNav } from '../db.js'

export default function Nav() {
  const [nav, setNav] = useState(false)
  const isDesktop = window.innerWidth >= 768

  return (
    <nav className="py-12 text-white absolute top-0 left-0 right-0 " data-aos={isDesktop && 'zoom-in'}>
      <div className="container flex items-center justify-between" dir="ltr">
        <ul className="md:flex items-start gap-4 f hidden">
          <li>
            <a href="#contact" className="duration-300 hover:text-cyan-400">
              {dbNav.contact}
            </a>
          </li>
          <li>
            <a href="#sponsors" className="duration-300 hover:text-cyan-400">
              {dbNav.sponsors}
            </a>
          </li>
          <li>
            <a href="#table" className="duration-300 hover:text-cyan-400">
              {dbNav.table}
            </a>
          </li>
          <li>
            <a href="#services" className="duration-300 hover:text-cyan-400">
              {dbNav.services}
            </a>
          </li>
          <li>
            <a href="#" className="duration-300 hover:text-cyan-400">
              {dbNav.home}
            </a>
          </li>
        </ul>

        <div className="mobile-nav md:hidden block">
          <button role="navigation">
            <GiHamburgerMenu size={25} onClick={() => setNav(!nav)} />
          </button>
          <ul
            className={
              nav
                ? 'fixed top-0 left-0 bottom-0 w-[80%] z-[999] text-white flex flex-col items-center justify-center bg-black gap-8 translate-x-0 duration-300'
                : 'fixed top-0 left-0 bottom-0 w-[80%] z-[999] text-white flex flex-col items-center justify-center bg-black gap-8 translate-x-[-100%] duration-300'
            }
          >
            <li>
              <a href="#" className="text-4xl py-2" onClick={() => setNav(!nav)}>
                {dbNav.home}
              </a>
            </li>
            <li>
              <a href="#services" className="text-4xl py-2" onClick={() => setNav(!nav)}>
                {dbNav.services}
              </a>
            </li>
            <li>
              <a href="#table" className="text-4xl py-2" onClick={() => setNav(!nav)}>
                {dbNav.table}
              </a>
            </li>
            <li>
              <a href="#sponsors" className="text-4xl py-2" onClick={() => setNav(!nav)}>
                {dbNav.sponsors}
              </a>
            </li>
            <li>
              <a href="#contact" className="text-4xl py-2" onClick={() => setNav(!nav)}>
                {dbNav.contact}
              </a>
            </li>
            <button>
              <IoMdClose size={35} className="absolute top-10 left-10 z-[1000]" onClick={() => setNav(!nav)} />
            </button>
          </ul>
        </div>
        <a href="#" className="logo font-bold text-3xl">
          {main.name}
        </a>
      </div>
    </nav>
  )
}
