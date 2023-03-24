const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I'm watching you'
let idx = 1
let speed = 300 / speedEl.val

writeText()

function writeText () {
    textEl.innerText = text.slice(0.1)
}