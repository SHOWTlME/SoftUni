function loadingBar(n) {

    let loadingArr = [];

    for (let i = 0; i <= 100; i++) {
        if (i < n && i % 10 === 0) {
            loadingArr.push(`%`);
        } else if (i > n && i % 10 === 0) {
            loadingArr.push(`.`);
        }
    }

    if (n < 100) {
        console.log(`${n}% [${loadingArr.join('')}]`);
        console.log(`Still loading...`);
    } else if (n === 100) {
        console.log(`${n}% Complete!`);
        console.log(`[${loadingArr.join('')}]`);
    }
}

loadingBar(100);