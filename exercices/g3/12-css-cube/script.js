const cube = document.querySelector('.cube')
const cubePivot = cube.querySelector('.pivot')

window.addEventListener('mousemove', (event) =>
{
    const normalizedX = event.clientX / window.innerWidth - 0.5
    const normalizedY = event.clientY / window.innerHeight - 0.5

    const rotateY = normalizedX * 360
    const rotateX = - normalizedY * 180

    cubePivot.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
})