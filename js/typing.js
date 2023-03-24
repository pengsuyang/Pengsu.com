const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'Im watching you'
let idx = 1
let speed = 300 / speed.value

writeText()

function writeText () {
    textEl.innerText = text.slice(0,idx)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}

sppedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})