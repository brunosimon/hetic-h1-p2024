const calculator = document.querySelector('.calculator')
const inputA = calculator.querySelector('.input-a')
const operation = calculator.querySelector('.operation')
const inputB = calculator.querySelector('.input-b')
const output = calculator.querySelector('.output')

const update = () =>
{
    const inputAValue = inputA.value || 0
    const operationValue = operation.value
    const inputBValue = inputB.value || 0
    const formula = `${inputAValue} ${operationValue} ${inputBValue}`
    const outputValue = window.eval(formula)
    output.value = outputValue

    // output.value = window.eval(`${inputA.value || 0} ${operation.value} ${inputB.value || 0}`)
}

inputA.addEventListener('input', update)
operation.addEventListener('input', update)
inputB.addEventListener('input', update)