const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'I'm watching you'
let idx = 1
let speed = 300

writeText()

function writeText () {
    textEl.innerText = text.slice(0,ixd)
    idx++

    if (idx > text.length) {
        idx = 1
    }

    setTimeout(writeText, speed)
}