function solve(arg1, arg2){
let startYear = Number(arg1);
let endYear = Number(arg2);

    for(let i = startYear; i <= endYear; i += 4){
        console.log(i);
    }
}
solve("1908", "1919");