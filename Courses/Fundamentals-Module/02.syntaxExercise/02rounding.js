function rounding(roundingNumber, precision) {
    if (precision > 15) {
        precision = 15;
    }
    console.log(parseFloat(roundingNumber.toFixed(precision)))
}
rounding(10.5, 3);