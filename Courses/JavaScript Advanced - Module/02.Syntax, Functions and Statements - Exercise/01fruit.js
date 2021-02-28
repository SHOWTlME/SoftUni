function fruit(fruit, weight, pricePerKilo) {
    let currentWeight = weight / 1000;
    let result = currentWeight * pricePerKilo;


    return `I need $${result.toFixed(2)} to buy ${currentWeight.toFixed(2)} kilograms ${fruit}.`
}

console.log(fruit('orange', 2500, 1.80));
console.log(fruit('apple', 1563, 2.35));
