function sumOfDigits(num) {
    let numberToString = num.toString();
    let result = 0;

    for (let i = 0; i < numberToString.length; i++) {
        result += Number(numberToString[i]);
    }
    console.log(result);
}
sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);