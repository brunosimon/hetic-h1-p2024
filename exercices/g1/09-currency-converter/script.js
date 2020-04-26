const input = document.querySelector('.converter .input')
const baseRate = document.querySelector('.converter .rate.base')
const destinationRate = document.querySelector('.converter .rate.destination')
const output = document.querySelector('.converter .output')

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
            option.textContent = rate
            option.value = rate
            baseRate.appendChild(option)
            destinationRate.appendChild(option.cloneNode(true))
        }

        baseRate.value = 'USD'
        destinationRate.value = 'EUR'
    })
