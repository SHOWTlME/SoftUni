function countStringOccurences(text, word) {
    let count = 0;
    let matcher = ` ${word} `;
    let index = text.indexOf(matcher);
    while (index !== -1) {
        index = text.indexOf(matcher, index + 1);
        count++;
    }
    if (text.startsWith(word)) {
        count++
    }
    if(text.endsWith(word)) {
        count++
    }
    console.log(count);
}
countStringOccurences("This is a word and it also is a sentence", "is");