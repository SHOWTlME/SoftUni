function party(inputArr) {
    let list = [];

    for (let i = 0; i < inputArr.length; i++) {
        let isTrue = true;
        let name = inputArr[i].split(' ');
        let notGoing = inputArr[i].split(' ');
        name = name[0];

        for (let j = 0; j < inputArr.length; j++) {
            let isEqual = inputArr[j].split(' ')

            if (notGoing[2] !== isEqual[2] && notGoing[0] === isEqual[0]) {
                isTrue = false;
                break;
            }
        }

        if (!list.includes(name) && isTrue === true) {
            list.push(name);
        } else if (list.includes(name) && isTrue === true) {
            console.log(`${name} is already in the list!`);
        } if (notGoing[2] === 'not' && isTrue === true) {
            console.log(`${name} is not in the list!`);
            list.pop();
        }
    }

    console.log(list.join('\n'));
}
party(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);