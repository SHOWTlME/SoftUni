function magicNumber(arr, magicNumber) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];

        for (let j = i + 1; j < arr.length; j++) {
            let result = element + arr[j];
            
            if (result === magicNumber) {
                console.log(element, arr[j]);
            }
        }
    }
}
magicNumber([1, 2, 3, 4, 5, 6],
    6);