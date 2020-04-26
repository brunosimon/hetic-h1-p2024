const calculator = document.querySelector('.calculator')
const inputA = calculator.querySelector('.input-a')
const inputB = calculator.querySelector('.input-b')
const operation = calculator.querySelector('.operation')
const output = calculator.querySelector('.output')

const update = () =>
{
    const inputAValue = inputA.value || 0
    const inputBValue = inputB.value || 0
    const operationValue = operation.value
    const operationString = `${inputAValue}${operationValue}${inputBValue}`
    const outputValue = window.eval(operationString)
    output.value = outputValue
}

inputA.addEventListener('input', update)
inputB.addEventListener('input', update)
operation.addEventListener('input', update)