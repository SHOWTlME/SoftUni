function argumentInfo(...inputArray) {
    let strCounter = 0;
    let numberCounter = 0;
    let functionCounter = 0;
    let result = '';

    inputArray.forEach(element => {
        if (typeof element === 'string') {
            result += `string: ${element}\n`;
            strCounter++;
        } else if (typeof element === 'number') {
            result += `number: ${element}\n`;
            numberCounter++;
        } else if (typeof element === 'function') {
            result += `function: ${element}\n`;
            functionCounter++;
        }
    });
    result += `string = ${strCounter}\n`;
    result += `number = ${numberCounter}\n`;
    result += `function = ${functionCounter}\n`;

    return result;
}
const myFunc = function () { console.log('Hello world!') }
console.log(argumentInfo('cat', 42, myFunc));
