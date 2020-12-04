function jsonConverter(name,lastName,hairColor) {
    let currentObject = {
        name,
        lastName,
        hairColor
    }
    let convertToJson = JSON.stringify(currentObject);
    console.log(convertToJson);
}
jsonConverter('George',
'Jones',
'Brown');