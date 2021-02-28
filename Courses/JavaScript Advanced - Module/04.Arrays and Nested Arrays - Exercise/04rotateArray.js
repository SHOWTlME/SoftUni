function rotateArray(arr, rotator) {

    for (let i = 0; i < rotator; i++) {
        let lastElement = arr.pop();
        arr.unshift(lastElement);
    }

    return arr.join(' ');
}

console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15));