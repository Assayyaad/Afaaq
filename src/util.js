export const qrConfig = { width: 140, margin: 1 }

/**
 * @param {string} id
 * @returns {{count: string, type: string, num: string, lec?: string, aud?: boolean}}
 */
export function parseId(id) {
  if (id.includes('aud')) {
    const [count, type, lec, num] = id.split('-')
    return { count, type, lec, num, aud: true }
  } else {
    const [count, type, num] = id.split('-')
    return { count, type, num }
  }
}

/**
 * @param {string} id
 * @param {number} width
 * @param {number} height
 */
export function idToPos(id, width, height) {
  const { type } = parseId(id)

  let w = width
  let h = height
  const qrW = qrConfig.width

  if (type === 'aud') {
    w -= qrW + 30
    h -= qrW + 30
  } else if (type === 'lec') {
    w -= w * 0.35
    h -= qrW + 70
  } else if (type === 'par') {
    w -= w * 0.35
    h -= qrW + 70
  }

  return [w, h]
}

/**
 * @param {string} text
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text)
  } catch (err) {
    return false
  }
  return true
}
