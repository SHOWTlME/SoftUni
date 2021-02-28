function storeCatalogue(arr) {
    const objectOfProducts = {};
    let sorted = arr.sort((a, b) => a.localeCompare(b));

    for (const element of sorted) {
        let [product, price] = element.split(' : ');

        if (!objectOfProducts.hasOwnProperty(product[0])) {
            objectOfProducts[product[0]] = { [product]: Number(price) };
        } else {
            objectOfProducts[product[0]][product] = Number(price);
        }
    }
    let result = '';
    for (const key in objectOfProducts) {
        let productsResult = objectOfProducts[key];

        result += `${key}\n`;
        for (const key in productsResult) {
            result += `  ${key}: ${productsResult[key]}\n`;
        }
    }
    return result;
}
console.log(storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']

));