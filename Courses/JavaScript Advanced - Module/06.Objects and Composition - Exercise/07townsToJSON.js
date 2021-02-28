function townsToJson(inputArr) {
    let [firstRow, ...table] = inputArr;
    const regExp = /\|\W?/g;
    const townArr = [];
    firstRow = firstRow
        .replace(regExp, '')
        .split(' ')
        .filter(x => x != '');

    for (let element of table) {
        const townObj = {};
        let tokens = element
            //.replace(regExp,'')
            .split(regExp)
            .filter(x => x != '');
        tokens[1] = Number([tokens[1]]).toFixed(2);
        tokens[2] = Number([tokens[2]]).toFixed(2);
        tokens[1] = Number(tokens[1]);
        tokens[2] = Number(tokens[2]);
        townObj[firstRow[0]] = tokens[0].trim();
        townObj[firstRow[1]] = tokens[1];
        townObj[firstRow[2]] = tokens[2];
        townArr.push(townObj);
    }
    const dataJSON = JSON.stringify(townArr);
    return dataJSON;
}

console.log(townsToJson(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |']));