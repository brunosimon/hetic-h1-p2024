const cursor = document.querySelector('.cursor')

// cursor.style.top = '200px'
// cursor.style.left = '300px'

document.addEventListener('mousemove', function(event)
{
    cursor.style.left = `${event.clientX - 9}px`
    cursor.style.top = `${event.clientY - 10}px`
})
