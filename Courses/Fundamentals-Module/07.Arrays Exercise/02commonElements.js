function commonElements(firstArr, secondArr) {

    for (let i = 0; i < firstArr.length; i++) {
        let isCommon = secondArr.includes(firstArr[i]);
        if (isCommon) {
            console.log(firstArr[i]);
        }
    }
}

commonElements(['He', 'hello', 2, 4, 'Peter', 'e'],
    ['Hey', 10, 'hey', 4, 'hello', '2']);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);