function storeProvision(inStock, ordered) {
    let obj = {};

    for (let i = 0; i < inStock.length; i += 2) {
        const element = inStock[i];
        obj[element] = Number(inStock[i + 1]);
    }

    let objKeys = Object.keys(obj);
    for (let j = 0; j < ordered.length; j += 2) {
        const element = ordered[j];

        for (const key of objKeys) {
            if (key === element) {
                obj[element] += Number(ordered[j + 1]);
            } else if (objKeys.includes(element) === false) {
                obj[element] = Number(ordered[j + 1]);
            }
        }
    }

    objKeys = Object.keys(obj);
    for (const key of objKeys) {
        console.log(`${key} -> ${obj[key]}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);