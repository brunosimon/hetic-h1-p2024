const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', (event) =>
{
    cursor.style.left = `${event.clientX}px`
    cursor.style.top = `${event.clientY}px`
})