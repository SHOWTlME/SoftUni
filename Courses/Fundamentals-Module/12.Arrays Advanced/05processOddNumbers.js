function processOddNumbers(inputArr) {

    let newArr = [];
    for (let i = 0; i < inputArr.length; i++) {

        if (i % 2 !== 0) {
            newArr.push(inputArr[i]);

        }
    }

    let result = newArr.map(x => x * 2);
    result.reverse();
    console.log(result.join(' '));

}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);