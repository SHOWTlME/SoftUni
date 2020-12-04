function elementProcess(arr) {

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            newArr.unshift(arr[i]);
        } else if (arr[i] > 0) {
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);
        }

    }

    let mappedArr = newArr.map(x => x + '');
    let result = mappedArr.join('' + '\n');
    console.log(result);

}

elementProcess([3, -2, 0, -1]);