const containerElement = document.querySelector('.aim-trainer')
const scoreElement = containerElement.querySelector('.score')
const actionElement = containerElement.querySelector('.action')
const timerElement = containerElement.querySelector('.timer')
const targetElement = containerElement.querySelector('.target')

const hitAudio = new Audio('./hit.mp3')
const endAudio = new Audio('./end.mp3')

let score = 0
let timeLeft = null

const start = () =>
{
    scoreElement.style.display = 'block'
    actionElement.style.display = 'none'
    timerElement.style.display = 'block'
    targetElement.style.display = 'block'

    score = 0
    scoreElement.textContent = `${score}pts`

    timeLeft = 6

    tick()
}

const tick = () =>
{
    timeLeft--

    if(timeLeft === 0)
    {
        end()
    }
    else
    {
        timerElement.textContent = `${timeLeft}s`

        window.setTimeout(tick, 1000)
    }
}

const end = () =>
{
    scoreElement.style.display = 'block'
    actionElement.style.display = 'block'
    timerElement.style.display = 'none'
    targetElement.style.display = 'none'

    endAudio.play()
}

const hit = () =>
{
    score++
    scoreElement.textContent = `${score}pts`

    targetElement.style.top = `calc(${Math.random() * 100}% - var(--target-size) / 2)`
    targetElement.style.left = `calc(${Math.random() * 100}% - var(--target-size) / 2)`

    hitAudio.currentTime = 0
    hitAudio.play()
}

actionElement.addEventListener('click', start)
targetElement.addEventListener('mouseenter', hit)
