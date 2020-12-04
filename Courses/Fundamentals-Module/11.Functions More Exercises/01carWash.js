function carWash(arr) {

    let cleanPercentage = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'soap') {
            cleanPercentage += 10;
        } else if (arr[i] === 'water') {
            cleanPercentage = cleanPercentage * (120 / 100);
        } else if (arr[i] === 'vacuum cleaner') {
            cleanPercentage = cleanPercentage * (125 / 100);
        } else if (arr[i] === 'mud') {
            cleanPercentage = cleanPercentage * (90 / 100);
        }
    }

    return `The car is ${cleanPercentage.toFixed(2)}% clean.`;
}
console.log(carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));