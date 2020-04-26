const player = document.querySelector('.player')

window.addEventListener('keydown', (event) =>
{
    if(event.code == 'ArrowUp')
    {
        console.log('Aller en haut')
    }
    else if(event.code == 'ArrowRight')
    {
        console.log('Aller à droite')
    }
    else if(event.code == 'ArrowDown')
    {
        console.log('Aller en bas')
    }
    else if(event.code == 'ArrowLeft')
    {
        console.log('Aller à gauche')
    }
})
