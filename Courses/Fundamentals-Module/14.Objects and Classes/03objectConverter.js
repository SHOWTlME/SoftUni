function objectConverter(input) {
    let toObj = JSON.parse(input);
    let objKeys = Object.keys(toObj);

    for (let key of objKeys) {
        console.log(`${key}: ${toObj[key]}`);
    }
}
objectConverter('{"name": "George", "age": 40, "town": "Sofia"}');