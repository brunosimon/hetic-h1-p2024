const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function(event)
{
    cursor.style.top = `${event.clientY - 10}px`
    cursor.style.left = `${event.clientX - 9}px`
})
