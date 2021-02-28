function greatestDivisor(firstNumber, secondNumber) {
    while (secondNumber !== 0) {
        let temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
        ;
    }

    return firstNumber;
}
console.log(greatestDivisor(15, 5));
console.log(greatestDivisor(2154, 458));
