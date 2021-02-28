function sameNumbers(int) {
    let isTrue = true;
    let numHolder = '';
    numHolder += int;
    let sum = 0;
    for (let i = 0; i < numHolder.length; i++) {
        let current = numHolder[i];
        let secondCurrent = numHolder[i + 1];

        if (current !== secondCurrent && secondCurrent !== undefined) {
            isTrue = false;
        }
        sum += Number(current);
    }

    return `${isTrue}\n${sum}`
}

console.log(sameNumbers(2222222));
console.log(sameNumbers(1234));
