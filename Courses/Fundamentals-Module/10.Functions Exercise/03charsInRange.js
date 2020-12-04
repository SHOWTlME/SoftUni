function characterInRange(x, y) {

    let start = '';
    let end = '';
    let result = '';
    if (x < y) {
        start = x.charCodeAt();
        end = y.charCodeAt();
    } else if (y < x) {
        start = y.charCodeAt();
        end = x.charCodeAt();
    }

    for (let i = start + 1; i < end; i++) {
        result += ' ' + String.fromCharCode(i);
    }

    return result;
    
}

console.log(characterInRange('C',
    '#'));