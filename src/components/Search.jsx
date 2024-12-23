/** @import { CertImage } from '../db.js' */
import React, { useState } from 'react'
import Certificates from './Certificates.jsx'

/**
 * @param {{ images: CertImage }} props
 */
export default function Search({ images }) {
  /** @type {[string, React.Dispatch<React.SetStateAction<string>>]} */
  const [code, setCode] = useState('')

  return (
    <div className="container text-center">
      <h1 className="text-2xl font-bold mb-4">البحث عن الشهادات</h1>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.trim())}
        placeholder="أدخل الرمز"
        className="px-4 py-2 border rounded-md"
      />
      <div className="mt-4">
        {code.length === 4 ? (
          <Certificates key={code} id={`01-aud-${code}`} images={images} />
        ) : (
          <p>أدخل الرمز المكون من أربع خانات</p>
        )}
      </div>
    </div>
  )
}
