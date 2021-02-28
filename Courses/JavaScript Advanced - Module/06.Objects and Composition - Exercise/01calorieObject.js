function calorieObject(arr) {
    let calories = {};

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (i % 2 === 0) {
            calories[element] = Number(arr[i + 1]);
        }
    }
    return calories;
}
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));