function fundRisingCompany(days, workers, cakes, waffles, pancakes) {
    days = Number(days);
    workers = Number(workers);
    cakes = Number(cakes);
    waffles = Number(waffles);
    pancakes = Number(pancakes);

    // Цена на торти за 1 ден 
    let cakePrice = workers * cakes * 45;

    // Цена на гофрети за 1 ден
    let wafflePrice = workers * waffles * 5.80;

    // Цена на палачинки за 1 ден
    let pancakePrice = workers * pancakes * 3.20;

    // Обща сума събрана за 1 ден 
    let res = cakePrice + wafflePrice + pancakePrice;

    // Сума събрана за всички дни 
    let resOne = res * days;

    // Разходите за цялото време
    let resTwo = 1 / 8 * resOne;

    // Разходи - общатата сума = Пари за благотворителност
    let resThree = resOne - resTwo;

    console.log(resThree);
}
fundRisingCompany("131",
    "5",
    "9",
    "33",
    "46")