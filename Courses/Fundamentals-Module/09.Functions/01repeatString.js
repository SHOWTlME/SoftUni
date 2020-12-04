function repeat(word, repeatCounter) {

    let result = '';
    for (let i = 0; i < repeatCounter; i++) {
        result += word;
    }

    return result
}
console.log(repeat(`abc`, 3));