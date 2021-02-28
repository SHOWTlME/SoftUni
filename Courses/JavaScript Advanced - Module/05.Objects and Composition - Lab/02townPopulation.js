function townPopulation(arr) {
    const townInfo = {};

    for (const element of arr) {
        let [city, population] = element.split(' <-> ');
        if (!townInfo.hasOwnProperty(city)) {
            townInfo[city] = Number(population);
        } else {
            townInfo[city] += Number(population);
        }
    }

    const keys = Object.keys(townInfo);
    let townList = '';
    for (const key of keys) {
        townList += `${key} : ${townInfo[key]}\n`;
    }

    return townList;
}

console.log(townPopulation(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']));