function agregateElements(arr) {
    let result = 0;
    let secondResult = 0;
    let thirdResult = '';
    for (const element of arr) {
        result += element;
        secondResult += 1 / element;
        thirdResult += element;
    }
    console.log(result);
    console.log(secondResult.toFixed(4));
    console.log(thirdResult);

}
agregateElements([1, 2, 3]);
agregateElements([2, 4, 8, 16]);