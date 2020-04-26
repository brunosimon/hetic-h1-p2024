const eyes = document.querySelectorAll('.eye')

window.addEventListener('mousemove', (_event) =>
{
    const mouseX = _event.clientX
    const mouseY = _event.clientY

    for(const eye of eyes)
    {
        const bounding = eye.getBoundingClientRect()
        const centerX = bounding.x + bounding.width * 0.5
        const centerY = bounding.y + bounding.height * 0.5
        const deltaX = mouseX - centerX
        const deltaY = mouseY - centerY
        const angle = Math.atan2(deltaY, deltaX)
        const x = Math.cos(angle) * 50
        const y = Math.sin(angle) * 50
        eye.children[0].style.left = `${x}px`
        eye.children[0].style.top = `${y}px`
    }
})