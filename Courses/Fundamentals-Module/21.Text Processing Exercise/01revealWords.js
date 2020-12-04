function revealWords(words, text) {
    words = words.split(', ');

    for (const word of words) {
        let repeatAsterisks = '*'.repeat(word.length);
        text = text.replace(repeatAsterisks, word);
    }
    console.log(text);
}
revealWords('learning, great',
    'softuni i.s ***** place. for ******** .new progra.mming langua.ges *****');