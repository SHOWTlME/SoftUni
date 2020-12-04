function solve(arg){
    textNumber = arg + "";
    let summ = 0;
    for(let i = 0; i < textNumber.length; i++){
        let num = Number(textNumber[i]);
        summ += num;
        
    }console.log(`The sum of the digits is:${summ}`);
}
solve("1234");