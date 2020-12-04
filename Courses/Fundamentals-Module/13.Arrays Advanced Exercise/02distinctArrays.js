function distinctArrays(arr) {

    let outputArr = [];

    for (let element of arr) {
        if(!outputArr.includes(element)) {
            outputArr.push(element);
        }
    }
    return outputArr.join(' ');
}
console.log(distinctArrays([20, 8, 12, 13, 4, 4, 8, 5]));
