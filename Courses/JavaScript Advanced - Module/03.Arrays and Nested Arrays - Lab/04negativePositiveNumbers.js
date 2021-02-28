function negativePositiveNumbers(arr) {
    let newArr = [];

    for (const element of arr) {
        if (element < 0) {
            newArr.unshift(element);
        } else {
            newArr.push(element);
        }
    }

    return newArr.join('\n');
}

console.log(negativePositiveNumbers([7, -2, 8, 9]));
console.log('-------------------')
console.log(negativePositiveNumbers([3, -2, 0, -1]));
