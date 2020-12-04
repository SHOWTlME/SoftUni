function newHome(arg1, arg2, arg3) {
    let type = arg1;
    let flowerCount = Number(arg2);
    let budget = Number(arg3);
    let totalPrice = 0;

    if (type === "Roses") {
        totalPrice = 5 * flowerCount;
        if (flowerCount > 80) {
            totalPrice *= 90 / 100;
        }

    } else if (type === "Dahlias") {
        totalPrice = 3.8 * flowerCount;
        if (flowerCount > 90) {
            totalPrice *= 85 / 100;
        }

    } else if (type === "Tulips") {
        totalPrice = 2.8 * flowerCount;
        if (flowerCount > 80) {
            totalPrice *= 85 / 100;
        }

    } else if (type === "Narcissus") {
        totalPrice = 3 * flowerCount;
        if (flowerCount < 120) {
            totalPrice *=  115 / 100;
        }

    } else if (type === "Gladiolus") {
        totalPrice = 2.50 * flowerCount;
        if (flowerCount < 80) {
            totalPrice *= 120 / 100;
        }
    }let diff = budget - totalPrice;
     if (budget >= totalPrice){
        console.log(`Hey, you have a great garden with ${flowerCount} ${type} and ${diff.toFixed(2)} leva left.`);
    }else {
        console.log(`Not enough money, you need ${Math.abs(diff).toFixed(2)} leva more.`);
    }
}

newHome("Dahlias", "112", "460");