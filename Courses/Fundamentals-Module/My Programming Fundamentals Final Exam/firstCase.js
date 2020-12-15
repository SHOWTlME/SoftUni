function firstCase(arr) {
    let text = arr.shift();

    for (const command of arr) {
        let tokens = command.split(' ');
        if (tokens[0] === 'Translate') {
            let regex = new RegExp(`${tokens[1]}`, `g`); // tova e ok

            text = text.replace(regex, tokens[2]);
            console.log(text);
        } else if (tokens[0] === 'Includes') { // tova e ok
            let isTrue = text.includes(tokens[1]);
            if (isTrue) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (tokens[0] === 'Start') { // tova e ok
            let isTrue = text.startsWith(tokens[1]);
            if (isTrue) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (command === 'Lowercase') { // tovae  ok
            text = text.toLowerCase();
            console.log(text);
        } else if (tokens[0] === 'FindIndex') { // tova e ok
            let index = text.lastIndexOf(tokens[1]);
            console.log(index);
        } else if (tokens[0] === 'Remove') { // tova ne e ok
            let substr = text.substring(Number(tokens[1]),Number(tokens[2]));
            text = text.replace(substr,'');
            console.log(text);
        }
    }
}
firstCase([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);