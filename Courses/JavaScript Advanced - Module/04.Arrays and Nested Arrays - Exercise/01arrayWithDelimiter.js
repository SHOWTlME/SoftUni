function arrayWithDelimiter(arr, delimiter) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        i !== arr.length - 1 ? result += arr[i] + delimiter : result += arr[i];
    }

    return result;
}

console.log(arrayWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'));