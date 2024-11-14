import React, { useState, useEffect, useRef } from 'react'
import { FaCopy } from 'react-icons/fa'
import QRCode from 'qrcode'
import { qrConfig, idToPos, parseId, copyToClipboard } from '../util.js'

/**
 * @param {{ id: string, images:[] }} props
 */
export default function Certificate({ id, images }) {
  /** @type {[string | undefined, React.Dispatch<React.SetStateAction<string>>]} */ // @ts-expect-error
  const [imgSrc, setImgSrc] = useState(undefined)
  /** @type {[string | null, React.Dispatch<React.SetStateAction<string>>]} */ // @ts-expect-error
  const [qrCodeSrc, setQrCodeSrc] = useState(null)
  /** @type {React.MutableRefObject<HTMLCanvasElement | null>} */
  const canvasRef = useRef(null)

  useEffect(() => {
    if (id) {
      const { count, type, num, lec, aud } = parseId(id)
      const path = `/public/certs/${count}/${type}/${aud ? lec + '/' : ''}${num}.png`

      if (images[path]) {
        images[path]().then((module) => setImgSrc(module.default))
      }
    }
  }, [id, images])

  useEffect(() => {
    if (imgSrc) {
      const certUrl = `https://afaaq.assayyaad.pro/cert/${id}`
      QRCode.toDataURL(certUrl, qrConfig, (err, url) => {
        if (err) {
          console.error(err)
          alert('حدث خطأ أثناء إنشاء رمز الاستجابة السريعة')
        } else setQrCodeSrc(url)
      })
    }
  }, [imgSrc])

  useEffect(() => {
    if (id && imgSrc && qrCodeSrc && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const img = new Image()
      img.src = imgSrc
      img.onload = () => {
        canvas.width = img.width
        canvas.height = img.height
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

        const qrCode = new Image()
        qrCode.src = qrCodeSrc
        qrCode.onload = () => {
          const [w, h] = idToPos(id, canvas.width, canvas.height)
          ctx.drawImage(qrCode, w, h, qrConfig.width, qrConfig.width)
        }
      }
    }
  }, [imgSrc, qrCodeSrc])

  function downloadImage() {
    if (canvasRef.current) {
      const link = document.createElement('a')
      link.href = canvasRef.current.toDataURL('image/png')
      link.download = `${id}.png`
      link.click()
    }
  }

  return (
    <div className="container text-center">
      {id ? (
        <>
          <h1>
            معرّف الشهادة: <p dir="ltr">{id}</p>
            <FaCopy onClick={() => copyToClipboard(id)} className="inline-block ml-2 cursor-pointer text-green-500" />
          </h1>
          <button onClick={downloadImage} className="px-4 py-2 bg-blue-500 text-white rounded-md mt-1 mb-2">
            تحميل الشهادة
          </button>
          <canvas ref={canvasRef} className="max-w-full max-h-full" style={{ display: 'none' }} />
          <img src={imgSrc} className="max-w-full max-h-full mb-4" />
        </>
      ) : (
        <p className="text-center">لا توجد شهادة، تحقق من صحة المعرّف</p>
      )}
    </div>
  )
}
