function cityRecord(city, population, treasury) {
    const cityInfo = {
        name: city,
        population: population,
        treasury: treasury
    };

    return cityInfo;
}

console.log(cityRecord('Tortuga',7000,15000));