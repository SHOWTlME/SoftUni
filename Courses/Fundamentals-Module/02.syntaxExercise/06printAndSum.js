function printAndSum(startNumber, endNumber) {
    let singleLine = "";
    let result = 0;
    for (let i = startNumber; i <= endNumber; i++) {
        singleLine += i + " ";
        result += i;
    }
    console.log(singleLine);
    console.log(`Sum: ${result}`);
}
printAndSum(0, 26);
printAndSum(5, 10);
printAndSum(50, 60);