function subString(word, start, count) {
    let result = word.substring(start, count + start);
    console.log(result);
}
subString("ASentance", 1, 8);