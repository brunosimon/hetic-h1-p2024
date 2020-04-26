const rainbowTitle = document.querySelector('.rainbow-title')
const colors = [
    '#8a79af',
    '#caabd8',
    '#9873b9',
    '#714288',
    '#c3b4d2',
    '#d291bc'
]

window.setInterval(function()
{
    // rainbowTitle.style.color = `
    //     rgb(
    //         ${Math.random() * 255},
    //         ${Math.random() * 255},
    //         ${Math.random() * 255}
    //     )
    // `
    // rainbowTitle.style.color = `
    //     hsl(
    //         ${Math.random() * 360}deg,
    //         80%,
    //         80%
    //     )
    // `
    rainbowTitle.style.color = colors[Math.floor(Math.random() * colors.length)]
}, 100)