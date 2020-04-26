// Get all DOM elements
const input = document.querySelector('.converter .input')
const baseRate = document.querySelector('.converter .base.rate')
const destinationRate = document.querySelector('.converter .destination.rate')
const output = document.querySelector('.converter .output')

// Fetch currencies from API
window
    .fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(data =>
    {
        // Rates array
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

        baseRate.value = 'USD'
        destinationRate.value = 'EUR'
    })
