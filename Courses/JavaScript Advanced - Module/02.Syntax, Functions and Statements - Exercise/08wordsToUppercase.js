function wordsToUppercase(sentence) {
    let pattern = /[\,\?\:\!\'\`]/g;
    sentence = sentence.replace(pattern, '')
    let toUpper = sentence.toUpperCase();
    toUpper = toUpper.replace('.',' ').replace('.','');
    return toUpper.split(' ').join(', ')
}
console.log(wordsToUppercase('Functions in JS can be nested, i.e. hold other functions'));
console.log(wordsToUppercase('Hi, how are you?'));
console.log(wordsToUppercase('hello'));


