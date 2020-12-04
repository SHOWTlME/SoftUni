function solve (arg1,arg2){
    let age = Number(arg1);
    let gender = arg2;

    if (age >= 16){
        if (gender === "m"){
            console.log("Mr.");
        }else {
            console.log("Ms.")
        }
    }else {
        if (gender === "m"){
            console.log("Master");
        }else {
            console.log("Miss")
        }
    }
}

solve("18","m");