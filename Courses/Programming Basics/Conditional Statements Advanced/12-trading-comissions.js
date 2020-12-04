function tradingCommissions(arg1, arg2){
    let town = arg1;
    let sales = Number(arg2);
    let result = 0;

    switch(town){
        case "Sofia":
        if (sales <= 500){
            result = sales * 5 / 100;
        }else if (sales <= 1000){
            result = sales * 7 / 100;
        }else if (sales <= 10000){
            result = sales * 8 / 100;
        }else {
            result = sales * 12 / 100;
        };break;
        case "Varna":
            if (sales <= 500){
                result = sales * 4.5 / 100;
            }else if (sales <= 1000){
                result = sales * 7.5 / 100;
            }else if (sales <= 10000){
                result = sales * 10 / 100;
            }else {
                result = sales * 13 / 100;
            };break;
            case "Plovdiv":
                if (sales <= 500){
                    result = sales * 5.5 / 100;
                }else if (sales <= 1000){
                    result = sales * 8 / 100;
                }else if (sales <= 10000){
                    result = sales * 12 / 100;
                }else {
                    result = sales * 14.5 / 100;
                };break;
            }if (result === 0 || result < 0){
                console.log("error");
            }else {
                console.log(result.toFixed(2));
            }
        }
tradingCommissions("Plovdiv", "-20");