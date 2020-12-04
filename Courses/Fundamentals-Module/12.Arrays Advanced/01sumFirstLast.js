function sumFirstLast(arr) {

    let firstElement = Number(arr.shift());
    let lastElement = Number(arr.pop());
    let result = firstElement + lastElement;

    return result;
}
console.log(sumFirstLast(['20', '30', '40']));
console.log(sumFirstLast(['5', '10']));