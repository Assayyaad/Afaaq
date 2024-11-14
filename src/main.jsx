import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Cert from './Cert.jsx'
import './index.css'

/** @type {HTMLDivElement} */ // @ts-expect-error
const root = document.getElementById('root')

createRoot(root).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cert" element={<Cert />} />
        <Route path="/cert/:id" element={<Cert />} />
      </Routes>
    </Router>
  </StrictMode>
)
