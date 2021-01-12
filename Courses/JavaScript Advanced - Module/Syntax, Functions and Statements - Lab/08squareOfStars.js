function squareOfStars(input) {
    if (input === undefined) {
        for (let j = 0; j < 5; j++) {
            let repeat = '* '.repeat(5);
            console.log(repeat);
        }
    }
    for (let i = 0; i < input; i++) {
        let repeat = '* '.repeat(input);
        console.log(repeat);
    }

}

squareOfStars();