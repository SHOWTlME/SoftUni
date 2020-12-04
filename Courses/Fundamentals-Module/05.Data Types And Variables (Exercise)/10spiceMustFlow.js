function spiceMustFlow(startingYield) {
    let days = 0;
    let totalAmountSpice = 0;

    while (startingYield >= 100) {
        totalAmountSpice += (startingYield - 26);
        startingYield -= 10;
        days++;
    }
    if (totalAmountSpice > 26) {
        totalAmountSpice -= 26
    }
    console.log(days);
    console.log(totalAmountSpice);
}
spiceMustFlow(111);