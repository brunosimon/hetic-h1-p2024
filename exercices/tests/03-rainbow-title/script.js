const rainbowTitle = document.querySelector('.rainbow-title')
let rainbowTitleHover = false

rainbowTitle.addEventListener('mouseenter', () =>
{
    rainbowTitleHover = true
})

rainbowTitle.addEventListener('mouseleave', () =>
{
    rainbowTitleHover = false
})

window.setInterval(() =>
{
    if(rainbowTitleHover)
    {
        const randomRed = Math.random() * 255
        const randomGreen = Math.random() * 255
        const randomBlue = Math.random() * 255
        const randomColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
        rainbowTitle.style.color = randomColor
    }
}, 80)