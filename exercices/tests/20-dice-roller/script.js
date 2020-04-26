const diceRollerElement = document.querySelector('.dice-roller')
const countElement = diceRollerElement.querySelector('.count')
const facesElement = diceRollerElement.querySelector('.faces')
const throwElement = diceRollerElement.querySelector('.throw')
const dicesElement = diceRollerElement.querySelector('.dices')

for(let i = 1; i < 30; i++)
{
    const optionElement = document.createElement('option')
    optionElement.value = i
    optionElement.textContent = i
    countElement.appendChild(optionElement)
}

for(let i = 6; i < 14; i++)
{
    const optionElement = document.createElement('option')
    optionElement.value = i
    optionElement.textContent = i
    facesElement.appendChild(optionElement)
}

throwElement.addEventListener('click', () =>
{
    const count = window.parseInt(countElement.value)
    const faces = window.parseInt(facesElement.value)

    while(dicesElement.children.length)
    {
        dicesElement.children[0].remove()
    }

    for(let i = 0; i < count; i++)
    {
        const dice = document.createElement('div')
        dice.textContent = Math.ceil(faces * Math.random())
        dice.classList.add('dice')
        dicesElement.appendChild(dice)
    }
})