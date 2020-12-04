function bags(arg1, arg2, arg3, arg4) {
    let weightPrice = Number(arg1);
    let bagKilograms = Number(arg2);
    let daysLeft = Number(arg3);
    let bagsCount = Number(arg4);
    let total = 0;

    if (bagKilograms <= 10) {
        total = weightPrice * 20/100;
    } else if (bagKilograms <= 20) {
        total = weightPrice * 50 / 100;
    }else if (bagKilograms > 20) {
        total = weightPrice;
    }
    if (daysLeft > 30) {
        total *= 110 / 100;
    }  else if (daysLeft < 7) {
        total *= 140 / 100;
    }
    else if (daysLeft <= 30 || daysLeft > 7) {
        total *= 115 / 100;
     } 

    console.log(`The total price of bags is: ${(total * bagsCount).toFixed(2)} lv.`);
    }
    bags("25.50","5","36","6",)