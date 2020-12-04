function solve(arg1, arg2, arg3){
    let litersFuel = Number(arg1);
    let litersForOneLap = Number(arg2);
    let totalLaps = Number(arg3);

    for (let lap = 0; lap < totalLaps; lap++){
        litersFuel -= litersForOneLap - 0.1;

        if(litersFuel <= 0){
            console.log(`You are out of fuel in round ${lap}!`);
            break;
        }
    }if (litersFuel > 0){
        console.log(`Congrats! You won the race!`);
    }
}
solve("70", "6.5", "10");