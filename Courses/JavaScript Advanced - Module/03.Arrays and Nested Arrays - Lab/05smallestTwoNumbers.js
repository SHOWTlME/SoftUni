function smallestTwoNumbers(arr) {
    let smallNumbers = arr.sort((a, b) => a - b);
    let firstTwoNumbers = smallNumbers.slice(0, 2);

    return firstTwoNumbers.join(' ');
}

console.log(smallestTwoNumbers([30, 15, 50, 5]));
console.log(smallestTwoNumbers([3, 0, 10, 4, 7, 3]));