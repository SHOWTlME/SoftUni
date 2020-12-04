function godzilla(budget, count, price) {
    budget = Number(budget);
    count = Number(count);
    price = Number(price);

    let decor = 10 / 100 * budget;
    let wearPrice = count * price;
    let total = 0;

    if (count > 150) {
        wearPrice = wearPrice * 90 / 100;
    }
    total = decor + wearPrice;
    let diff = Math.abs(total - budget);
    if (total > budget) {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    } else {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}

godzilla("20000",
    "120",
    "55.5")
