function equalNeighbors(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let firstArr = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let secondArr = arr[j];

                firstArr.forEach(x => {
                    let thirdIndex = 0;
                    let firstIndex = firstArr.indexOf(x);
                    secondArr.forEach(y => {
                        let secondIndex = secondArr.indexOf(y);
                        if (x === y && firstIndex === secondIndex) {
                            if (firstIndex === thirdIndex && secondIndex === thirdIndex) {
                                count++;
                            } else {
                                count++;
                                thirdIndex = firstIndex;
                            }
                        }
                    });
                });
            
        }

    }
    return count
}

console.log(equalNeighbors([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]));
console.log('-------------------');
console.log(equalNeighbors([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]));
console.log(`---------------------------`);
console.log(equalNeighbors([
    ['2', '2', '5', '7', '4']
    ['4', '0', '5', '3', '4']
    ['2', '5', '5', '4', '2']
]));