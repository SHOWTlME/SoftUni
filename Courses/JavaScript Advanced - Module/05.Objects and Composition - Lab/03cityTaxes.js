function cityTaxes(city, population, treasury) {
    const cityInfo = {
        name: city,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            return this.population += this.population * percentage / 100;
        },
        applyRecession(percentage) {
            return this.treasury -= this.treasury * percentage / 100;
        }
    };

    return cityInfo
}


const city =
    cityTaxes('Tortuga',
        7000,
        15000);
console.log(city);

city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);