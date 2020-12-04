function arrayRotation(arr, num) {
    for (let i = 0; i < num; i++) {
        let newArr = arr.shift();
        arr.push(newArr);
    }
    console.log(arr.join(` `));
    
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);