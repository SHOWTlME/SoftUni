function magicMatrices(matrix) {
    let rows = [];
    let colums = [];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    for (let i = 0; i < matrix.length; i++) {
        const element = matrix[i];
        let sum = element.reduce(reducer);
        rows.push(sum);
    }
    let transpose = matrix[0].map((x, i) => matrix.map(x => x[i]));

    for (let j = 0; j < transpose.length; j++) {
        const element = transpose[j];
        let sum = element.reduce(reducer);
        colums.push(sum);
    }
    rows = rows.concat(colums);

    let isTrue = rows.every(x => x === rows[0]);
    return isTrue

}

console.log(magicMatrices([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]));