const containerElement = document.querySelector('.aim-trainer')
const scoreElement = containerElement.querySelector('.score')
const actionElement = containerElement.querySelector('.action')
const timerElement = containerElement.querySelector('.timer')
const targetElement = containerElement.querySelector('.target')
const hitAudioElement = containerElement.querySelector('.hit-audio')
const endAudioElement = new Audio('end.mp3')

let score = 0
let timeLeft = 5

const play = (_event) =>
{
    _event.preventDefault()
    
    scoreElement.style.display = 'block'
    actionElement.style.display = 'none'
    timerElement.style.display = 'block'
    targetElement.style.display = 'flex'

    timeLeft = 5

    score = 0
    scoreElement.textContent = `${score}pts`

    moveTarget()
    tick()
}

const hit = () =>
{
    score++
    scoreElement.textContent = `${score}pts`

    moveTarget()

    hitAudioElement.currentTime = 0
    hitAudioElement.play()
}

const tick = () =>
{
    timerElement.textContent = `${timeLeft}s`
    timeLeft--

    if(timeLeft >= 0)
    {
        window.setTimeout(tick, 1000)
    }
    else
    {
        end()
    }
}

const end = () =>
{
    scoreElement.style.display = 'block'
    actionElement.style.display = 'block'
    timerElement.style.display = 'none'
    targetElement.style.display = 'none'

    endAudioElement.play()
}

const moveTarget = () =>
{
    targetElement.style.top = `${Math.random() * 100}%`
    targetElement.style.left = `${Math.random() * 100}%`
}

actionElement.addEventListener('click', play)
targetElement.addEventListener('mouseenter', hit)