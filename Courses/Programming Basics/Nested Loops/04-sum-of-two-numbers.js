function twoNumbers(input) {

    let firstNumber = Number(input[0]);
    let lastNumber = Number(input[1]);
    let magicNumber = Number(input[2]);
    let nextNumber = 0;
    let isBreak = false;

    for (let i = firstNumber; i <= lastNumber; i++) {
        if (isBreak) {
            break;
        }
        for (let j = firstNumber; j <= lastNumber; j++) {
            if (i + j === magicNumber) {
                isBreak = true;
                break;
            }
            nextNumber++
            console.log(`Combination N:${nextNumber} ${i} + ${j} = ${i + j})`);
        }
    }
    if (!isBreak) {
        console.log(`${nextNumber} combinations - neither equals ${magicNumber}"`);
    }
}
twoNumbers([1, 10, 5]);