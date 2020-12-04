function piccolo(input) {
    let parking = new Map();

    for (const line of input) {
        let car = line.split(', ');

        if (car[0] === 'IN') {
            parking.set(car[1], car[0]);
        } else if (car[0] === 'OUT') {
            parking.delete(car[1]);
        }
    }
    
    let sorted = Array.from(parking)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(element => {
            console.log(element[0]);
        });
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);