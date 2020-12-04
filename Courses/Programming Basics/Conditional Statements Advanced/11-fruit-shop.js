function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let result = 0;


    switch (day) {
        case "Monday":
            switch (fruit) {
                case "banana": result = quantity * 2.50; break;
                case "apple": result = quantity * 1.20; break;
                case "orange": result = quantity * 0.85; break;
                case "grapefruit": result = quantity * 0.85; break;
                case "kiwi": result = quantity * 2.70; break;
                case "pineapple": result = quantity * 5.50; break;
                case "grapes": result = quantity * 3.85; break;
            };break; 
        case "Tuesday":
            switch (fruit) {
                case "banana": result = quantity * 2.50; break;
                case "apple": result = quantity * 1.20; break;
                case "orange": result = quantity * 0.85; break;
                case "grapefruit": result = quantity * 0.85; break;
                case "kiwi": result = quantity * 2.70; break;
                case "pineapple": result = quantity * 5.50; break;
                case "grapes": result = quantity * 3.85; break;
            };break; 
        case "Wednesday":
            switch (fruit) {
                case "banana": result = quantity * 2.50; break;
                case "apple": result = quantity * 1.20; break;
                case "orange": result = quantity * 0.85; break;
                case "grapefruit": result = quantity * 0.85; break;
                case "kiwi": result = quantity * 2.70; break;
                case "pineapple": result = quantity * 5.50; break;
                case "grapes": result = quantity * 3.85; break;
            };break; 
        case "Thursday":
            switch (fruit) {
                case "banana": result = quantity * 2.50; break;
                case "apple": result = quantity * 1.20; break;
                case "orange": result = quantity * 0.85; break;
                case "grapefruit": result = quantity * 0.85; break;
                case "kiwi": result = quantity * 2.70; break;
                case "pineapple": result = quantity * 5.50; break;
                case "grapes": result = quantity * 3.85; break;
            };break; 
        case "Friday":
            switch (fruit) {
                case "banana": result = quantity * 2.50; break;
                case "apple": result = quantity * 1.20; break;
                case "orange": result = quantity * 0.85; break;
                case "grapefruit": result = quantity * 0.85; break;
                case "kiwi": result = quantity * 2.70; break;
                case "pineapple": result = quantity * 5.50; break;
                case "grapes": result = quantity * 3.85; break;
            };break;
        case "Saturday":
            switch (fruit) {
                case "banana": result = quantity * 2.70; break;
                case "apple": result = quantity * 1.25; break;
                case "orange": result = quantity * 0.90; break;
                case "grapefruit": result = quantity * 1.60; break;
                case "kiwi": result = quantity * 3.00; break;
                case "pineapple": result = quantity * 5.60; break;
                case "grapes": result = quantity * 4.20; break;
            };break; 
        case "Sunday":
            switch (fruit) {
                case "banana": result = quantity * 2.70; break;
                case "apple": result = quantity * 1.25; break;
                case "orange": result = quantity * 0.90; break;
                case "grapefruit": result = quantity *= 1.60; break;
                case "kiwi": result = quantity * 3.00; break;
                case "pineapple": result = quantity * 5.60; break;
                case "grapes": result = quantity * 4.20; break;
            };break;

    }if (result  === 0 || result == quantity || result < 0){
        console.log("error")
    }else {
        console.log(result.toFixed(2));
    }
}

fruitShop("tomato", "Monday", "0.5");