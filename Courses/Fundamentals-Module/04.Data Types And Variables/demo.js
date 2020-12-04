function amazingNumbers (amazingNumber) {
    amazingNumber = amazingNumber.toString();
    let sum = 0;

    for (let i = 0; i < amazingNumber.length; i++) {
        sum += Number(amazingNumber[i]);

    }
    let result = sum.toString().includes(`9`);
    console.log(result
    ? `${amazingNumber} Amazing? True`
    : `${amazingNumber} Amazing? False`);
}
amazingNumbers(999)