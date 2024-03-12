const calculate = (firstNumber, secondNumber, operator) => {

    const fN = Number(firstNumber)
    const sN = Number(secondNumber)

    switch (operator) {
        case '+':
            return fN+sN
        case '-':
            return fN-sN
        case '*':
            return fN*sN
        case '/':
            return fN/sN
        default:
            return null
    }

}