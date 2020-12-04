function arrayReverse(num, arr) {
    let newArr = [];
    let output = '';
    for (let i = 0; i < num; i++) {
        newArr.push(arr[i]);
    }
    for (let i = newArr.length - 1; i >= 0; i--) {
        output += newArr[i] + " ";
    }
    console.log(output);
}
arrayReverse(3, [10, 20, 30, 40, 50]);
arrayReverse(4, [-1, 20, 99, 5]);
arrayReverse(2, [66, 43, 75, 89, 47]);