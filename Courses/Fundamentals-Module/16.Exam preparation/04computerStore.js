function computerStore(input) {
    let isSpecial = input.pop();
    let priceWithTax = 0;
    let priceWithoutTax = 0;
    let taxes = 0;
    input = input.map(Number);
    for (let element of input) {
        if (element < 0){
            console.log("Invalid price!");
        }else {
            priceWithTax += element;
            priceWithoutTax += element;
        }
    }
    if (isSpecial === 'special') {
        taxes = priceWithTax * 0.20;
        priceWithTax = priceWithTax + taxes;
        priceWithTax = priceWithTax * 0.9;
    } else {
        taxes = priceWithTax * 0.20;
        priceWithTax = priceWithTax * 1.20;
    }
    if (priceWithTax > 0) {
        console.log(`Congratulations you've just bought a new computer!\nPrice without taxes: ${priceWithoutTax.toFixed(2)}$\nTaxes: ${taxes.toFixed(2)}$\n -----------\nTotal price: ${priceWithTax.toFixed(2)}$`);
    } else if (priceWithTax === 0) {
        console.log("Invalid order!");
    } 
}
computerStore([
    '1050', 
    '200', 
    '450',
    '2', 
    '18.50', 
    '16.86', 
    'special'
    ]);
