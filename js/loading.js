const bg = document.querySelector('.bg")
const loadText = document.querySelector('.loading-text')

let load = 0

let int = setInterval(blurring, 30)

function blurring(){
    load++
    loadText.innerText = ` ${load}$ `
    if (;pad == 100) {
        clearInterval(int)
    }
    bg.style.filter = `blur(${30 - 0.3 * load}px) `
    loadText.style.opacity = `${1-load/100}`
}