// Get all DOM elements
const input = document.querySelector('.converter .input')
const baseRate = document.querySelector('.converter .base.rate')
const destinationRate = document.querySelector('.converter .destination.rate')
const output = document.querySelector('.converter .output')

const ding = new Audio('ding.mp3')
ding.volume = 0.25

window
    .fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(data =>
    {
        const rates = Object.keys(data.rates)
        rates.push(data.base)
        rates.sort()
        
        for(const rate of rates)
        {
            const option = document.createElement('option')
            option.value = rate
            option.textContent = rate

            baseRate.appendChild(option)
            destinationRate.appendChild(option.cloneNode(true))
        }

        baseRate.value = 'EUR'
        destinationRate.value = 'USD'
    })

const updateOutput = () =>
{
    const inputValue = input.value.replace(',', '.')
    const baseRateValue = baseRate.value
    const destinationRateValue = destinationRate.value
    const url = `https://api.exchangeratesapi.io/latest?base=${baseRateValue}&symbols=${destinationRateValue}`

    window
        .fetch(url)
        .then(response => response.json())
        .then(data =>
        {
            const rate = data.rates[destinationRateValue]
            const outputValue = inputValue * rate

            if(isNaN(outputValue))
            {
                output.textContent = '(┛◉Д◉)┛彡┻━┻'
            }
            else
            {
                output.textContent = outputValue.toFixed(2)
                
                ding.currentTime = 0
                ding.play()
            }
        })
}

input.addEventListener('input', updateOutput)
baseRate.addEventListener('input', updateOutput)
destinationRate.addEventListener('input', updateOutput)