const unitConverter = document.querySelector('.unit-converter')
const input = unitConverter.querySelector('.input')
const operation = unitConverter.querySelector('.operation')
const output = unitConverter.querySelector('.output')

const update = () =>
{
    const inputValue = input.value
    const operationValue = operation.value
    let outputValue = 0

    if(operationValue == 'kgs-to-lbs')
    {
        outputValue = inputValue * 2.20462
    }
    else if(operationValue == 'lbs-to-kgs')
    {
        outputValue = inputValue / 2.20462
    }

    output.value = outputValue
}

input.addEventListener('input', update)
operation.addEventListener('input', update)

