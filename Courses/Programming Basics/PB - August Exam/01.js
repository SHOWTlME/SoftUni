function solve(arg1, arg2) {
    let catBed = Number(arg1);
    let catToilet = Number(arg2);
    let result = 0;
    let catFood = 0;
    let toys = 0;
    let vetDoctor = 0;
    let unknown = 0;

    catFood = catToilet * 125 / 100;
    toys = catFood * 50 / 100;
    vetDoctor = toys * 110 / 100;
    result = catFood + toys + vetDoctor + catToilet;
    unknown = result * 5 / 100;
    result += unknown;
    result *= 12;
    result += catBed;

    console.log(`${result.toFixed(2)}lv.`);

}

solve("25", "45");