function sortingNumbers(arr) {
    let smallestNumbers = arr.sort((a, b) => a - b);
    const newArr = [];

    while (smallestNumbers.length !== 0) {
        let smallest = Math.min(...smallestNumbers);
        let highest = Math.max(...smallestNumbers);
        smallestNumbers.shift();
        smallestNumbers.pop();
        newArr.push(smallest);
        newArr.push(highest);
    }
    return newArr
}

console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,999999999]));