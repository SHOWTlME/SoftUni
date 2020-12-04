function searchForANumber(arr1, arr2) {
    let takeElements = arr2[0];
    let deleteElements = arr2[1];
    let searchFor = arr2[2];
    let timesIncluded = 0;

    arr1 = arr1.splice(0, takeElements);
    for (let i = 0; i < deleteElements; i++) {
        arr1.shift();
    }
    for (const element of arr1) {
        if (element === searchFor) {
            timesIncluded++;
        }
    }
    let result = arr1.includes(searchFor);
    if (result) {
        console.log(`Number ${searchFor} occurs ${timesIncluded} times.`);
    }
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);