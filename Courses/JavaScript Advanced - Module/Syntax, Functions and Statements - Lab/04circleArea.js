function circleArea(input) {
    let type = typeof input;

    if (type !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    } else {
        let pow = Math.pow(input, 2);
        let result = Math.PI * pow;
        console.log(result.toFixed(2));
    }
}

circleArea(5);
circleArea('name');