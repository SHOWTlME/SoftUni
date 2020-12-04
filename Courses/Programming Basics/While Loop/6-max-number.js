function maxNumber(input){
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let index = 0;
    let command = input[index];
    index++

    while (command !== "Stop"){
        let num = Number(command);
        if (num > maxNumber){
            maxNumber = num;
        }
        command = input[index];
        index++
    }
    console.log(maxNumber);
}
maxNumber(["-10",
"20",
"-30",
"Stop"]);