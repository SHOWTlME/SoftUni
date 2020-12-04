function evenAndOdd(arr) {
    let sumOfEvenNumbers = 0;
    let sumOfOddNumbers = 0;
    let difference = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumOfEvenNumbers += arr[i];
        } else if (arr[i] % 2 !== 0) {
            sumOfOddNumbers += arr[i];
        }
    }
    difference = sumOfEvenNumbers - sumOfOddNumbers;
    console.log(difference);
}
evenAndOdd([1, 2, 3, 4, 5, 6]);
evenAndOdd([3, 5, 7, 9]);
evenAndOdd([2, 4, 6, 8, 10]);

