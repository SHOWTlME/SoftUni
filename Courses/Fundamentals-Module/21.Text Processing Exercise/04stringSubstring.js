function stringAndSubstring(word,text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    text = text.split(' ');
    
    if (text.includes(word)) {
        console.log(word);
    }else if (!text.includes(word)) {
        console.log(`${word} not found!`);
    }
}
stringAndSubstring('',
'Python is the best programming language')