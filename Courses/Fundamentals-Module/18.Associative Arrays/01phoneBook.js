function phoneBook(arr) {
    let contacts = {};

    for (const line of arr) {
        let [name, phone] = line.split(' ');
        contacts[name] = phone;
    }

    for (let key in contacts) {
        console.log(`${key} -> ${contacts[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);