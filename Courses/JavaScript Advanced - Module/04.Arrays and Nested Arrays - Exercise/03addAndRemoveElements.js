function addAndRemove(arr) {
    let startingNumber = 1;
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];

        if (command === 'add') {
            newArr.push(startingNumber);
        } else if (command === 'remove') {
            newArr.pop(startingNumber);
        }
        startingNumber++;
    }

    return newArr.length != 0 ? newArr.join('\n') : 'Empty';
}

console.log(addAndRemove(['add',
    'add',
    'remove',
    'add',
    'add']
));