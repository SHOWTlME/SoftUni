function speed(speed1, speed2, speed3, speed4, speed5){
    let type = Number(speed1);

    if (type <= 10){
        console.log("slow");
    }else if (type <= 50){
        console.log("average");
    }else if (type <= 150){
        console.log("fast");
    }else if (type <= 1000){
        console.log("ultra fast");
    }else if (type > 1000){
        console.log("extremely fast");
    }
}

speed("8", "49.5", "126", "160", "3500", );