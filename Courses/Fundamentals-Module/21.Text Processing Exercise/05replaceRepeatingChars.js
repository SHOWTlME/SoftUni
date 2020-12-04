function replace(word) {
    let result = '';
    
    for(let i = 0; i < word.length; i++) {
        if (word[i] !== word[i + 1]) {
            result += word[i];
        }
    }
    console.log(result);
}
replace('aaaaabbbbbcdddeeeedssaa');