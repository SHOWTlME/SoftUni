function ticTacToe(arr) {
    const dashboard =
    [[false, false, false],
    [false, false, false],
    [false, false, false]];
    const firstPlayer = 'X';
    const secondPlayer = 'O';
    const diagonalStart = [];
    const diagonalEnd = [];
    const testX = x => x === 'X';
    const testO = o => o === 'O';
    let winner = '';
    let isTrue = '';
    let isTrue2 = '';
    let isTrue3 = '';
    let isTrue4 = '';
    let isTrue5 = '';
    let isTrue6 = '';

    for (let i = 0; i < arr.length; i++) {
        let [firstIndex, secondIndex] = arr[i].split(' ');
        isTrue = dashboard.every(testX);
        isTrue2 = dashboard.every(testO)
        if (isTrue) {
            winner = firstPlayer;
            break;
        } else if (isTrue2) {
            winner = secondPlayer;
        }
        for (let j = 0; j < dashboard.length; j++) {
            const fromStart = dashboard[j][j];
            const fromEnd = dashboard[j][dashboard.length - 1 - j];
            diagonalStart.push(fromStart);
            diagonalEnd.push(fromEnd);
            isTrue3 = diagonalStart.every(testX);
            isTrue4 = diagonalStart.every(testO);
            isTrue5 = diagonalEnd.every(testX);
            isTrue6 = diagonalEnd.every(testO);
            if (isTrue3) {
                winner = firstPlayer;
                break;
            } else if (isTrue4) {
                winner = secondPlayer;
                break;
            } else if (isTrue5) {
                winner = firstPlayer;
                break;
            } else if (isTrue6) {
                winner = secondPlayer;
                break;
            }
        } if (isTrue3) {
            winner = firstPlayer;
            break;
        } else if (isTrue4) {
            winner = secondPlayer;
            break;
        } else if (isTrue5) {
            winner = firstPlayer;
            break;
        } else if (isTrue6) {
            winner = secondPlayer;
            break;
        }

        if (dashboard[firstIndex][secondIndex] === 'O' || dashboard[firstIndex][secondIndex] === 'X') {
            console.log("This place is already taken. Please choose another!");
        } else if (i % 2 === 0 && dashboard[firstIndex][secondIndex] === false) {
            dashboard[firstIndex][secondIndex] = firstPlayer;
        } else {
            dashboard[firstIndex][secondIndex] = secondPlayer;
        }
    }

    let winningMatch = '';
    dashboard.forEach(x => winningMatch += x.join('    ') + '\n');
    return `Player ${winner} wins!\n${winningMatch}`;
}

console.log(ticTacToe(
    ["0 1",
 "0 0",
 "0 2", 
 "2 0",
 "1 0",
 "1 1",
 "1 2",
 "2 2",
 "2 1",
 "0 0"]));