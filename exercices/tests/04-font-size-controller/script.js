const text = document.querySelector('.text')
const more = document.querySelector('.more')
const less = document.querySelector('.less')
const value = document.querySelector('.value')

const textComputedStyle = window.getComputedStyle(text)
let fontSize = parseInt(textComputedStyle.fontSize)
value.textContent = fontSize

more.addEventListener('click', () =>
{
    if(fontSize < 24)
    {
        fontSize++

        value.textContent = fontSize
        text.style.fontSize = fontSize + 'px'
    }
})

less.addEventListener('click', () =>
{
    if(fontSize > 8)
    {
        fontSize--

        value.textContent = fontSize
        text.style.fontSize = fontSize + 'px'
    }
})