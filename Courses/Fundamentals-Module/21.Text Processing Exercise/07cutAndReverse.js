function cutAndReverse(word) {
    let firstHalf = [];
    let secondHalf = [];
    let half = word.length / 2;

    for(let i = 0; i < half; i++) {
        firstHalf.push(word[i])
    }
    for (let j = word.length - 1; j >= word.length / 2; j--) {
       secondHalf.push(word[j])
    }

    console.log(firstHalf.reverse().join(''));
    console.log(secondHalf.join(''));
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');