const rainbowTitle = document.querySelector('.rainbow-title')
const colors = [
    '#6e5773',
    '#d45079',
    '#ea9085',
    '#f1935c',
    '#eab0d9',
    '#a7e9af'
]

window.setInterval(() =>
{
    rainbowTitle.style.color = colors[Math.floor(Math.random() * colors.length)]
}, 80)
