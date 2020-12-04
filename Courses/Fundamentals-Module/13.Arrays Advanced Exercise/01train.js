function train(arr) {

    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            let newWagon = Number(command[1]);
            wagons.push(newWagon);
        } else {
            let n = Number(arr[i]);
            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + n <= capacity) {
                    wagons[j] += n;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));

}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);