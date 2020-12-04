function power(basis, degree) {

    result = 1;
    for (let i = 0; i < degree; i++) {
        result = result * basis;
    }

    return result;
}
console.log(power(3, 4));