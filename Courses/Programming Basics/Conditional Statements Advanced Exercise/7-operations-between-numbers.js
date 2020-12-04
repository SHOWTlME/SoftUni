function numberOperator(arg1, arg2, arg3) {
    let n1 = Number(arg1);
    let n2 = Number(arg2);
    let operator = arg3;
    let evenOrOdd = "odd";
    let result = 0;

    if (operator === "+") {
        result = n1 + n2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    } else if (operator === "-") {
        result = n1 - n2;
        if (operator % 2 === 0) {
            evenOrOdd = "even";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    } else if (operator === "*") {
        result = n1 * n2;
        if (result % 2 === 0) {
            evenOrOdd = "even";
        }
        console.log(`${n1} ${operator} ${n2} = ${result} - ${evenOrOdd}`);
    } else if (operator === "/") {
        result = (n1 / n2).toFixed(2);
        if (n2 === 0){
            console.log(`Cannot divide ${n2} by zero`);
        }else {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
        }
    } else if (operator === "%") {
        result = n1 % n2;
        if (n2 === 0){
            console.log(`Cannot divide ${n2} by zero`);
        }else {
        console.log(`${n1} ${operator} ${n2} = ${result}`);
        }
    }
 
}

numberOperator("10", "3", "%");