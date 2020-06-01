const $textLimiter = document.querySelector('.text-limiter')
const $text = $textLimiter.querySelector('.text')
const $left = $textLimiter.querySelector('.left')
const limit = parseInt($left.textContent)

$textLimiter.addEventListener('input', (_event) =>
{
    const text = $text.value
    const length = text.length

    if(length > limit)
    {
        const truncatedText = text.slice(0, limit)
        $text.value = truncatedText
        $left.textContent = 0
    }
    else
    {
        $left.textContent = limit - length
    }
})