const cursor = document.querySelector('.cursor')

window.addEventListener('mousemove', (_event) =>
{
    cursor.style.left = `${_event.clientX}px`
    cursor.style.top = `${_event.clientY}px`
})