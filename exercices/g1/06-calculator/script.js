const calculator = document.querySelector('.calculator')
const inputA = calculator.querySelector('.input-a')
const operation = calculator.querySelector('.operation')
const inputB = calculator.querySelector('.input-b')
const output = calculator.querySelector('.output')

const update = function()
{
    const inputAValue = inputA.value || 0
    const operationValue = operation.value
    const inputBValue = inputB.value || 0
    const formula = `${inputAValue} ${operationValue} ${inputBValue}`
    const outputValue = window.eval(formula)
    output.value = outputValue
}

inputA.addEventListener('input', update)
operation.addEventListener('input', update)
inputB.addEventListener('input', update)