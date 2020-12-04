function sumOfOddNumbers(arg){
    let n = Number(arg);
    let count = 0;
    let currentNumber = 1;
    let sum = 0;
    while (count < n){
        if(currentNumber % 2 !== 0){
        console.log(currentNumber);
        count++;
        sum += currentNumber
        }
        currentNumber++;
        
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5);