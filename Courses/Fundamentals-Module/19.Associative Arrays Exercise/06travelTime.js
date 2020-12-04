function travelTime(input) {
    let destinations = {};

    input.forEach(line => {
        let [country, city, price] = line.split(' > ');
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
        }
        if (!destinations[country].hasOwnProperty(city)) {
            destinations[country][city] = Number(price);
        } else if (destinations[country].hasOwnProperty(city)) {
            destinations[country][city] = Math.min(destinations[country][city], Number(price));
        }
    });
    
    let newArr = Object.entries(destinations)
    newArr.sort((a, b) => a[0].localeCompare(b[0]) || Number(Object.values(a[1]) - Number(Object.values(b[1]))))
        .forEach(x => {
            let cities = '';
            Object.entries(x[1]).forEach(city => {
                cities += `${city[0]} -> ${city[1]} `;
            });
            console.log(`${x[0]} -> ${cities}`);
        });

}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 100",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);
