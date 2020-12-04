function aluminumJoinery(arg1, arg2, arg3){
    let joinery = Number(arg1);
    let joineryType = arg2;
    let delivery = arg3;
    let sum = 0;

    switch(joineryType){
        case "90X130":
            if (joinery > 60){
                sum = (110 * joinery) * 92 / 100;
            }else if (joinery > 30){
                sum = (110 * joinery) * 95 / 100;
            }break;
        case "100X150":
            if(joinery > 80){
                sum = (140 * joinery) * 90 / 100;
            }else if (joinery < 40){
                sum = (140 * joinery) * 94 / 100;
            }break;
        case "138X180":
            if(joinery > 50){
                sum = (190 * joinery) * 88 / 100;
            }else if (joinery > 20){
                sum = (190 * joinery) * 93 / 100;
            }break;
        case "200X300":
            if(joinery > 50){
                sum = (250 * joinery) * 86 / 100;
            }else if
                (joinery > 25){
                    sum = (250 * joinery) * 91 / 100;
            }break;
    }   

    if (delivery === "With delivery"){
        sum += 60;
        if(joinery > 99){
            sum *= 96 / 100;
        }
    }
    if(joinery > 10){
        console.log(`${sum.toFixed(2)} BGN`);
    }else {
        console.log(`Invalid order`);
    }
}
aluminumJoinery("105", "100X150", "With delivery")