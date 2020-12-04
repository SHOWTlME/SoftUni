function addresBook(arr) {

    let personalAddresses = {};

    for (let line of arr) {

        let [name, address] = line.split(':');
        personalAddresses[name] = address;
    }
    let sorted = Object.entries(personalAddresses);

    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let key of sorted) {
        console.log(`${key[0]} -> ${key[1]}`);
    }
}
addresBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);