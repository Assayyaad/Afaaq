/** @import { CertImage } from './db.js' */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JSZip from 'jszip'
import Certificates from './components/Certificates.jsx'
import Certificate from './components/Certificate.jsx'
import Search from './components/Search.jsx'
import { parseId } from './util.js'

export default function Cert() {
  const { id } = useParams()
  /** @type {[CertImage, React.Dispatch<React.SetStateAction<CertImage>>]} */
  const [images, setImages] = useState({})
  /** @type {[boolean, React.Dispatch<React.SetStateAction<boolean>>]} */
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadCerts() {
      try {
        const res = await fetch('/certs.zip')
        if (!res.ok) throw new Error(`Failed to fetch certs.zip: ${res.statusText}`)

        const zipData = await res.arrayBuffer()
        const zip = await JSZip.loadAsync(zipData)
        /** @type {CertImage} */
        const imageFiles = {}

        // Process PNG files within the ZIP
        const filePromises = Object.keys(zip.files)
          .filter((fileName) => fileName.endsWith('.png'))
          .map(async (fileName) => {
            const fileBlob = await zip.file(fileName)?.async('blob')
            if (fileBlob) imageFiles[fileName] = URL.createObjectURL(fileBlob)
          })

        await Promise.all(filePromises)
        setImages(imageFiles)
      } catch (error) {
        console.error('Error loading certs.zip:', error)
      }
      setLoading(false)
    }

    loadCerts()
  }, [])

  return (
    <div className="container text-center">
      {loading ? (
        <h1 className="title font-bold text-4xl text-center mt-10">جاري التحميل...</h1>
      ) : id ? (
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
