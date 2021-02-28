function sort(inputArray, criteria) {
    const commandObj = {
        'asc': (a, b) => a - b,
        'desc': (a, b) => b - a
    };

    return inputArray.sort(commandObj[criteria]);
}
console.log(sort([14, 7, 17, 6, 8], 'desc'));