function arrayModifier(input) {
    let sequence = input.shift().split(' ').map(Number);
    let command = input.shift();

    while(command !== 'end') {
        let tokens = command.split(' ');
        switch (tokens[0]) {
            case 'swap': {
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                let temp = sequence[index1];
                sequence[index1] = sequence[index2];
                sequence[index2] = temp;
                break;
            }
            case 'multiply':{
                let index1 = Number(tokens[1]);
                let index2 = Number(tokens[2]);
                sequence[index1] *= sequence[index2];
                break;
            }
            case 'decrease': 
                sequence = sequence.map(x => x - 1);
                break;
        }
        command = input.shift();
    }
    console.log(sequence.join(', '));
}
arrayModifier( [
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
  ]);