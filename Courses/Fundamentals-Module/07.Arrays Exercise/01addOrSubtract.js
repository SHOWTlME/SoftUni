function addOrSubtract(arr) {
    let sumOfFirstArr = 0;
    let sumOfModifiedArr = 0;

    for (let z = 0; z < arr.length; z++) {
        sumOfFirstArr += Number(arr[z]);
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        } else {
            arr[i] -= i;
        }
        sumOfModifiedArr += Number(arr[i]);
    }
    console.log(arr);
    console.log(sumOfFirstArr);
    console.log(sumOfModifiedArr);

}
addOrSubtract([5, 15, 23, 56, 35]);
addOrSubtract([-5, 11, 3, 0, 2]);