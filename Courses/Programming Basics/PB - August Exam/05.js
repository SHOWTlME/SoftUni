function solve(input){
    let index = 0;
    let profit = 0;
    let seaTravel = Number(input[index]);
    index++;
    let mountainTravel = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "Stop"){
        if("sea" === command){
            if(seaTravel > 0){
                profit += 680;
                seaTravel -= 1;
            }
        }
        if ("mountain" === command){
            if(mountainTravel > 0){
                profit += 499;
                mountainTravel -= 1;
            }
        }
        if (seaTravel === 0 && mountainTravel === 0){
            break;
        }
        command = input[index];
        index++;
    }
    if (seaTravel === 0 && mountainTravel === 0){
        console.log(`Good job! Everything is sold.`)
    }
    console.log(`Profit: ${profit} leva.`)
}

solve(["6",
    "3",
    "sea",
    "mountain",
    "mountain",
    "mountain",
    "sea",
    "Stop"]);