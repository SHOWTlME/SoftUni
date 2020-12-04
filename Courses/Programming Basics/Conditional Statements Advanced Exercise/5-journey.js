function journey (arg1, arg2){
    let budget = Number(arg1);
    let season = arg2;
    let vacation = "";
    let destination = "";

    if (budget <= 100){
        destination = "Bulgaria";
        if (season === "Summer"){
            budget *= 30/100;
            vacation = "Camp";
        }else {
            budget *= 70/100;
            vacation = "Hotel";
        }
    }else if (budget <= 1000){
        destination = "Balkans";
        if (season === "Summer"){
            budget *= 40/100;
            vacation = "Camp";
        }else{
            budget *= 80/100;
            vacation = "Hotel";
        }
    }else {
        destination = "Europe";
        budget *= 90/100;
        vacation = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${vacation} - ${budget.toFixed(2)}`);
}

journey("50", "Summer");