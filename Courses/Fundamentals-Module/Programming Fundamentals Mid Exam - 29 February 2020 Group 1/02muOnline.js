function muOnline(dungeon) {
    let health = 100;
    let bitcoins = 0;
    let bestRoom = 0;
    dungeon = dungeon.split('|');

    for (const room of dungeon) {
        let [command, number] = room.split(' ');
        bestRoom++

        if (command === 'potion') {
            health += Number(number);
            if (health > 100) {
                let holder = (100 + Number(number)) - health;
                health = 100;
                console.log(`You healed for ${holder} hp.`);
            } else if (health <= 100) {
                console.log(`You healed for ${number} hp.`);
            }
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            bitcoins += Number(number);
            console.log(`You found ${number} bitcoins.`);
        } else {
            health -= Number(number);
            if (health <= 0) {
                console.log(`You died! Killed by ${command}.`);
                break;
            } else {
                console.log(`You slayed ${command}.`);
            }
        }
    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    } else {
        console.log(`Best room: ${bestRoom}`);
    }

}
muOnline('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');