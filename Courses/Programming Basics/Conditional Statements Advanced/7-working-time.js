function solve(arg1, arg2){
    let hour = Number(arg1);
    let day = arg2;

    switch(day){
        case "Monday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            }else {
                console.log("closed");break;
            }
        break;
        case "Tuesday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            }else {
                console.log("closed");break;
            }
            break;
        case "Wednesday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            }else {
                console.log("closed");break;
            }
            break;
        case "Thursday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            }else {
                console.log("closed");break;
            }
            break;
        case "Friday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            }else {
                console.log("closed");break
            }
            break;
        case "Saturday":
            if (hour >= 10 && hour <= 18){
                console.log("open");
            }else {
                console.log("closed")
            }
            break;
        case "Sunday":
            console.log("closed");break; 
    }
}
solve("15", "Saturday");