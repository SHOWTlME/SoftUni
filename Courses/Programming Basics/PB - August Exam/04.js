function solve(arg1,arg2,arg3){
    let n = Number(arg1);
    let m = Number(arg2);
    let s = Number(arg3);
    let z = "";

    for(let i = m; n <= i; i--){

        if(i % 2 === 0 && i % 3 === 0){
            if (i === s){
                break;
            }
            z += i + " ";
        }
    }
    console.log(z);
}

solve("1","36","12");