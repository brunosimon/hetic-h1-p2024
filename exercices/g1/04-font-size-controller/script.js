const less = document.querySelector('.less')
const more = document.querySelector('.more')
const value = document.querySelector('.value')
const text = document.querySelector('.text')

const computedStyle = window.getComputedStyle(text)
let fontSize = parseInt(computedStyle.fontSize)

value.textContent = fontSize

less.addEventListener('click', () =>
{
    if(fontSize > 10)
    {
        fontSize--
        text.style.fontSize = `${fontSize}px`
        value.textContent = fontSize
    }
})

more.addEventListener('click', () =>
{
    if(fontSize < 20)
    {
        fontSize++
        text.style.fontSize = `${fontSize}px`
        value.textContent = fontSize
    }
})


