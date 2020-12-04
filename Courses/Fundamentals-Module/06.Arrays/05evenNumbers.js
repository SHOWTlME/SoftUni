function evenNumbers(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
        if (arr[i] % 2 === 0) {
            result += arr[i];
        }
    }
    console.log(result);
}
evenNumbers(['1', '2', '3', '4', '5', '6']);
evenNumbers(['3','5','7','9']);
evenNumbers(['2','4','6','8','10']);