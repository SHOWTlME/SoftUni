function heroicInventory(arr) {
    const heroes = [];

    for (const element of arr) {
        const heroObj = {};
        [heroName, heroLevel, weapons] = element.split(' / ');
        const items = weapons ? weapons.split(', ') : [];
        heroObj.name = heroName;
        heroObj.level = Number(heroLevel);
        heroObj.items = items;
        heroes.push(heroObj);
    }

    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    'Isacc / 25 / ',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']));