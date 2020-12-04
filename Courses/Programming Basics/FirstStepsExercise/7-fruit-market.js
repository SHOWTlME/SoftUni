function fruitMarket(strawberryPrice, bananaKg, orangesKg, raspberryKg, strawberryKg) {

    strawberryPrice = Number(strawberryPrice);
    bananaKg = Number(bananaKg);
    orangesKg = Number(orangesKg);
    raspberryKg = Number(raspberryKg);
    strawberryKg = Number(strawberryKg);

    // ⦁	цената на малините е на половина по-ниска от тази на ягодите;
    let raspberryPrice = strawberryPrice * 0.50;

    // ⦁	цената на портокалите е с 40% по-ниска от цената на малините;
    let orangesPrice = raspberryPrice - (0.4 * raspberryPrice);

    // ⦁	цената на бананите е с 80% по-ниска от цената на малините.
    let bananaPrice = raspberryPrice - (0.8 * raspberryPrice);

    // Сума на ягодите 
    let strawberrySum = strawberryPrice * strawberryKg;

    // сума на бананите 
    let bananaSum = bananaPrice * bananaKg;

    // сума на портокалите 
    let orangeSum = orangesPrice * orangesKg;

    // сума на малините 
    let raspberrySum = raspberryPrice * raspberryKg;

    // обща сума
    let summ = strawberrySum + bananaSum + orangeSum + raspberrySum;

    console.log(summ);
}
fruitMarket("48", // Цена на ягодите в лева 
    "10",         // Количество на бананите в килограми 
    "3.3",        // Количество на портокалите в килограми 
    "6.5",        // Количество на малините в килограми 
    "1.7")       // Количество на ягодите в килограми 