function mathOperations(firstNumber, secondNumber, operator) {
    // '+', '-', '*', '/', '%', '**'.  
    let result = 0;
    if (operator === '+') {
        result += firstNumber + secondNumber;
    } else if (operator === '-') {
        result += firstNumber - secondNumber;
    } else if (operator === '*') {
        result += firstNumber * secondNumber;
    } else if (operator === '/') {
        result += firstNumber / secondNumber;
    } else if (operator === '%') {
        result += firstNumber % secondNumber;
    } else if (operator === '**') {
        result += firstNumber ** secondNumber;
    }
    console.log(result);
}

mathOperations(3, 5.5, '*');