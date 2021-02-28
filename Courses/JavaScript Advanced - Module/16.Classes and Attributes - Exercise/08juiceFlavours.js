function juiceFlavours(products) {
    const storage = {};
    let result = '';

    for (const product of products) {
        let [fruit, quantity] = product.split(' => ');
        quantity = Number(quantity);
        if (!storage.hasOwnProperty(fruit) && quantity >= 1000) {
            storage[fruit] = 0;
        }
        if (quantity >= 1000) {
            storage[fruit] += quantity;
        }
    }

    for (const product of products) {
        let [fruit, quantity] = product.split(' => ');
        quantity = Number(quantity);
        if (!storage.hasOwnProperty(fruit) && quantity < 1000) {
            storage[fruit] = 0;
        }
        if (quantity < 1000) {
            storage[fruit] += quantity;
        }
    }
    for (const juice in storage) {
        let bottles;
        if (storage[juice] >= 1000) {
            bottles = Math.floor(storage[juice] / 1000);
            result += `${juice} => ${bottles}\n`;
        }
    }

    return result
}
console.log(juiceFlavours(['Orange => 112312',
'Peach => 1',
'Banana => 1']));