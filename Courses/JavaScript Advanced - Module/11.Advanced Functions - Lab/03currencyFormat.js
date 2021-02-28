function createFormatter(separator,symbol,symbolFirst,formaterFunc) {
    const separator1 = separator;
    const symbol1 = symbol;
    const symbolFirs1 = symbolFirst;

    function myFunc (value) {
        const result = formaterFunc(separator1,symbol1,symbolFirs1,value)
        
        return result;
    }
    return myFunc;
}

let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));   // $ 5345,00
console.log(dollarFormatter(3.1429)); // $ 3,14
console.log(dollarFormatter(2.709));  // $ 2,71

function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2,2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}