import React from 'react'
import { useParams } from 'react-router-dom'
import Certificates from './components/Certificates.jsx'
import Certificate from './components/Certificate.jsx'
import Search from './components/Search.jsx'
import { parseId } from './util.js'

export default function Cert() {
  const { id } = useParams()

  // Use Vite's import.meta.glob to import all images
  // @ts-expect-error
  const images = import.meta.glob('/public/certs/**/*.png')

  return (
    <div className="container text-center">
      {id ? (
        parseId(id).num ? (
          <Certificate id={id} images={images} />
        ) : (
          <Certificates id={id} images={images} />
        )
      ) : (
        <Search images={images} />
      )}
    </div>
  )
}
