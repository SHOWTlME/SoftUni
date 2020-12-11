function invent(arr) {
    let inventory = arr.shift().split(', ');
    let command = arr.shift();

    while (command !== 'Craft!') {
        let tokens = command.split(' - ');
        if (tokens[0] === 'Collect') {
            if (!inventory.includes(tokens[1])) {
                inventory.push(tokens[1]);
            }
        } else if (tokens[0] === 'Drop') {
            if (inventory.includes(tokens[1])) {
                let index = inventory.indexOf(tokens[1]);
                inventory.splice(index, 1);
            }
        } else if (tokens[0] === 'Combine Items') { //PROBLEM
            let split = tokens[1].split(':');
            if (inventory.includes(split[0])) {
                let index = inventory.indexOf(split[0]);
                inventory.splice(index, 1,split[0],split[1]);
            }
        } else if (tokens[0] === 'Renew') {
            if (inventory.includes(tokens[1])) {
                let index = inventory.indexOf(tokens[1]);
                inventory.splice(index, 1);
                inventory.push(tokens[1])
            }
        }
        command = arr.shift();
    }
    console.log(inventory.join(', '));
}
invent([ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]);