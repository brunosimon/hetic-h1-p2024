const rainbowTitle = document.querySelector('.rainbow-title')
let rainbowTitleHover = false
const colors = ['#ff8080', '#ffba92', '#e0f5b9', '#c6f1d6', '#ac8daf', '#fda77f']

rainbowTitle.addEventListener('mouseenter', function()
{
    rainbowTitleHover = true
})

rainbowTitle.addEventListener('mouseleave', function()
{
    rainbowTitleHover = false
})

window.setInterval(function()
{
    if(rainbowTitleHover)
    {
        // rainbowTitle.style.color = `hsl(${Math.random() * 360}deg, 100%, 50%)`
        // rainbowTitle.style.color = `
        //     rgb(
        //         ${Math.random() * 255},
        //         ${Math.random() * 255},
        //         ${Math.random() * 255}
        //     )
        // `
        rainbowTitle.style.color = colors[Math.floor(Math.random() * colors.length)]
    }
}, 80)
