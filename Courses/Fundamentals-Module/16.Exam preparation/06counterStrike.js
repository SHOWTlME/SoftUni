function counterStrike(arr) {
    let energy = arr.shift();
    let wonBattles = 0;

    for (let i = 0; i < arr.length; i++) {
        if (energy >= arr[i]) {
            energy -= arr[i];
            wonBattles++;
            if (wonBattles % 3 === 0) {
                energy += wonBattles;
            }
        } else if (arr[i] === 'End of battle') {
            console.log(`Won battles: ${wonBattles}. Energy left: ${energy}`);
        } else {
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${energy} energy`);
            break;
        }
    }
}
counterStrike([200,
    54,
    14,
    28,
    13,
    'End of battle']);