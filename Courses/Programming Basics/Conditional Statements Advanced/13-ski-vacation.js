function skiVacation(arg1, arg2, arg3){
    let days = Number(arg1);
    let room = arg2;
    let grade = arg3;
    let result = 0;

    switch (room){
        case "room for one person":
            if (days <= 10 || days <= 15 || days > 15){
                result = 18.00 * (days - 1);
            };break;
        case "apartment":
            if (days <= 10 || days <= 15 || days > 15){
                result = 25.00 * (days - 1);
                if (days <= 10){
                    result *= 70 / 100;
                }else if (days <= 15){
                    result *= 65 / 100;
                }else {
                    result *= 50 / 100;
                }
            };break;
            case "president apartment":
                if (days <= 10 || days <= 15 || days > 15){
                    result = 35.00 * (days - 1);
                    if (days <= 10){
                        result *= 90 / 100;
                    }else if (days <= 15){
                        result *= 85 / 100;
                    }else {
                        result *= 80 / 100;
                    }
                };break;
    }if (grade === "positive"){
        result *= 125 / 100;
    }else if (grade === "negative"){
        result *= 90 / 100;
    }console.log(result.toFixed(2));
}

skiVacation("30", "president apartment", "negative");