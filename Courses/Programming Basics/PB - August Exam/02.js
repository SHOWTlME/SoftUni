function solve(arg1,arg2,arg3,arg4){
    let sleeveSize = Number(arg1);
    let frontSize = Number(arg2);
    let material = arg3;
    let tie = arg4;
    let shirtSize = 0;
    let result = 0;

    shirtSize = 2 * sleeveSize + 2 * frontSize;
    shirtSize *= 110 / 100;
    shirtSize /= 100;
    switch(material){
        case "Linen":   result = shirtSize * 15 + 10;break;
        case "Cotton":  result = shirtSize * 12 + 10;break;
        case "Denim":   result = shirtSize * 20 + 10;break;
        case "Twill":   result = shirtSize * 16 + 10;break;
        case "Flannel": result = shirtSize * 11 + 10;break;
    }
    if (tie === "Yes"){
        result *= 120 / 100;
    }
    console.log(`The price of the shirt is: ${result.toFixed(2)}lv`);
}

solve("25","30","Linen","No");