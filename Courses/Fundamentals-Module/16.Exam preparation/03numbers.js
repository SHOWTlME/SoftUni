function numbers(input) {
    let sequences = input.split(' ').map(Number);
    let sum = 0;

    for (let element of sequences) {
        sum += element;
    }

    let average = sum / sequences.length;
    let topNumbers = sequences.filter(x => x > average);

    topNumbers.sort((a, b) => b - a);
    if (sequences.length < 5) {
        console.log('No');
    } else {
        console.log(topNumbers.slice(0, 5).join(' '));
    }
}

numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51');

