function perfectNumber(num) {

    result = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            result += i;
        }
    }

    return num === result ? `We have a perfect number!` : `It's not so perfect.`
}

console.log(perfectNumber(1236498));