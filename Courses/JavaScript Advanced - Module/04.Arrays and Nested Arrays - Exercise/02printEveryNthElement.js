function printEveryNthElement(arr, step) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % step === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(printEveryNthElement(['5',
    '20',
    '31',
    '4',
    '20'],
    2));