const A = { x: 200, y: 150 }
const B = { x: 150, y: 250 }
const C = { x: 50, y: 100 }
const D = { x: 250, y: 200 }

function drawPoint(point, letter, color) {
  ctx.beginPath()
  ctx.fillStyle = color ? "green" : "white"
  ctx.arc(point.x, point.y, 10, 0, 2 * Math.PI)
  ctx.fill()
  ctx.stroke()
  ctx.fillStyle = "black"
  ctx.textAlign = "center"
  ctx.textBaseline = "middle"
  ctx.font = "bold 12px Arial"
  ctx.fillText(letter, point.x, point.y)
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

// @type {HTMLCanvasElement}
const canvas = document.querySelector("#canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth

const ctx = canvas.getContext("2d")

let t = -1
// let z = -1
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  ctx.beginPath()
  ctx.moveTo(A.x, A.y)
  ctx.lineTo(B.x, B.y)
  ctx.moveTo(C.x, C.y)
  ctx.lineTo(D.x, D.y)
  ctx.stroke()

  drawPoint(A, "A")
  drawPoint(B, "B")
  drawPoint(C, "C")
  drawPoint(D, "D")

  const M = {
    x: lerp(A.x, B.x, t),
    y: lerp(A.y, B.y, t),
  }

  const N = {
    x: lerp(C.x, D.x, t),
    y: lerp(C.y, D.y, t),
  }
  // console.log(N)
  drawPoint(M, "M", 0 < t && t < 1)
  drawPoint(N, "N", 0 < t && t < 1)
  t += 0.005
  // console.log(t)
  requestAnimationFrame(animate)
}

animate()
