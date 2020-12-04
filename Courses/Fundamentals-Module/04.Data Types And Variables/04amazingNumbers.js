function amazingNumbers(num) {
    let magicNumber = num.toString();
    let sum = 0;

    for (let i = 0; i < magicNumber.length; i++) {
        sum += Number(magicNumber[i]);
        
    }
    let result = sum.toString().includes(`9`);
    if(result) {
        console.log(`${num} Amazing? True`);
    }else {
        console.log(`${num} Amazing? False`);
    }
}
amazingNumbers(999);