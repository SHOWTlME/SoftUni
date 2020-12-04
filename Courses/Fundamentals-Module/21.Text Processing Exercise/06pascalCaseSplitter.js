function caseSpliter(word) {
    let result = [];
    let capIndex = 0;

    for (let i = 1; i < word.length; i++) {
        if (word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90) {
            let newWord = word.substring(capIndex, i);
            result.push(newWord);
            capIndex = i;
        }
    }
    result.push(word.substring(capIndex, word.length));
    console.log(result.join(', '));
}
caseSpliter('SplitMeIfYouCanHaHaYouCantOrYouCan');