function fuelMoney(distance, passengers, fuelPricePerLiter) {
    let fuelPrice = distance / 100 * 7 + (0.100 * passengers);
    let money = fuelPrice * fuelPricePerLiter;
    console.log(`Needed money for that trip is ${money}lv.`);
}
fuelMoney(260, 9, 2.49);
fuelMoney(90, 14, 2.88);