function wordsTracker(input) {
    let words = {};
    let firstLine = input.shift().split(' ');
   
    for (let element of firstLine) {
        words[element] = 0;
    }
   
    for (const word of input) {
        if (words.hasOwnProperty(word)) {
            words[word]++;
        }
    }
    let keys = Object.keys(words);
    keys.sort((a, b) => words[b] - words[a]);

    for (const key of keys) {
        console.log(`${key} - ${words[key]}`);
    }
}
wordsTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the'
    , 'words', 'this', 'this', 'this', 'this', 'this', 'and', 'sentence', 'sentence', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);