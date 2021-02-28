function processOddPositions(arr) {
    let reversed = [];
    for (let i = 0; i < arr.length; i++) {
        let multiply = 0;
        if (i % 2 !== 0) {
            multiply = arr[i] * 2;
            reversed.push(multiply);
        }
    }
    reversed.reverse();
    return reversed.join(' ');
}
console.log(processOddPositions([10, 15, 20, 25]));
console.log(processOddPositions([3, 0, 10, 4, 7, 3]));