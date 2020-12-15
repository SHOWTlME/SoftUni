function thirdCase(arr) {
    let guests = {};
    let command = arr.shift();
    let unlikedCount = 0;

    while (command !== 'Stop') {
        let tokens = command.split('-');

        if (tokens[0] === 'Like') {
            if (!guests.hasOwnProperty(tokens[1])) {
                guests[tokens[1]] = [];
            }
            if (!guests[tokens[1]].includes(tokens[2])) {
                guests[tokens[1]].push(tokens[2]);
            }
        } else if (tokens[0] === 'Unlike') {
            if (!guests.hasOwnProperty(tokens[1])) {
                console.log(`${tokens[1]} is not at the party.`);
            } else if (!guests[tokens[1]].includes(tokens[2])) {
                console.log(`${tokens[1]} doesn't have the ${tokens[2]} in his/her collection.`);
            } else if (guests[tokens[1]].includes(tokens[2])) {
                unlikedCount++;
                let index = guests[tokens[1]].indexOf(tokens[2]);
                guests[tokens[1]].splice(index, 1);
                console.log(`${tokens[1]} doesn't like the ${tokens[2]}.`);
            }
        }
        command = arr.shift();
    }
    let keys = Object.keys(guests);
    keys.sort((a, b) => a.localeCompare(b));
    keys.sort((a, b) => guests[b].length - guests[a].length);
    keys.forEach(x => {
        console.log(`${x}: ${guests[x].join(', ')}`);
    });
    console.log(`Unliked meals: ${unlikedCount}`);
}
thirdCase([
    'Like-Mike-frenchFries',
    'Like-Mike-salad',
    'Like-George-fruit',
    'Like-Steven-salad',
    'Unlike-Steven-salad',
    'Unlike-Steven-fruit',
    'Stop'
])