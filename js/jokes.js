const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

async fuction generateJoke() {
    const res = await fetch('https://icanhazdadjoke.com', {
        headers: {Accept: 'application/json',},
    })

    const data = await res.json()
    jokeEl.innerHTMl = data.joke
}