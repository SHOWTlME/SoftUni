function birthdayParty(rent) {
    rent = Number(rent);

//⦁	Торта  – цената ѝ е 20% от наема на залата
    let cakePrice = rent * 0.20;

//⦁	Напитки – цената им е 45% по-малко от тази на тортата
    let drinks = cakePrice * 0.55;

//⦁	Аниматор – цената му е 1/3 от цената за наема на залата
    let fun = 1 / 3 * rent;

// Resault
    let res = cakePrice + drinks + fun + rent;

    console.log(res);
}

birthdayParty("2250");