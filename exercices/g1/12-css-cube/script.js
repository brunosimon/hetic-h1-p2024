const cube = document.querySelector('.cube')
const cubePivot = cube.querySelector('.pivot')

window.addEventListener('mousemove', (event) =>
{
    const rotateY = (event.clientX - window.innerWidth * 0.5) * 0.3
    const rotateX = - (event.clientY - window.innerHeight * 0.5) * 0.3

    cubePivot.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`
})