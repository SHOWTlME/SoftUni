function inventory(arr) {
    let heroes = [];

    for (const element of arr) {
        let [hero, level, items] = element.split(' / ');

        level = Number(level);
        items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        let obj = {
            Hero: hero,
            level: level,
            items: items
        };
        heroes.push(obj);
    }

    heroes.sort((a, b) => a.level - b.level);
    for (const hero of heroes) {
        let keys = Object.keys(hero);

        for (const key of keys) {
            if (key === 'Hero') {
                console.log(`${key}: ${hero[key]}`);
            } else {
                console.log(`${key} => ${hero[key]}`);
            }
        }
    }
}
inventory([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);