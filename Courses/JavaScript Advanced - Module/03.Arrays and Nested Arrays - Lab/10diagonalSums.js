function diagonalSums(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let diagonals = '';

    for (let i = 0; i < arr.length; i++) {
        firstDiagonal += arr[i][i];
        secondDiagonal += arr[i][arr.length - 1 - i];
    }
    diagonals += firstDiagonal + " " + secondDiagonal;
    return diagonals
}

console.log(diagonalSums([
    [20, 40],
    [10, 60]]));
console.log(diagonalSums([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]));