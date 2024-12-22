import React, { useState, useEffect, useRef } from 'react'
import { FaCopy } from 'react-icons/fa'
import QRCode from 'qrcode'
import JSZip from 'jszip'
import { copyToClipboard, parseId, qrConfig, idToPos } from '../util.js'

/**
 * @param {{ id: string, images:[] }} props
 */
export default function Certificates({ id, images }) {
  /** @type {[string[], React.Dispatch<React.SetStateAction<string[]>>]} */ // @ts-expect-error
  const [allImages, setAllImages] = useState([])
  /** @type {React.MutableRefObject<(HTMLCanvasElement|null)[]>} */
  const canvasRefs = useRef([])

  useEffect(() => {
    if (id) {
      const { count, type, lec, aud } = parseId(id)
      const folderPath = `/public/certs/${count}/${type}/${aud ? lec : ''}`

      const imagePaths = Object.keys(images).filter((path) => path.startsWith(folderPath))
      Promise.all(imagePaths.map((path) => images[path]())).then((modules) =>
        setAllImages(modules.map((module) => module.default))
      )
    }
  }, [id, images])

  /**
   * @param {string} src
   * @param {number} index
   * @returns {Promise<any>}
   */
  async function drawQRCodeOnImage(src, index) {
    const canvas = canvasRefs.current[index]
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const img = new Image()
    img.src = src

    return new Promise((resolve) => {
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        const certId = `${id}-${(index + 1).toString().padStart(3, '0')}`
        const certUrl = `https://afaaq.assayyaad.pro/cert/${certId}`
        QRCode.toDataURL(certUrl, qrConfig, (err, url) => {
          if (err) {
            console.error(err)
            resolve(null)
          } else {
            const qrCode = new Image()
            qrCode.src = url
            qrCode.onload = () => {
              const [w, h] = idToPos(certId, canvas.width, canvas.height)
              ctx.drawImage(qrCode, w, h, qrConfig.width, qrConfig.width)
              resolve(canvas.toDataURL('image/png'))
            }
          }
        })
      }
    })
  }

  async function downloadImages() {
    const zip = new JSZip()
    const promises = allImages.map((src, index) => drawQRCodeOnImage(src, index))

    const images = await Promise.all(promises)
    images.forEach((dataUrl, index) => {
      if (dataUrl) {
        const certId = (index + 1).toString().padStart(3, '0')
        zip.file(`${certId}.png`, dataUrl.split(',')[1], { base64: true })
      }
    })

    const content = await zip.generateAsync({ type: 'blob' })
    if (content) {
      const link = document.createElement('a')
      link.href = URL.createObjectURL(content)
      link.download = `${id}.zip`
      link.click()
    }
  }

  return (
    <div className="container text-center">
      {allImages.length > 0 ? (
        <>
          <h1>
            معرّف شهادات الحضور: <p dir="ltr">{id}</p>
            <FaCopy onClick={() => copyToClipboard(id)} className="inline-block ml-2 cursor-pointer text-green-500" />
          </h1>
          <button onClick={downloadImages} className="px-4 py-2 bg-blue-500 text-white rounded-md mt-1 mb-2">
            تحميل الشهادات
          </button>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-4">
            {allImages.map((src, i) => {
              const num = (i + 1).toString().padStart(3, '0')
              const newId = `${id}-${num}`
              return (
                <div key={num} className="block">
                  <canvas ref={(el) => (canvasRefs.current[i] = el)} style={{ display: 'none' }} />
                  <a href={`/cert/${newId}`}>
                    <img src={src} className="max-w-full max-h-full cursor-pointer" alt={`الشهادة ${num}`} />
                  </a>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <p className="text-center">لا توجد شهادة، تحقق من صحة المعرّف</p>
      )}
    </div>
  )
}
