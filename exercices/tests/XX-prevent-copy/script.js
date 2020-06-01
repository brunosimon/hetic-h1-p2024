window.addEventListener('copy', (event) =>
{
    event.preventDefault()
})

window.addEventListener('contextmenu', (event) =>
{
    event.preventDefault()
})

window.addEventListener('keydown', (event) =>
{
    if((event.code === 'KeyI' && event.altKey && event.metaKey) || event.code === 'F12')
    {
        event.preventDefault()
    }
})