function intAndFloat(firstNumber, secondNumber, thirdNumber) {
    let sum = firstNumber + secondNumber + thirdNumber;

    if (sum % 1 === 0) {
        console.log(`${Math.trunc(sum)} - Integer`);
    }else {
        console.log(`${sum} - Float`);
    }
}
intAndFloat(9, 100, 1.1);
intAndFloat(100, 200, 303);