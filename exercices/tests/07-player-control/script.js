const player = document.querySelector('.player')
let playerTop = 0
let playerLeft = 0
const speed = 30

window.addEventListener('keydown', (_event) =>
{
    if(_event.key === 'ArrowDown')
    {
        playerTop += speed
        player.style.transform = `rotate(-90deg)`
    }
    else if(_event.key === 'ArrowUp')
    {
        playerTop -= speed
        player.style.transform = `rotate(90deg)`
    }
    else if(_event.key === 'ArrowRight')
    {
        playerLeft += speed
        player.style.transform = `rotate(180deg)`
    }
    else if(_event.key === 'ArrowLeft')
    {
        playerLeft -= speed
        player.style.transform = `rotate(0deg)`
    }

    player.style.top = `${playerTop}px`
    player.style.left = `${playerLeft}px`
})