function oddAndEven(num) {

    let sumEven = 0;
    let sumOdd = 0;
    lineOfNumbers = String(num).split('');

    for (let i = 0; i < lineOfNumbers.length; i++) {
        let result = Number(lineOfNumbers[i]);
        if (result % 2 === 0) {
            sumEven += result;
        } else if (result % 2 !== 0) {
            sumOdd += result;
        }
    }

    return `Odd sum = ${sumOdd}, Even sum = ${sumEven}`;
}
console.log(oddAndEven(3495892137259234));