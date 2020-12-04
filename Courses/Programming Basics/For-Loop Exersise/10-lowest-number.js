function solve(input){
    let n = Number(input[0]);
    let lowestNumber = Number(input[1]);

    for(let i = 2; i < input.length; i++){
        let highestNumber = Number(input[i]);
        if (highestNumber < lowestNumber){
            lowestNumber = highestNumber;
        }
    }console.log(lowestNumber);
}
solve(["2",
"100",
"99"]);