function rightPlace(word, symbol, original) {
    let result = word.replace(`_`, symbol);


    if (result === original) {
        console.log(`Matched`);
    } else {
        console.log(`Not Matched`);
    }
}
rightPlace('Str_ng', 'o', 'String');