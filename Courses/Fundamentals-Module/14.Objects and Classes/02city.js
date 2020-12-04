function cityInfo(input) {

    let value = Object.keys(input);

    for (let key of value) {
        console.log(`${key} -> ${input[key]}`);
    }
}

let city = {
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
cityInfo(city)