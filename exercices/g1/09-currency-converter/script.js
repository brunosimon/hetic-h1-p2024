const input = document.querySelector('.converter .input')
const baseRate = document.querySelector('.converter .rate.base')
const destinationRate = document.querySelector('.converter .rate.destination')
const output = document.querySelector('.converter .output')

const ding = new Audio('ding.mp3')
ding.volume = 0.25

window
    .fetch('https://api.exchangeratesapi.io/latest')
    .then(_response => _response.json())
    .then(_data =>
    {
        const rates = Object.keys(_data.rates)
        rates.push(_data.base)
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
        .then(_response => _response.json())
        .then(_data =>
        {
            const rate = _data.rates[destinationRateValue]
            const outputValue = inputValue * rate

            if(isNaN(outputValue))
            {
                output.textContent = '(╯°□°)╯︵ ┻━┻'
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