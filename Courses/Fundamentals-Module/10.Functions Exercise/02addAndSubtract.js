function sum(x, y, z) {

    let result = x + y;
    result = subtract(result, z)
    function subtract(a, b) {
        let subtractResult = a - b;
        return subtractResult;
    }

    return result;
}

console.log(sum(42,
    58,
    100));