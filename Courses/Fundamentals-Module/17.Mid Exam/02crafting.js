function crafting(input) {
    let weapon = input.shift().split('|');
    let oddOrEven = '';

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' ');

        if (command[1] === 'Right') {
            let saveIndex1 = Number(command[2]);
            let saveIndex2 = Number(command[2]);
            saveIndex1 += 1;
            let savedVar = weapon[saveIndex1];
            if (weapon[saveIndex1] !== undefined) {
                weapon[saveIndex1] = weapon[saveIndex2]
                weapon[saveIndex2] = savedVar;
            }
        } else if (command[1] === 'Left') {
            let savedIndex1 = Number(command[2]);
            let savedIndex2 = Number(command[2]);
            savedIndex1 -= 1;
            let savedVar = weapon[savedIndex1];
            if (weapon[savedIndex1] !== undefined) {
                weapon[savedIndex1] = weapon[savedIndex2];
                weapon[savedIndex2] = savedVar;
            }
        } else if (command[1] === 'Odd') {
            for (let j = 0; j < weapon.length; j++) {
                if (j % 2 !== 0) {
                    oddOrEven += weapon[j] + ' ';
                }
            }
        } else if (command[1] === "Even") {
            for (let z = 0; z < weapon.length; z++) {
                if (z % 2 === 0) {
                    oddOrEven += weapon[z] + ' ';
                }
            }
        } else if (command[0] === 'Done') {
            console.log(oddOrEven);
            console.log(`You crafted ${weapon.join('')}!`);
        }
    }
}
crafting(['Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done']);