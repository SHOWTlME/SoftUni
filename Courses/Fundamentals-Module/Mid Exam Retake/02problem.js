function secondProblem(arr) {
    let gifts = arr.shift().split(' ');
    let command = arr.shift();

    while (command !== 'No Money') {
        let tokens = command.split(' ');

        if (tokens[0] === 'OutOfStock') {
            if (gifts.includes(tokens[1])) {
                let index = gifts.indexOf(tokens[1])
                if (index !== -1 && index < gifts.length) {
                    while (index !== -1) {
                        gifts.splice(index, 1, 'None')
                        index = gifts.indexOf(tokens[1]);
                    }
                }
            }
        } else if (tokens[0] === 'Required') {
            let index = Number(tokens[2]);
            if (index !== -1 && index <= gifts.length + 1) {
                gifts.splice(index, 1, tokens[1]);
            }
        } else if (tokens[0] === 'JustInCase') {
            gifts.pop();
            gifts.push(tokens[1]);
        }
        command = arr.shift();
    }
    let result = gifts.filter(gift => gift !== 'None');
    console.log(result.join(' '));
}
secondProblem([
    'Sweets Cozonac Clothes Flowers Wine Clothes Eggs Clothes',
    'Required Paper 8',
    'OutOfStock Clothes',
    'Required Chocolate 7',
    'JustInCase Hat',
    'OutOfStock Cable',
    'No Money'
  ]
  );