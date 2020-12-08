function heroesOfCode(arr) {
    let heroesCount = arr.shift();
    let heroes = {};
    let command = arr.shift();
    let count = 0;

    while (count < heroesCount) {
        let [name, hp, manna] = command.split(' ');

        if (!heroes.hasOwnProperty(name)) {
            heroes[name] = [];
        }
        hp = Number(hp);
        manna = Number(manna);
        if (hp <= 100 && manna <= 200) {
            heroes[name].push(hp);
            heroes[name].push(manna);
        }
        count++
        command = arr.shift();
    }

    while (command !== 'End') {
        let tokens = command.split(' - ');

        if (tokens[0] === 'Heal') {
            let healNumber = Number(tokens[2]);
            heroes[tokens[1]][0] += healNumber;
            if (heroes[tokens[1]][0] > 100) {
                healNumber = heroes[tokens[1]][0];
                heroes[tokens[1]][0] = 100;
                healNumber -= 100;
                healNumber = Number(tokens[2]) - healNumber;
            }
            console.log(`${tokens[1]} healed for ${healNumber} HP!`);
        } else if (tokens[0] === 'Recharge') {
            let mannaNumber = Number(tokens[2]);
            heroes[tokens[1]][1] += mannaNumber;
            if (heroes[tokens[1]][1] > 200) {
                mannaNumber = heroes[tokens[1]][1];
                heroes[tokens[1]][1] = 200;
                mannaNumber -= 200;
                mannaNumber = Number(tokens[2]) - mannaNumber;
            }
            console.log(`${tokens[1]} recharged for ${mannaNumber} MP!`);
        } else if (tokens[0] === 'TakeDamage') {
            heroes[tokens[1]][0] -= Number(tokens[2]);
            if (heroes[tokens[1]][0] <= 0) {
                delete heroes[tokens[1]];
                console.log(`${tokens[1]} has been killed by ${tokens[3]}!`);
            } else {
                console.log(`${tokens[1]} was hit for ${tokens[2]} HP by ${tokens[3]} and now has ${heroes[tokens[1]][0]} HP left!`);
            }
        } else if (tokens[0] === 'CastSpell') {
            let requiredManna = Number(tokens[2]);
            if (heroes[tokens[1]][1] >= requiredManna) {
                heroes[tokens[1]][1] -= requiredManna;
                console.log(`${tokens[1]} has successfully cast ${tokens[3]} and now has ${heroes[tokens[1]][1]} MP!`);
            } else {
                console.log(`${tokens[1]} does not have enough MP to cast ${tokens[3]}!`);
            }
        }
        command = arr.shift();
    }

    let keys = Object.keys(heroes)
        .sort((a, b) => a.localeCompare(b))
    keys.sort((a, b) => heroes[b][0] - heroes[a][0]);

    for (const key of keys) {
        console.log(`${key}`);
        console.log(`  HP: ${heroes[key][0]}`);
        console.log(`  MP: ${heroes[key][1]}`);
    }
}
heroesOfCode([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]
);
