function storage(arr) {

    let groceries = new Map();

    for (const line of arr) {
        let [grocery, quantity] = line.split(' ');
        quantity = Number(quantity)

        if (groceries.has(grocery)) {
            let quantity1 = groceries.get(grocery);

            quantity += quantity1;
            groceries.set(grocery, quantity);
        } else {
            groceries.set(grocery, quantity)
        }
    }

    for (const [name, quantity] of groceries) {
        console.log(`${name} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);