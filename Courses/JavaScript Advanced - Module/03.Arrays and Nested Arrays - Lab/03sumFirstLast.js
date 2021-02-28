function sumFirstLast(arr) {
    let result = 0;
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    result += first + last;

    return result;
}
console.log(sumFirstLast(['20', '30', '40']));
