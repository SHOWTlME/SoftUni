function firstProblem(arr) {
    let price = Number(arr.shift());
    let months = Number(arr.shift());
    let savings = 0;

    for (let i = 1; i <= months; i++) {
        if (i % 2 !== 0 && i !== 1) {
            savings -= 0.16 * savings;
        }
        if (i % 4 === 0) {
            savings += 0.25 * savings;
        }
        savings += 0.25 * price;
    }

    if (savings >= price) {
        let moneyForSouvenirs = savings - price;
        console.log(`Bravo! You can go to Disneyland and you will have ${moneyForSouvenirs.toFixed(2)}lv. for souvenirs.`);
    } else if (savings < price) {
        let notEnoughMoney = price - savings;
        console.log(`Sorry. You need ${notEnoughMoney.toFixed(2)}lv. more.`);
    }
}

firstProblem(["3265", "3"]);