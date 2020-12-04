function sorting(arr) {
    let sortArr = arr.sort((a, b) => a - b);
    let smallestNumbers = [];
    let finalArr = [];
    for (let i = 0; i < sortArr.length / 2; i++) {
        let element = sortArr[i]
        smallestNumbers.push(element);
        
    }
    let smallLength = smallestNumbers.length;
    sortArr.splice(0 , smallLength)
    sortArr.sort((a,b) => b - a);

    for (let z = 0; z < sortArr.length; z++) {
        finalArr.push(sortArr[z]);
        for (let x = z; x < smallestNumbers.length; x++) {
            finalArr.push(smallestNumbers[x]);
            break;
        }
    }
    console.log(finalArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);