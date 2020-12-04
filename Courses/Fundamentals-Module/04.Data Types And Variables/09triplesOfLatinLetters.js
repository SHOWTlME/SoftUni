function latinLetters (num) {
    let letter = String.fromCharCode(97+num);
    for (let i = 0; i < num; i++){
        letter += 1
        console.log(letter);
        for (let j = 0; j < num; j++) {
            letter += 1;
            console.log(letter);
            for (let z = 0; z < num; z++){
                letter += ``
                console.log(letter);
            }
        }
    }
}
latinLetters(3);