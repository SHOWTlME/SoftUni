function autoCompany(carsArray) {
    const carRegister = {};
    let result = '';
    carsArray.forEach(car => {
        let [brand, model, quantity] = car.split(' | ');
        quantity = Number(quantity);
        if (!carRegister.hasOwnProperty(brand)) {
            carRegister[brand] = {};
        }
        if (!carRegister[brand].hasOwnProperty(model)) {
            carRegister[brand][model] = quantity;
        } else {
            carRegister[brand][model] += quantity;
        }
    });
    for (const car in carRegister) {
        result += `${car}\n`
        for (const model in carRegister[car]) {
            result += `###${model} -> ${carRegister[car][model]}\n`
        }
    }
    return result
}

console.log(autoCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']))