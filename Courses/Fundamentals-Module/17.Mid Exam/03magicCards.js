function magicCards(arr) {
    let cards = arr.shift().split(':');
    let newDeck = [];

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        if (command[0] === 'Add') {
            if (cards.includes(command[1])) {
                newDeck.push(command[1]);
            } else {
                console.log("Card not found.");
            }
        } else if (command[0] === 'Insert') {
            let cardIndex = Number(command[2]);
            if (cards.includes(command[1]) && cards[cardIndex] !== undefined) {
                newDeck.splice(cardIndex, 0, command[1])
            } else {
                console.log('Error!');
            }
        } else if (command[0] === 'Remove') {
            if (newDeck.includes(command[1])) {
                let index = newDeck.indexOf(command[1]);
                newDeck.splice(index, 1);
            } else {
                console.log("Card not found.");
            }
        } else if (command[0] === 'Swap') {
            let index1 = newDeck.indexOf(command[1]);
            let index2 = newDeck.indexOf(command[2]);
            let savedVar = newDeck[index2];
            newDeck[index2] = newDeck[index1];
            newDeck[index1] = savedVar;
        } else if (command[0] === 'Shuffle') {
            newDeck.reverse()
        } else if (command[0] === 'Ready') {
            console.log(newDeck.join(' '));
        }
    }
}
magicCards((["Wrath:Pounce:Lifeweaver:Exodia:Aso:Pop",
    "Add Pop",
    "Add Exodia",
    "Add Aso",
    "Remove Wrath",
    "Add SineokBqlDrakon",
    "Shuffle deck",
    "Insert Pesho 0",
    "Ready"]));