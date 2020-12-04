function smallestOfThree(x, y, z) {

    let smallest = Number.MAX_SAFE_INTEGER;
    smallest = checkSmallestNumber(x, smallest);
    smallest = checkSmallestNumber(y, smallest);
    smallest = checkSmallestNumber(z, smallest);

    function checkSmallestNumber(a, b) {
        if (a < b) {
            b = a;
        }
        return b;
    }
    return smallest;
}
console.log(smallestOfThree(2,
    5,
    3));