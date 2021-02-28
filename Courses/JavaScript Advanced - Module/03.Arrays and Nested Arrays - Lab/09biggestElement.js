function biggestElement(arr) {
    let firstArr = arr.shift();

    for (const element of arr) {
        firstArr = firstArr.concat(element);
    }
    let highestNumber = Math.max(...firstArr);
    return highestNumber;
}

console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]]));
console.log(biggestElement([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]));