function solve(arg1, arg2){
    let startNum = Number(arg1);
    let finishNum = Number(arg2);
    let summ = 0;
    for (let i = startNum; i <= finishNum; i++){
        if (i % 9 === 0){
            summ += i;
        }
    }console.log(`The sum: ${summ}`);
    for (let i = startNum; i <= finishNum; i++){
        if (i % 9 === 0){
            console.log(i);
        }
    }
}
solve("100", "200");