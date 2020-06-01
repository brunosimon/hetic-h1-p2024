const cube = document.querySelector('.cube')
const cubePivot = cube.querySelector('.pivot')

window.addEventListener('mousemove', (_event) =>
{
    const x = (_event.clientY - window.innerHeight * 0.5) * 0.15
    cubePivot.style.transform = `rotateX(${x}deg) rotateY(${_event.clientX * 0.2}deg)`
})

const types = ['smithing-table', 'warped-nylium', 'barrel', 'jukebox', 'crafting-table']
let typesIndex = 0

window.setInterval(() =>
{
    const oldClass = types[typesIndex]
    typesIndex++

    if(typesIndex > types.length - 1)
    {
        typesIndex = 0
    }
    const newClass = types[typesIndex]

    cube.classList.remove(oldClass)
    cube.classList.add(newClass)
}, 1200)