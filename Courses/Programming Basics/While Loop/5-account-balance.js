function accountBalance(input) {
    let total = 0;
    let index = 0;
    let money = input[index];
    index++;

    while (money !== "NoMoreMoney"){
        let currentNumber = Number(money);
        if (currentNumber < 0){
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${currentNumber.toFixed(2)}`);
        total += currentNumber;
        money = input[index];
        index++;
    }
    console.log(`Total: ${total.toFixed(2)}`);
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"]);