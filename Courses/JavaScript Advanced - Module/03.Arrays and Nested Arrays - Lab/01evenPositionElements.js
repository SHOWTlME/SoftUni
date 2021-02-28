function evenPositionElements(arr) {
    let singleLineIntegers = '';
    for (let i = 0; i < arr.length; i += 2) {
        singleLineIntegers += arr[i] + ' ';
    }
    console.log(a);
    return singleLineIntegers;
}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));
console.log(evenPositionElements(['5', '10']));
