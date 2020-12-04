function hotelRoom(arg1, arg2) {
    let month = arg1;
    let nights = Number(arg2);
    let room = "Studio";
    let room1 = "Apartment"
    let result = 0;

    if (month === "May"){
        if (room === "Studio"){
            result = nights * 50;
    }   if (nights > 7){
        result *= 95 / 100;
    }else if (nights > 14){
        result *= 70 / 100
    }if (room1 === "Apartment"){
        result = nights * 65;
    }else if (nights > 14){
        result *= 90 / 100;
    }
    }else if (month === "October"){
        if (room === "Studio"){
            result = nights * 50;
        }else if (nights > 7){
            result *= 95 / 100;
        }else if (nights > 14){
            result *= 70 / 100;
        }if (room1 === "Apartment"){
            result = nights * 65;
        }else if (nights > 14){
            result *= 90 / 100;
        }
    }else if (month === "July"){
        if (room === "Studio"){
            result = nights * 75.20;
        }else if (nights > 14){
            result *= 80 / 100;
        }if (room1 === "Apartment"){
            result = nights * 68.70;
        }else if (nights > 14){
            result *= 90 / 100;
        }
    }else if (month === "September"){
        if (room === "Studio"){
            result = nights * 75.20;
        }else if (nights > 14){
            result *= 80 / 100;
        }if (room1 === "Apartment"){
            result = nights * 68.70;
        }else if (nights > 14){
            result *= 90 / 100;
        }
    }else if (month === "July"){
        if (room === "Studio"){
            result = nights * 76;
        }if (room1 === "Apartment"){
            result = nights * 77;
        }else if (nights > 14){
            result *= 90 / 100;
        }
    }else if (month === "August"){
        if (room === "Studio"){
            result = nights * 76;
        }if (room1 === "Apartment"){
            result = nights * 77;
        }else if (nights > 14){
            result *= 90 / 100;
        }
    }
     console.log(`${room}: ${result} lv.`);
     console.log(`${room1}: ${result} lv.`);
}
hotelRoom("May", "15");