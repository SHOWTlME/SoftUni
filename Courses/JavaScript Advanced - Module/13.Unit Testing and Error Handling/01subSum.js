function sum(inputArray, firstNum, secondNum) {
    if (Array.isArray(inputArray) === false) {
        return NaN
    }
    if (firstNum < 0) {
        firstNum = 0;
    }
    if (secondNum > inputArray.length - 1) {
        secondNum = inputArray.length - 1;
    }
    return inputArray
        .slice(firstNum, secondNum + 1)
        .reduce((result, number) => result + Number(number), 0);
}

console.log(sum([10, 20, 30, 40, 50, 60], 3, 300));
console.log('FIRST CASE');
console.log(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log('SECOND CASE');
console.log(sum([10, 'twenty', 30, 40], 0, 2));
console.log('THIRD CASE');
console.log(sum([], 1, 2));
console.log('FOURTH CASE');
console.log(sum('text', 0, 2));
console.log('FIFTH CASE');

