function factoricalDivision(x, y) {

    let result = 1;
    let sum = 1;
    for (let i = x; i > 0; i--) {
        result = result * i;
    }
    for (let j = y; j > 0; j--) {
        sum = sum * j;
    }

    sum = result / sum;
    return sum.toFixed(2);

}
console.log(factoricalDivision(6, 2));