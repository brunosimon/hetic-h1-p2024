const eyes = Array.from(document.querySelectorAll('.googly-eyes .eye'))
// const eyes = [...document.querySelectorAll('.googly-eyes .eye')]

window.addEventListener('mousemove', (event) =>
{
    const cursorX = event.clientX
    const cursorY = event.clientY
    
    for(const eye of eyes)
    {
        const bounding = eye.getBoundingClientRect()
        const centerX = bounding.x + bounding.width / 2
        const centerY = bounding.y + bounding.height / 2
        const deltaX = cursorX - centerX
        const deltaY = cursorY - centerY
        const angle = Math.atan2(deltaY, deltaX)
        const radius = Math.min(Math.hypot(deltaX, deltaY) * 0.2, 70)
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        const pupil = eye.children[0]
        pupil.style.top = `${y}px`
        pupil.style.left = `${x}px`
    }
})
