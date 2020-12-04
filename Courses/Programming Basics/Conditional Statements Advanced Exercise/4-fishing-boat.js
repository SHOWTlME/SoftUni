function fishingBoat(arg1, arg2, arg3) {
    let budget = Number(arg1);
    let season = arg2;
    let fisherman = Number(arg3);
    let totalPrice = 0;

    switch (season) {
        case "Spring":
            if (fisherman <= 6) {
                totalPrice = 3000 * 90 / 100;
            } else if (fisherman <= 11) {
                totalPrice = 3000 * 85 / 100;
            }
            else if (fisherman > 12) {
                totalPrice = 3000 * 75 / 100;
            }
            if (fisherman % 2 == 0) {
                totalPrice *=  95 / 100;
            }; break;
        case "Summer":
            if (fisherman <= 6) {
                totalprice = 4200 * 90 / 100;
            } else if (fisherman <= 11) {
                totalPrice = 4200 * 85 / 100;
            } else if (fisherman > 12) {
                totalPrice = 4200 * 75 / 100;
            } if (fisherman % 2 == 0) {
                totalPrice *= 95 / 100;
            }
            ; break;
        case "Autumn":
            if (fisherman <= 6) {
                totalPrice = 4200 * 90 / 100;
            } else if (fisherman <= 11) {
                totalPrice = 4200 * 85 / 100;
            } else if (fisherman > 12) {
                totalPrice = 4200 * 75 / 100;
            }; break;
        case "Winter":
            if (fisherman <= 6) {
                totalPrice = 2600 * 90 / 100;
            } else if (fisherman <= 11) {
                totalPrice = 2600 * 85 / 100;
            } else if (fisherman > 12) {
                totalPrice = 2600 * 75 / 100;
            } if (fisherman % 2 == 0) {
                totalPrice *= 95 / 100;
            }; break;
    } let diff = budget - totalPrice;
    if (budget >= totalPrice) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(diff).toFixed(2)} leva.`);
    }

}

fishingBoat("3000", "Summer", "11");