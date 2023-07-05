import FontPicker from '../../lib/fontpicker.js'

const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const drawToCanvas = async (text, size, font) => {
  // make sure font is loaded before drawing
  await FontPicker.loadFont(font.family)
  const fontStr = `${font.weight} ${font.style} ${size}px ${font.family}`

  // measure text size
  ctx.font = fontStr
  const measure = ctx.measureText(text)
  canvas.width = measure.width
  canvas.height = measure.actualBoundingBoxAscent + measure.actualBoundingBoxDescent

  // clear canvas and draw text
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = '#000'
  ctx.font = fontStr
  ctx.fillText(text, 0, measure.actualBoundingBoxAscent)
}

// initialize the font picker
FontPicker.initialize({
  localFonts: false,
  language: 'en',
  variants: false
})

const input = document.getElementById('font')
const fontPicker = FontPicker.attach(input)

// add event listener
fontPicker.addEventListener('input', (e) => {
  const font = e.target.getFont()
  drawToCanvas(font.family, 100, font)
})

window.picker = fontPicker
