function shopForToys (travelPrice, puzzleCount, dollCount, bearCount, minionCount, truckCount){

    travelPrice = Number(travelPrice);
    puzzleCount = Number(puzzleCount);
    dollCount = Number(dollCount);
    bearCount = Number(bearCount);
    minionCount = Number(minionCount);
    truckCount = Number(truckCount);

    let priceOfOrder = puzzleCount * 2.60 + dollCount * 3 
    + bearCount * 4.10 + minionCount * 8.20 + truckCount * 2;
    
    let toys = puzzleCount + dollCount + bearCount + minionCount + truckCount;
    if (toys >= 50){
        priceOfOrder = priceOfOrder * 0.75;
    }
    priceOfOrder = priceOfOrder * 0.9;
    let diff = priceOfOrder - travelPrice;
    if (priceOfOrder >= travelPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
}else {
    console.log(`Not enough money! ${Math.abs(diff).toFixed(2)} lv needed.`);
}
}
shopForToys("40.8", "20", "25", "30", "50", "10",);